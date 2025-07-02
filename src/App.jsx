import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const alphabatics = 'ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuvwxyz'
  const num = '1234567890'
  const specials = '!@#$%^&*()'
  const [count, setCount] = useState(5)
  const [includeNumber, setIncludeNumber] = useState(false)
  const [addSpecial, setaddSpecial] = useState(false)
  const [pass, setPass] = useState('ABCDE');


  const sliderChange = (e) => {
    const length = e.target.value;
    setCount(length)
  };

  const includeNum = (e) => {
    let isChecked = e.target.checked;
    setIncludeNumber(isChecked);
  };

  const includeSpecial = (e) => {
    let isChecked = e.target.checked;
    setaddSpecial(isChecked);
  };

  useEffect(() => {
    let charPool = alphabatics;

    if (includeNumber && addSpecial) {
      charPool += num;
      charPool += specials;
    } else if (includeNumber) {
      charPool += num;
    } else if (addSpecial) {
      charPool += specials;
    };

    let str = '';
    for (let i = 0; i < count; i++) {
      let index = Math.floor(Math.random() * charPool.length);
      str += charPool[index];
    };
    setPass(str);
  }, [count, includeNumber, addSpecial]);

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
          <button className="text-white" onClick={() => navigator.clipboard.writeText(pass)}>
            Copy Password
          </button>
          <div className='m-4'>
            <label className='mr-2'>Length</label>
            <input type="range" min="1" max="20" value={count} onChange={sliderChange} /> {count}
            <div className='m-4'>
              <label className='mr-2'>Number</label>
              <input type="checkbox" checked={includeNumber} onChange={includeNum} />
            </div>
            <div className='m-4'>
              <label className='mr-2'>Special Character</label>
              <input type="checkbox" checked={addSpecial} onChange={includeSpecial} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
