import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState('olive');

  const changeColor = (newColor) => {
    setColor(newColor);
  }

  return (
    <>
      <h1 className='bg-green-500 text-3xl'>A bg changer app with vite</h1>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ backgroundColor: 'red' }} onClick={() => changeColor('red')}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ backgroundColor: 'green' }} onClick={() => changeColor('green')}>Green</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
