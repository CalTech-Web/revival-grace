import { NextRequest, NextResponse } from "next/server";
import { approvedEmails, blacklistedEmails } from "@/data/subscribers";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ status: "error", message: "Email is required" }, { status: 400 });
    }

    const normalized = email.toLowerCase().trim();

    if (blacklistedEmails.has(normalized)) {
      return NextResponse.json({ status: "blacklisted" });
    }

    if (approvedEmails.has(normalized)) {
      return NextResponse.json({ status: "approved" });
    }

    return NextResponse.json({ status: "not_found" });
  } catch {
    return NextResponse.json({ status: "error", message: "Something went wrong" }, { status: 500 });
  }
}
