import { useState } from 'react'
import './App.css'

import Decrement from './components/decrement'
import Increment from './components/increment'
import InputValue from './components/inputValue'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Increment count={count} setCount={setCount}/>
     <h2>{count}</h2>
     <Decrement count={count} setCount={setCount}/>
   
     <InputValue count={count} setCount={setCount}/>
    </>
  )
}

export default App
