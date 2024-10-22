"use client"
import { useState } from 'react';


interface BotInfo{
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
    can_join_groups: boolean;
    can_read_all_group_messages: boolean;
    supports_inline_queries: boolean;
    can_connect_to_business: boolean;
    has_main_web_app: boolean;
  }
type BotResponse = {
    id: number;
    result: BotInfo
  };;

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState<BotResponse | null>(null);

  const sendMessage = async () => {
    const res = await fetch('/api/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    console.log(res)
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div className="w-full mx-auto h-screen flex flex-col justify-center gap-3 items-center">
      <h1>Send Message to Telegram</h1>
      <input
        type="text"
        className=" p-2 rounded-md text-gray-900"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button 
        onClick={sendMessage}
        className="border p-2 hover:bg-slate-800 rounded-lg"
        >
            Send
        </button>

      {response && <>{response.result.first_name}</>}
    </div>
  );
}
