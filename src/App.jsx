import { useState } from 'react'
import './App.css'

function App() {
  const [val, setVal] = useState("")

  const handleClick = (e) => {
   
    setVal(val + e.target.value);
    console.log(val[val.length-1])
  
  }


  return (
    <div className='flex justify-center items-center h-[100vh] bg-gray-500 flex-col gap-4'>
     <h1 className='text-[24px]'>Simple Calculator</h1>
      <div className='bg-white p-6 rounded-lg'>
        <div>
        <input type="text" className='text-[22px] rounded-lg p-3 bg-black text-white h-[70px] text-right' value={val} /></div>
        <div className='flex justify-between items-center mt-4'>
        <input onClick={() => setVal("")} type="button" value="AC" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={() => setVal(val.slice(0, -1))} type="button" value="DC" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={handleClick} type="button" value="." className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={handleClick} type="button" value="/" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        </div>
        <div className='flex justify-between items-center mt-1'>
        <input onClick={handleClick} type="button" value="7" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600' />
        <input onClick={handleClick} type="button" value="8" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={handleClick} type="button" value="9" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={handleClick} type="button" value="*" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        </div>
        <div className='flex justify-between items-center mt-1'>
        <input onClick={handleClick} type="button" value="4" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={handleClick} type="button" value="5" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={handleClick} type="button" value="6" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={handleClick} type="button" value="+" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        </div>
        <div className='flex justify-between items-center mt-1'>
        <input onClick={handleClick} type="button" value="1" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={handleClick} type="button" value="2" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={handleClick} type="button" value="3" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={handleClick} type="button" value="-" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        </div>
        <div className='flex justify-start items-start gap-1 mt-1'>
        <input onClick={handleClick} type="button" value="00" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={handleClick} type="button" value="0" className='rounded-lg bg-blue-400 text-white w-[65px] h-[65px] hover:bg-blue-600'/>
        <input onClick={() => setVal(eval(val))} type="button" value="=" className='rounded-lg bg-blue-400 text-white w-[135px] h-[65px] hover:bg-blue-600'/>
        </div>
     </div>
    </div>
  )
}

export default App
