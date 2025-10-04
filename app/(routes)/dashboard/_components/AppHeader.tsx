import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Stethoscope } from 'lucide-react'

function AppHeader() {

    const menuOptions = [
        {
            id: 1,
            name: "Home",
            path: '/dashboard/home'
        },
        {
            id: 2,
            name: "History",
            path: '/history'
        },
        {
            id: 3,
            name: "Pricing",
            path: '/dashboard/billing'
        },
    ]

    return (
        <div className='flex items-center justify-between p-4 shadow px-10 md:px-20 lg:px-40 bg-white border-b'>
            <Link href="/dashboard" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                    <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">DocTalk AI</span>
            </Link>
            <div className='hidden md:flex gap-12 items-center'>
                {menuOptions.map((option, index) => (
                    <Link key={index} href={option.path}>
                        <h2 className='hover:font-bold cursor-pointer transition-all hover:text-blue-600 text-gray-700'>{option.name}</h2>
                    </Link>
                ))}
            </div>
            <UserButton
                afterSignOutUrl="/"
                appearance={{
                    elements: {
                        avatarBox: "h-10 w-10 rounded-full border-2 border-blue-200 hover:border-blue-400 transition-colors",
                        userButtonPopoverCard: "shadow-lg border",
                        userButtonPopoverActionButton: "hover:bg-blue-50"
                    }
                }}
                userProfileMode="navigation"
                userProfileUrl="/user-profile"
            />
        </div>
    )
}

export default AppHeader