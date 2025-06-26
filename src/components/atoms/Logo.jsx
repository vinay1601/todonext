import { cn } from '@/lib/utils'
import React from 'react'

const Logo = () => {
    return (
        <>
            <div className='flex w-fit h-16 relative border-2 border-amber-600 items-center'>
                <span className={cn('flex text-2xl font-bold')}>TodosWork</span>
            </div>
        </>
    )
}

export default Logo
