
import TelegramAuth from '@/components/telegramAuth';
import { getSession } from '@/utils/session';
import Link from 'next/link';


export default async function Home() {
  const session = await getSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8 w-full text-center">Jwt Authentication for Telegram Mini Apps</h1>
      <Link 
        href="/wait-list"
        className="text-sm p-2 border rounded-md font-medium hover:bg-slate-900 mb-4 w-fit text-center"
      > Join our waitlist 
      </Link>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <TelegramAuth />
    </main>
  )
}