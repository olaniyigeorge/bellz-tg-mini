const TELEGRAM_BOT_TOKEN = process.env.BOT_TOKEN;
const BOT_ID = process.env.BOT_ID;

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Correctly parse the body
    const message = body.message;
    
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: BOT_ID, // Use your Telegram chat ID here
          text: message,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      //throw new Error(`Error: ${response.statusText}`);
      console.log(data)
      return new Response(JSON.stringify({data}), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
