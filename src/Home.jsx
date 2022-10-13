import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state.stateValue)

    const Increment = () => {
        dispatch({type:'increment'})
    }

    const Decrement = () => {
        dispatch({type:'decrement'})
    }

    const IncrementByValue = () => {
        dispatch({type:'incrementByValue',payload:20})
    }

    const DecrementByValue = () => {
        dispatch({type:'decrementByValue',payload:20})
    }
  return (
    <div>
      
      <h1>{count}</h1>

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={IncrementByValue}>IncrementByValue</button>
      <button onClick={DecrementByValue}>DecrementByValue</button>

    </div>
  )
}

export default Home
