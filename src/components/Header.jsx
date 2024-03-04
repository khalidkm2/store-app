import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

  const cart = useSelector((store) => store.products.cart)


  return (
    <div className=' relative top-0 left-0   border border-slate-500 flex w-screen items-center  justify-around py-12 bg-blue-950 text-white overflow-hidden '>
    
        <p>logo</p>
        <p>location</p>
    
    <div className=' w-6/12 flex justify-between'>
        <input type='text' className=' border border-black w-full' />
        <button>search</button>
    </div>
    <div>
        <ul className=' flex gap-4 cursor-pointer'>
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