import React from 'react'
import { Link } from 'react-router-dom'

const MIssingCart = () => {
  return (
    <div className='max-w-[1000px] mx-auto bg-white font-bold flex flex-col justify-center items-center'>
    <img className=' w-[400px]' src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'/>
    <p>Missing Cart Items?</p>
    <p>Login to see the items you added previously</p>
    <Link to={"/login"}><button className=' bg-green-500 px-8 text-white py-2 my-6'>Login</button></Link>

    </div>
  )
}

export default MIssingCart