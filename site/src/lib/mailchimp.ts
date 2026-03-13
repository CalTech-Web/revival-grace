import { createHash } from "crypto";

function getConfig() {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const SERVER = process.env.MAILCHIMP_SERVER_PREFIX;
  const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!API_KEY || !SERVER || !LIST_ID) {
    throw new Error(
      `Missing Mailchimp env vars: API_KEY=${!!API_KEY}, SERVER=${!!SERVER}, LIST_ID=${!!LIST_ID}`
    );
  }

  const BASE_URL = `https://${SERVER}.api.mailchimp.com/3.0`;
  const authHeader = `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`;

  return { BASE_URL, LIST_ID, authHeader };
}

export function getSubscriberHash(email: string): string {
  return createHash("md5").update(email.toLowerCase()).digest("hex");
}

export async function getSubscriberStatus(
  email: string
): Promise<"subscribed" | "pending" | "unsubscribed" | "cleaned" | "not_found"> {
  const { BASE_URL, LIST_ID, authHeader } = getConfig();
  const hash = getSubscriberHash(email);

  const res = await fetch(`${BASE_URL}/lists/${LIST_ID}/members/${hash}`, {
    method: "GET",
    headers: { Authorization: authHeader },
  });

  if (res.status === 404) return "not_found";

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`Mailchimp API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  return data.status as "subscribed" | "pending" | "unsubscribed" | "cleaned";
}

export async function addOrUpdateSubscriber(
  email: string,
  name: string
): Promise<"verification_sent" | "pending_verification" | "already_subscribed" | "forgotten"> {
  const { BASE_URL, LIST_ID, authHeader } = getConfig();
  const status = await getSubscriberStatus(email);

  if (status === "subscribed") {
    return "already_subscribed";
  }

  const hash = getSubscriberHash(email);
  const nameParts = name.trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  const res = await fetch(`${BASE_URL}/lists/${LIST_ID}/members/${hash}`, {
    method: "PUT",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email.toLowerCase(),
      status: "pending",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    // Handle permanently deleted (GDPR forgotten) contacts
    if (error.title === "Forgotten Email Not Subscribed") {
      return "forgotten";
    }
    throw new Error(`Mailchimp API error: ${res.status} ${JSON.stringify(error)}`);
  }

  return status === "pending" ? "pending_verification" : "verification_sent";
}
