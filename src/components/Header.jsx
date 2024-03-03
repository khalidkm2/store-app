import React from 'react'

const Header = () => {
  return (
    <div className=' border border-slate-500 flex w-screen items-center justify-around py-8 bg-blue-950 text-white overflow-hidden '>
    
        <p>logo</p>
        <p>location</p>
    
    <div className=' w-6/12 flex justify-between'>
        <input type='text' className=' border border-black w-full' />
        <button>search</button>
    </div>
    <div>
        <ul className=' flex gap-4'>
            <li>language</li>
            <li>sign and accounts</li>
            <li>order</li>
            <li>cart</li>


        </ul>
    </div>

    </div>
  )
}

export default Header