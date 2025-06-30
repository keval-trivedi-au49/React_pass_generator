import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const sliderChange = (e) => {
    setCount(e.target.value)
  };

  return (
    <>
      <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
        <div className='bg-white text-black p-4 rounded shadow'>
          <input
            type="text"
            placeholder='Password'
            className='border px-3 py-2 rounded w-64'
          />
        <div className='m-4'>
        <input type="range" min="1" max="100" onChange={sliderChange}/> {count}
        <div  className='m-4'>
        <input type="checkbox"/> Number
        </div>
        <div className='m-4'>
        <input type="checkbox"/> Special Character
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
