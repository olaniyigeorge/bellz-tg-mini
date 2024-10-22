import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="font-bold text-3xl">Not Found</h2>
      <p className="">Oops!!! The requested resource was not found</p>
      <Link href="/" className="text-purple-500 hover:underline">Return Home</Link>
    </div>
  )
}
