import React from 'react'
import { useDispatch } from 'react-redux';
import { addCart, removeItemCart } from '../app/productSlice';

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

  return (
    <div className='max-w-[900px] mx-auto py-10 border border-gray-400 bg-white'>
    <div className=' flex gap-10 '>
    <div className='w-[300px] p-5'>
        <img className=' w-5/12  aspect-auto object-contain m-3' src={image}/>
        <div className=' flex'>
            <button  className=' rounded-full px-3 py-1 border border-black' onClick={()=>handleIncrese()}>+</button>
            <p className=' py-2 px-4 border border-black mx-2'>{count}</p>
            <button className=' rounded-full py-1 px-3 border border-black' onClick={()=>handleDecrease(id)}>-</button>
        </div>
    </div>
    <div className=' w-[500px]'>
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{price}</p>
        <button>Remove</button>

    </div>
    </div>
   
    </div>
  )
}

export default CartItem