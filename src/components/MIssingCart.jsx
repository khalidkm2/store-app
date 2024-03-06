import React from 'react'

const MIssingCart = () => {
  return (
    <div className='max-w-[1000px] mx-auto bg-white font-bold flex flex-col justify-center items-center'>
    <img className=' w-[400px]' src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'/>
    <p>Missing Cart Items?</p>
    <p>Login to see the items you added previously</p>
    <button>Login</button>

    </div>
  )
}

export default MIssingCart