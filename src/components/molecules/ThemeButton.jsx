"use client"
import React from 'react'
import useTheme from '@/app/hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <div className="transition-colors bg-transparent text-black dark:bg-transparent dark:text-white h-fit flex items-center justify-center">
                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-lg bg-gradient-to-tr from-blue-100 to-indigo-200 text-gray-500 dark:text-white hover:shadow-xl transition-all duration-300 ease-in-out dark:from-yellow-400 dark:to-pink-500"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? (
                        <Sun className="w-5 h-5 md:w-4 md:h-4" />
                    ) : (
                        <Moon className="w-5 h-5 md:w-4 md:h-4" />
                    )}
                </button>
            </div>
        </>
    )
}

export default ThemeButton
