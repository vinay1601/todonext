import { createSlice } from '@reduxjs/toolkit'

const isClient = typeof window !== 'undefined'

const initialState = {
    theme: 'light',
}

export const ThemeSlices = createSlice({
    initialState,
    name: 'theme',
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
            if (isClient) {
                localStorage.setItem('theme', action.payload)
            }
        },
        toggleTheme: (state) => {
            const newTheme = state.theme === 'light' ? 'dark' : 'light'
            state.theme = newTheme
            if (isClient) {
                localStorage.setItem('theme', newTheme)
            }
        },
    },
})


export const { setTheme, toggleTheme } = ThemeSlices.actions;

export default ThemeSlices.reducer;