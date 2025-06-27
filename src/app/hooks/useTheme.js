"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, toggleTheme } from '../redux/slices/themeSlice'

const useTheme = () => {
    const theme = useSelector((state) => state.theme.theme)
    const dispatch = useDispatch()

    useEffect(() => {
        const localTheme = localStorage.getItem('theme') || 'light'
        dispatch(setTheme(localTheme));
    }, [dispatch])

    useEffect(() => {
        const html = document.documentElement;
        html.classList.remove('light', 'dark');
        html.classList.add(theme)
    }, [theme])

    return {
        theme,
        toggleTheme: () => dispatch(toggleTheme()),
        setTheme: (val) => dispatch(setTheme(val)),
    }
}

export default useTheme
