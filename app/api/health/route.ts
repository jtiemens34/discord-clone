import { NextResponse } from "next/server";

export function GET (
  req: Request
) {
  return new NextResponse("Heartbeat message", { status: 200 });
}