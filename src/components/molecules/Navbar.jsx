import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../atoms/Logo'

const Navbar = () => {
    return (
        <>
            <header className='flex w-full'>
                <div className='border-2 border-amber-600 h-16 w-full flex items-center'>
                    {/* <h1>navbar</h1> */}
                    <div className='flex h-fit w-fit'>
                        <Link href={'/'}>
                            <Logo />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
