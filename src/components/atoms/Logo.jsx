import { cn } from '@/lib/utils'
import React from 'react'

const Logo = ({ className = '' }) => {
    return (
        <>
            <div className='flex w-fit h-16 relative items-center'>
                <span className='flex text-[26px] md:text-3xl font-extrabold text-blue-500 dark:text-white'>Todos</span>
                <span className='flex text-[26px] md:text-3xl font-extrabold text-yellow-400 dark:text-yellow-600'>Work</span>
            </div>
        </>
    )
}

export default Logo
