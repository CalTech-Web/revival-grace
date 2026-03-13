import { NextRequest, NextResponse } from "next/server";
import { addOrUpdateSubscriber } from "@/lib/mailchimp";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ status: "error", message: "Email is required" }, { status: 400 });
    }

    const subscriberName = typeof name === "string" ? name : "";
    const result = await addOrUpdateSubscriber(email, subscriberName);

    // Fire-and-forget POST to CalTech Web forms service
    fetch("https://forms.caltechweb.com/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        site: "revivalgrace.com",
        name: subscriberName,
        email,
        message: `Devotional subscriber (${result}): ${subscriberName || "Newsletter"} (${email})`,
        source: "registration",
      }),
    }).catch(() => {});

    return NextResponse.json({ status: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Subscribe error:", message);
    return NextResponse.json({ status: "error", message }, { status: 500 });
  }
}
