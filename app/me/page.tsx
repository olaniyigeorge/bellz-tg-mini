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


export default function Home() {
  const [me, setMe] = useState<BotInfo | null>(null);

  const getMe = async () => {

    const res = await fetch('/api/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res)
    const data = await res.json();
    setMe(data.result);
    // console.log(data)
    console.log(data.result)
  };

  return (
    <div className="w-full mx-auto h-screen flex flex-col justify-center gap-3 items-center">
      <button 
        onClick={getMe}
        className="border p-2 hover:bg-slate-800 rounded-lg"
        >
            Get Me
        </button>

      {
        me ?
        <p>
            Update Me: {me.first_name}
        </p>
        : 
        <>Me: {me}</>
        
        }
    </div>
  );
}
