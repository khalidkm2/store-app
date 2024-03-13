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
    <div className='max-w-[900px] mx-auto py-1 border border-gray-400 rounded-lg bg-white'>
    <div className=' flex gap-10 '>
    <div className=' w-[100px] md:w-[300px] p-5'>
        <img className=' w-5/12  aspect-auto object-contain m-3' src={image}/>
        <div className=' flex'>
            <button  className=' rounded-full md:px-3 md:py-1 border border-black' onClick={()=>handleIncrese()}>+</button>
            <p className=' py-2 px-4 border border-black mx-2'>{count}</p>
            <button className=' rounded-full py-1 px-3 border border-black' onClick={()=>handleDecrease(id)}>-</button>
        </div>
    </div>
    <div className=' w-[200px] md:w-[500px] p-6'>
        <h2 className=' font-bold text-lg py-1'>{title}</h2>
        <p className=' font-bold text-gray-500 py-1'>{category}</p>
        <p className=' font-semibold text-gray-500 py-1'>Rs {price}</p>
        <button onClick={handleRemove} className=' px-5 py-2 bg-red-600 my-3 text-white rounded-md'>Remove</button>

    </div>
    </div>
   
    </div>
  )
}

export default CartItem