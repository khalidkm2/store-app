import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LOGO_URL } from '../utils/constants'

const Header = () => {

  const cart = useSelector((store) => store.products.cart)


  return (
    <div className=' font-bold relative top-0 left-0   border border-slate-500 flex w-screen items-center  justify-around py-8 bg-blue-950 text-white overflow-hidden  '>
    
        <div>
          <img className=' w-[60px] rounded-lg' src={LOGO_URL}/>
        </div>
        <p>location</p>
    
    <div className=' w-6/12 flex justify-between'>
        <input type='text' className=' border border-gray-400 focus:outline-gray-600 mr-3 active:border-blue-800 text-gray-700 w-full p-1 rounded-sm' />
        <button>search</button>
    </div>
    <div>
        <ul className=' flex gap-5 cursor-pointer'>
            <li><Link to={"/"}>Home</Link></li>
            <li>language</li>
            <li>sign and accounts</li>
            <li>order</li>
            <li><Link to={"/cart"}>cart({cart.length})</Link></li>


        </ul>
    </div>

    </div>
  )
}

export default Header