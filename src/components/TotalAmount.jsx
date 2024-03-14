import React, { useState } from 'react';
import LoginPopUp from './LoginPopUp';
import { useNavigate } from 'react-router-dom';

const TotalAmount = ({ cartResult, cart, user }) => {
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [childPopUp,setChildPopUp] = useState(false);
  const navigate = useNavigate()

  const totalPrice = cart.reduce((accum, current) => accum + current?.price, 0);

  const handlePayment = () => {
    if (!user) {
      setLoginPopUp(true);
    }

    else{
      navigate("/payment")
    }

  };

  const closePopUp = () => {
    setLoginPopUp(false)
  }




  return (
    <div className='bg-white border border-gray-400 p-4 rounded-l font-bold my-2'>
      <h1 className='border-b border-gray-600 text-xl font-bold'>Price Details</h1>
      <div>
        <h2 className='mt-2 py-1'>Price({cartResult.length} items)</h2>
        <p className='py-2'>Rs {Math.floor(totalPrice)}</p>
      </div>
      {totalPrice > 0 && <button onClick={handlePayment} className='bg-blue-500 px-6 py-2 text-white rounded-md'>Proceed to Payment</button>}
      {loginPopUp && <LoginPopUp closePopUp={closePopUp}  />}

    </div>
  );
};

export default TotalAmount;
