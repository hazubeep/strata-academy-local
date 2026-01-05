// app/api/auth/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const { OAUTH_CLIENT_ID } = process.env;

  if (!OAUTH_CLIENT_ID) {
    return NextResponse.json({ error: "Missing Client ID" }, { status: 500 });
  }

  // Arahkan ke GitHub dengan scope yang dibutuhkan Decap (repo & user)
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${OAUTH_CLIENT_ID}&scope=repo,user`;

  return NextResponse.redirect(redirectUrl);
}
