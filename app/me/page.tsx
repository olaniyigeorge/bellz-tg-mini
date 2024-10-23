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
 
  return (
    <div className="w-full mx-auto h-screen flex flex-col justify-center gap-3 items-center">
      {
        me ?
        <div className='flex flex-col gap-2'> 
          <h1 className="text-2xl font-bold"> User Data</h1>
          <span className='flex gap1 w-full'>
          <>ID: {me.id} </>           
          </span> 
          <span className='flex gap1 w-full'>
          <>FIRST_NAME: {me.first_name}</>            
          </span>
          <span className='flex gap1 w-full'>
          <>USER_NAME: {me.username}</>            
          </span>
          <span className='flex gap1 w-full'>
          <>can_connect_to_business: {me.can_connect_to_business}</> 
          </span>
          <span className='flex gap1 w-full'>
          <>can_join_groups: {me.can_join_groups}</> 
          </span>
        </div>
        : 
        <>loading....</>
        
        }
    </div>
  );
}
