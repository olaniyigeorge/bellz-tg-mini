"use client"
export default function WaitList() {

    async function signUp() {
        // Call endpoint to sign up
    }
  return (
    <div className="flex justify-center items-center p-3 flex-col gap-3">
        <h1 className='w-full justify-center items-start '>
            Auth&apos;d route
        </h1>
        <input 
            type="email" 
            required
            className='p-2'
        />

        <button className='' onClick={signUp} >
            Sign Up
        </button>
    </div>
  )
}
