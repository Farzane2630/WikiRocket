"use client"

import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
   error: Error,
   reset: () => void
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
   useEffect(() => {
      console.error(error)
   }, [error])
   return (
      <main className="bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen">
         <h2 className="my-4 text-2xl font-bold">Something went wrong!</h2>
         <button className="mb-4 p-4 bg-red-500 text-white rounded-xl"
            onClick={() => reset()}
         >
            Try Again
         </button>
         <p className="text-xl">Or go back to
            <Link href="/" className="underline">Home</Link>
         </p>
      </main>
   );
}

export default Error;