import { configureStore } from '@reduxjs/toolkit'
import CounterSlices from './slices/counter'


export const store = configureStore({
    reducer: {
        counter: CounterSlices,
    },
})