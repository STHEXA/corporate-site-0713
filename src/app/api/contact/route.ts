import { contactSchema } from "@/schemas/contactSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { success: false, errors: result.error },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true, message: "送信完了しました" });
}
