"use client"
import React from 'react'
import { signIn, useSession } from 'next-auth/react'
const Login = () => {
    const session =useSession();
    console.log(session)
  return (
    <div>
        <button onClick={()=> signIn("google")}>
            Login with google
        </button>
    </div>
  )
}

export default Login