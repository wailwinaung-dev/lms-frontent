// app/api/realtime/client_secret/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://api.openai.com/v1/realtime/client_secrets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      session: {
        type: 'realtime',
        // pick a realtime-capable model available to your account:
        model: 'gpt-realtime'
      }
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    return new NextResponse(errText, { status: res.status });
  }

  const data = await res.json();
  console.log('fetched client secret', data);
  // send full object (contains client_secret.value)
  return NextResponse.json(data);
}
