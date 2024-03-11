import React from 'react'

const TotalAmount = ({cartResult,cart}) => {
     
    // console.log(cartResult);
    // console.log(cart);

    const totalPrice = cart.reduce((accum,current) => accum+current?.price,0)
    // console.log(totalPrice);
    // console.log(cart);


  return (
    <div className=' bg-white border border-gray-400 p-4'>
        <h1 className=' border-b border-gray-600 text-xl font-bold'>Price Details</h1>
        <div>
        <h2 className=' mt-2'>Price({cartResult.length} items)</h2>
        <p>{Math.floor(totalPrice)}</p>
        </div>
      

    </div>
  )
}

export default TotalAmount