import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../atoms/Logo'
import ThemeButton from './ThemeButton'
import { Button } from '../ui/button'

const Navbar = () => {
    return (
        <>
            <header className='flex sticky top-0 z-20 w-full'>
                <div className='h-16 w-full flex items-center px-4 max-w-[1480px] mx-auto md:px-9 justify-between'>
                    {/* <h1>navbar</h1> */}
                    <div className='flex h-fit w-fit items-center'>
                        <Link href={'/'}>
                            <Logo />
                        </Link>
                    </div>
                    <div className="flex flex-1 justify-end items-center gap-3">
                        <ThemeButton />
                        <Button variant="outline" className="bg-blue-600 py-5 px-4 text-base text-white">
                            Get Started
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
