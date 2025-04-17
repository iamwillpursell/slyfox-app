"use client"
import { SignOutButton, useUser } from '@clerk/nextjs'

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
      <div>
        Hello {user.firstName}!
        <SignOutButton>
            <button className='group relative flex justify-center bg-black py-2 px-3 text-sm font-semibold text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-orange-600"><span className="absolute inset-y-0 left-0 flex items-center pl-3"><LockClosedIcon className="h-5 w-5 text-white" aria-hidden="true'>Custom sign out button</button>
        </SignOutButton>
      </div>
    )
  }