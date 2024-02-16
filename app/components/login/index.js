'use client'
import { signIn } from "next-auth/react"
export default function Login(){
    return(
        <div className="bg-blue-900 flex items-center justify-center w-screen h-screen">
        <div className="text-center  w-full"> 
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4"
          >
            Login with Google
          </button>
        </div>
      </div>
    )
}