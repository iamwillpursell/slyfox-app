"use client"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import FoxLogo from "../../../public/sly-fox-logo-notext.png"
/* import { LockClosedIcon } from '@heroicons/react/20/solid' */
import { SignIn } from "@clerk/nextjs"

export default function Login() {

  return (
  <>
  <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <SignIn forceRedirectUrl="/dashboard" />
        </div>
      </div>
    </div>
    </>
    )
  }