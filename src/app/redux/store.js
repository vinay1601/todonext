import { configureStore } from '@reduxjs/toolkit'
import CounterSlices from './slices/counter'
import ThemeSlices from './slices/themeSlice'


export const store = configureStore({
    reducer: {
        counter: CounterSlices,
        theme: ThemeSlices,
    },
})