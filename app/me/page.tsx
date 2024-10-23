"use client"
import {useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { useRouter } from 'next/navigation';

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
  const router = useRouter()
  const [me, setMe] = useState<UserInfo | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  useEffect(() => {
    if(WebApp.initDataUnsafe.user) {
      setMe(WebApp.initDataUnsafe.user as UserInfo)
    }
  }, [])

  const authenticateUser = async () => {
    const WebApp = (await import('@twa-dev/sdk')).default
    WebApp.ready()
    const initData = WebApp.initData
    console.log("InitData: ", initData)
    if (initData) {
        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ initData }),
            })

            if (response.ok) {
                setIsAuthenticated(true)
                console.log("IsAuthenticated: ", isAuthenticated)
                router.refresh()
            } else {
                console.error('Authentication failed')
                setIsAuthenticated(false)
            }
        } catch (error) {
            console.error('Error during authentication:', error)
            setIsAuthenticated(false)
        }
    } else {
        console.log("InitData not avaliable...")
    }
}

 
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

          <button
              onClick={authenticateUser}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
              Authenticate
          </button>
        </div>
        : 
        <>loading....</>
        
        }
    </div>
  );
}
