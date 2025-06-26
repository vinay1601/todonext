import { createSlice } from '@reduxjs/toolkit'


export const CounterSlices = createSlice({
    initialState: 0,
    name: 'counter',
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
})

export const { increment, decrement } = CounterSlices.actions;

export default CounterSlices.reducer;