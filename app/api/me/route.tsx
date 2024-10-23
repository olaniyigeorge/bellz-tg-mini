const TELEGRAM_BOT_TOKEN = process.env.BOT_APIKEY;
// const MINI_APP_ID = process.env.MINI_APP_ID;

export async function GET() {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`,
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
   
    if (!response.ok) {
        console.log(data)
        return new Response(JSON.stringify(data), {
        status: response.status,
        headers: {
            'Content-Type': 'application/json',
        },
        });
    }

    console.log(data)
    return new Response(JSON.stringify(data), {
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
