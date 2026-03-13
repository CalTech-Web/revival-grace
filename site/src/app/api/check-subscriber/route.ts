import { NextRequest, NextResponse } from "next/server";
import { getSubscriberStatus } from "@/lib/mailchimp";

export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.json({ status: "error", message: "Email is required" }, { status: 400 });
    }

    const status = await getSubscriberStatus(email);

    return NextResponse.json({ status });
  } catch (error) {
    console.error("Check subscriber error:", error);
    return NextResponse.json({ status: "error", message: "Something went wrong" }, { status: 500 });
  }
}
