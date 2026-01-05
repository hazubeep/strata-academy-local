// app/api/callback/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } = process.env;

  if (!code || !OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET) {
    return NextResponse.json(
      { error: "Missing requirements" },
      { status: 400 },
    );
  }

  try {
    // 1. Tukar CODE dengan TOKEN ke GitHub
    const response = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: OAUTH_CLIENT_ID,
          client_secret: OAUTH_CLIENT_SECRET,
          code,
        }),
      },
    );

    const data = await response.json();
    const token = data.access_token;

    if (!token) {
      return NextResponse.json(
        { error: "Failed to retrieve token" },
        { status: 400 },
      );
    }

    // 2. Kirim Token kembali ke Window Decap CMS
    // Decap CMS membuka pop-up login, script ini akan mengirim pesan ke window utama
    // lalu menutup pop-up tersebut.
    const htmlResponse = `
      <html>
        <body>
          <script>
            const receiveMessage = (message) => {
              window.opener.postMessage(
                'authorization:github:success:${JSON.stringify({ token })}',
                '*' // Ganti '*' dengan origin domain Anda untuk keamanan lebih baik di production
              );
              window.close();
            };
            receiveMessage();
          </script>
        </body>
      </html>
    `;

    return new NextResponse(htmlResponse, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
