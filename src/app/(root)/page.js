"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement } from '../redux/slices/counter'

const Home = () => {


    const count = useSelector((state) => state.counter)

    const dispatch = useDispatch()
    return (
        <div>
            <p>hello</p>
            <h1>count is {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

export default Home
