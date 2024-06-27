import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest, res: NextResponse) {
  const nextAuthSession = cookies().get("next-auth.session-token")?.value || "";

  return NextResponse.json(nextAuthSession);
}
