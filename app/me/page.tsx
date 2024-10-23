"use client"
import {useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';

interface UserInfo{
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
  const [me, setMe] = useState<UserInfo | null>(null);

  useEffect(() => {
    if(WebApp.initDataUnsafe.user) {
      setMe(WebApp.initDataUnsafe.user as UserInfo)
    }
  }, [])
  // const getMe = async () => {

  //   const res = await fetch('/api/me', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   console.log(res)
  //   const data = await res.json();
  //   setMe(data.result);
  //   // console.log(data)
  //   console.log(data.result)
  // };

  return (
    <div className="w-full mx-auto h-screen flex flex-col justify-center gap-3 items-center">
      {
        me ?
        <div className=''> 
          <span className=''>
            {me.id}
          </span> 
          <span className=''>
            {me.first_name}
          </span>
          <span className=''>
            {me.username}
          </span>
          <span className=''>
          can_connect_to_business: {me.can_connect_to_business}
          </span>
          <span className=''>
          can_join_groups: {me.can_join_groups}
          </span>

        </div>
        : 
        <>loading....</>
        
        }
    </div>
  );
}
