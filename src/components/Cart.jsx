import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { addFilteredCart } from '../app/productSlice'
import TotalAmount from './TotalAmount'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((store) => store.products.cart)
  if(!cart) return
  // console.log(cart);

  const result = cart.reduce((acc, card) => {
    const existingCard = acc.find(item => item.id === card?.id);
    if (existingCard) {
      existingCard.count++;
    } else {
      acc.push({ id: card?.id, count: 1, data: card });
    }
    return acc;
  }, []);
    dispatch((addFilteredCart(result)))

  console.log(result);



  return (
    <div className=' grid grid-cols-4 p-5 space-x-4 bg-[#f0f0f0] h-screen'>
    <div className=' col-span-3'>
    {cart && result.map((item) => <CartItem key={item.id} item={item} />)}

    </div>

    <div className=' col-span-1'>
      <TotalAmount cartResult={result} cart={cart} />
    </div>
    
    </div>
  )
}

export default Cart