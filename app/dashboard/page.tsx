"use client"
import { useUser } from '@clerk/nextjs'
import { SignOutButton } from "@clerk/nextjs"

export default function Dashboard() {
    const { isLoaded, isSignedIn, user} = useUser()
  
    if (!isLoaded) {
      return <div>Loading...</div>
    }
  
    if (!isSignedIn) {
      // You could also add a redirect to the sign-in page here
      return <div>Sign in to view this page</div>
    }
  
    return (
        <>
        <div className="flex py-12 items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1>Hello {user.firstName}!</h1>
        </div>
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <ul className='py-3'>
                <li>USER ID: <strong>{user.id}</strong></li>
                <li>USER EMAIL: <strong>{user.emailAddresses[0]?.emailAddress || 'No email found'}</strong></li>
            </ul>
        </div>
        <div className="flex justify-center flex items-center">
            <SignOutButton>
                <a className="group relative inline-block text-sm font-medium text-black focus:ring-3 focus:outline-hidden" href="#">
                    <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-gray-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="relative block border border-current bg-white px-8 py-3"> Sign Out </span>
                </a>
            </SignOutButton>
        </div>
        </>
    )
  }