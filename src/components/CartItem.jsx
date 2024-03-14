import React from 'react'
import { useDispatch } from 'react-redux';
import { addCart, removeItemCart, removeOneCart } from '../app/productSlice';

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const{category,description,image,title,price,id} = item?.data;
    const{count} = item;

    const handleDecrease = (id) => {
        console.log("inside decrease");
        dispatch(removeItemCart(id))
    }

    const handleIncrese = () => {
       dispatch(addCart(item?.data))
    }

    const handleRemove = () => {
        console.log("inside handle remove");
        dispatch(removeOneCart(id))
    }

  return (
    <div className=' w-[370px] md:min-w-[700px] mx-auto py-1 border border-gray-400 rounded-lg bg-white'>
    <div className=' flex gap-1 md:gap-10 '>
    <div className=' px-6 py-1'>
        <img className=' w-[200px] md:w-[150px]  aspect-auto object-contain m-3' src={image}/>
        <div className=' ml-6 flex'>
            <button  className=' hover:bg-black hover:text-white transition-all ease-in duration-150 px-1 rounded-lg md:px-3 md:py-1 border border-black' onClick={()=>handleIncrese()}>+</button>
            <p className=' px-2 py-1 md:py-2 md:px-4 border border-black mx-2'>{count}</p>
            <button  className=' hover:bg-black hover:text-white transition-all ease-in duration-150 px-1 rounded-lg md:px-3 md:py-1 border border-black' onClick={()=>handleDecrease(id)}>-</button>
        </div>
    </div>
    <div className=' p-6'>
        <h2 className=' leading-tight md:leading-normal font-bold text-lg py-1'>{title}</h2>
        <p className=' font-bold text-gray-500 pt-1 md:py-1'>{category}</p>
        <p className=' font-semibold text-gray-500 pt-1 md:py-1'>Rs {price}</p>
        <button onClick={handleRemove} className=' px-5 py-2 bg-red-600 my-3 text-white rounded-md'>Remove</button>

    </div>
    </div>
   
    </div>
  )
}

export default CartItem