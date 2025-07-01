import { useState } from 'react'
import './App.css'

function App() {
  let alphabatics = 'ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuvwxyz'
  const num = '1234567890'
  const specials = '!@#$%^&*()'
  const [count, setCount] = useState(5)
  const [includeNumber, setIncludeNumber] = useState(false)
  const [addSpecial, setaddSpecial] = useState(false)
  const [pass, setPass] = useState('ABCDE');


  const sliderChange = (e) => {
    const length = e.target.value;
    setCount(length)
    let charPool = alphabatics;
    charPool = includeNumber ? charPool += num : charPool
    let str = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * charPool.length);
      str += charPool[index];
    }
    setPass(str);
  };

  const includeNum = (e) => {
    let isChecked = e.target.checked;
    setIncludeNumber(isChecked)
    alphabatics = includeNumber ? alphabatics += num : alphabatics;
    let str = '';
    for (let i = 0; i <= count; i++) {
      const index = Math.floor(Math.random() * alphabatics.length);
      str += alphabatics[index];
    };
    setPass(str);
  };

  const includeSpecial = (e) => {
    let isChecked = e.target.checked;
    setaddSpecial(isChecked)
    alphabatics = includeNumber ? alphabatics += num : alphabatics;
    alphabatics = addSpecial ? alphabatics += specials : alphabatics;
    let str = '';
    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * alphabatics.length);
      str += alphabatics[index];
    };
    setPass(str);
  };

  return (
    <>
      <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
        <div className='bg-white text-black p-4 rounded shadow'>
          <input
            type="text"
            placeholder='Password'
            readOnly
            value={pass}
            className='border px-3 py-2 rounded w-64'
          />
          <div className='m-4'>
            <label className='mr-2'>Length</label>
            <input type="range" min="1" max="20" value={count} onChange={sliderChange} /> {count}
            <div className='m-4'>
              <label className='mr-2'>Number</label>
              <input type="checkbox" checked={includeNumber} onChange={includeNum} />
            </div>
            <div className='m-4'>
              <label className='mr-2'>Special Character</label>
              <input type="checkbox" checked={addSpecial} onChange={includeSpecial}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
