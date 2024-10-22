"use client"
import React, { useEffect, useState } from 'react'


interface TelegramUser {
  id: number; // Unique identifier for the user
  first_name: string; // User's first name
  last_name?: string; // User's last name (optional)
  username?: string; // User's username (optional)
  photo_url?: string; // User's profile photo URL (optional)
  language_code?: string; // User's language code (optional)
}


const DevPage = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  
  useEffect(() => {
    // Ensure the Telegram Web App SDK is loaded
    // if (typeof window !== "undefined" && window.Telegram && window.Telegram.WebApp) {
    //   console.log(window.Telegram.WebApp.initDataUnsafe)
    //   const userData = window.Telegram.WebApp.initDataUnsafe.user;
    //   setUser(userData);
    // }
  }, []);

  if (typeof window !== "undefined" && window.Telegram && window.Telegram.WebApp) {
    console.log(window.Telegram.WebApp.initData)
    window.Telegram.WebApp.close();
  }
  const handleClose = () => {
    
    // Ensure the Telegram Web App SDK is loaded
    // if (typeof window !== "undefined" && window.Telegram && window.Telegram.WebApp) {
    //   console.log(window.Telegram.WebApp.initData)
    //   window.Telegram.WebApp.close();
    // }
  };

  return (
    <div className='w-full p-4 flex flex-col gap-3'>
      <button className='p-1 rounded-full border' onClick={handleClose}>
        X
      </button>

      {user ? (
        <>
          <span className='flex gap-2'> 
            <h4 className='font-medium'>User ID:{" "}</h4>
            <p>{user.id}</p>
          </span>
          <span className='flex gap-2'> 
            <h4 className='font-medium'>First Name:{" "}</h4>
            <p>{user.first_name}</p>
          </span>
          <span className='flex gap-2'> 
            <h4 className='font-medium'>Last Name:{" "}</h4>
            <p>{user.last_name || 'N/A'}</p>
          </span>
          <span className='flex gap-2'> 
            <h4 className='font-medium'>Username:{" "}</h4>
            <p>{user.username || 'N/A'}</p>
          </span>
        </>
      ) : (
        <p>Loading user data...</p>
      )}

      <span className='flex gap-2'> 
        <h4 className='font-medium'>InitData:{" "}</h4>
        <p>{window.Telegram.WebApp.initData}</p>
      </span>
      <span className='flex gap-2'> 
        <h4 className='font-medium'>isExpanded:{" "}</h4>
        <p>{window.Telegram.WebApp.isExpanded ? 'Yes' : 'No'}</p>
      </span>
    </div>
  );
};

export default DevPage;
