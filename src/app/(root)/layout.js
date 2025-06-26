import Navbar from '@/components/molecules/Navbar'
import React from 'react'

const RootLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className='border-2 border-black flex flex-1'>
                <div className='flex h-[calc(100vh-5px)] w-full items-center'>
                    <div className='flex w-full h-fit'>
                        {
                            children
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default RootLayout
