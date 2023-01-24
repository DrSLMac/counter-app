import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isPositive, setPositive] = useState(false)
  const [isNegative, setNegative] = useState(false)


  return (
    <div className='app'>
      <div className='card'>
        <h1>Counter App</h1>

        <h2 className={count > 0 ? "positive" 
                      : count < 0 ? "negative" 
                      : null}
        >
          {count}
        </h2>

        <hr className='line'></hr>

        <div className='button-container'>
          <button className='button subtract' 
            onClick={() => setCount((count) => count - 1)}   
          >
            ⬇ Subtract
          </button>
          <button className='button reset' onClick={() => setCount((count) => count = 0)}>↩ Reset</button>
          <button className='button addition' onClick={() => setCount((count) => count + 1)}>⬆ Add</button>
        </div>

      </div>
    </div>
  )
}

export default App
