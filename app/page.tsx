import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-extrabold">
          Bellz Mini App
        </h1>
        <ol className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Sign up to the <Link className="text-purple-600 font-medium" href="/home">wait list on LockedIn.</Link>
          </li>
          <li>Read about our vision with BellzStudios.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors dark:bg-purple-600 flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-purple-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://lockedin-api.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            LockedIn API
          </a>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/me"
          >
            Home
          </Link>

        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://bellzstudios.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/bellzstudio.png"
            alt="Bellz"
            className="rounded-full"
            width={24}
            height={24}
          />
          Bellz Studios
        </a>


      </footer>
    </div>
  );
}
