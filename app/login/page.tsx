"use client"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import FoxLogo from "../../public/sly-fox-logo-notext.png"
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import loginUser from '../firebase/auth/auth_signin_password'

export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()
  
    const handleLogin = async (Event: { preventDefault: () => void }) => {
      Event.preventDefault()
      const { error } = await loginUser(email, password);
      if (error) {
        return console.log(error)
      }
      return router.push("/dashboard")
    }

  return (
  <>
  <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div className="flex justify-center">
        <Image
            className="mx-auto"
            src={FoxLogo}
            alt="Sly Fox Logo"
            width={250}
            height={300}
            priority
        />
        </div>
        <form onSubmit={handleLogin} className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full border-0 py-1.5 my-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 pl-2"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 pl-2"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4  border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-black-500 hover:text-orange-600">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button type="submit" className="group relative flex w-full justify-center bg-black py-2 px-3 text-sm font-semibold text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-orange-600"><span className="absolute inset-y-0 left-0 flex items-center pl-3"><LockClosedIcon className="h-5 w-5 text-white" aria-hidden="true" /></span>Login</button>
          </div>
          <div className="text-center">
            <p>Need an account? <Link href="/signup" className="font-medium text-black hover:text-orange-500">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
    </>
    )
  }