import { useState } from 'react'

function App() {
  
  const [color, setColor] = useState("black");

  return (
    <div className='w-full h-screen duration-200 relative' style={{backgroundColor:color}}>
      <div  className='px-3 py-2 bg-slate-100 rounded-full absolute top-[80%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex gap-2'>
          <button onClick={() => setColor("red")} className='bg-red-600 px-5 py-1 rounded-full text-slate-100 text-xs font-medium'>red</button>
          <button onClick={() => setColor("orange")} className='bg-orange-600 px-5 py-1 rounded-full text-slate-100 text-xs font-medium'>orange</button>
          <button onClick={() => setColor("yellow")} className='bg-yellow-600 px-5 py-1 rounded-full text-slate-100 text-xs font-medium'>yellow</button>
          <button onClick={() => setColor("green")} className='bg-green-600 px-5 py-1 rounded-full text-slate-100 text-xs font-medium'>green</button>
          <button onClick={() => setColor("violet")} className='bg-violet-600 px-5 py-1 rounded-full text-slate-100 text-xs font-medium'>violet</button>
          <button onClick={() => setColor("indigo")} className='bg-indigo-600 px-5 py-1 rounded-full text-slate-100 text-xs font-medium'>indigo</button>
          <button onClick={() => setColor("blue")} className='bg-blue-600 px-5 py-1 rounded-full text-slate-100 text-xs font-medium'>blue</button>
      </div>
    </div>
  )
}

export default App
