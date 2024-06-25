import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { emptyCart } from "../app/productSlice";

const Payment = () => {
  const user = useSelector((store) => store.user);
  const cart = useSelector((store) => store.products.cart);
  const filteredCart = useSelector((store) => store.products.filteredCart);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((accum, current) => accum + current?.price, 0);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    // else if(cart.length == 0) {
    //   navigate("/home")
    // }
  }, [user]);

  console.log(cart);


  const handlePay = async() => {
    setLoading(true);
    try {
      
   const response = await fetch('https://connect.squareup.com/v2/payments', {
    method: 'POST',
    headers: {
      'Square-Version': '2024-06-04',
      'Authorization': 'Bearer ACCESS_TOKEN',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      idempotency_key: import.meta.env.VITE_SQUARE_IMPOTENCE_KEY,
      amount_money: {
        amount: totalPrice,
        currency: 'USD'
      },
      source_id: 'ccof:GaJGNaZa8x4OgDJn4GB',
      autocomplete: true,
      customer_id: 'W92WH6P11H4Z77CTET0RNTGFW8',
      location_id: 'L88917AVBK2S5',
      reference_id: '123456',
      note: 'Brief description',
      app_fee_money: {
        amount: 10,
        currency: 'USD'
      }
    })
  })
  const data = await response.json();
  console.log(data);
  // const data = {
  //   status: "COMPLETED",
  // }
  if (data.status == "COMPLETED") {
    toast.success('🛒Payment Successful!');
    dispatch(emptyCart())

    navigate("/");
  }
    } catch (error) {
      console.log("failed to make payment",error);
      toast.error('🛒Payment Failed!');
    } finally {
      setLoading(false);
    }
   
    
  }
  

  return (
    <div className=" w-screen h-screen mx-auto my-auto text-center">
      <h1 className=" mt-20 text-3xl text-green-600 font-bold my-auto ">
        Welcome to Payment Page
      </h1>
     <div className=" mt-10 w-3/2 md:w-1/3 mx-auto border-2 border-gray-500 bg-gray-300 p-10 rounded-lg ">
      <h2 className=" text-black font-bold text-2xl p-3">Confirm Your Payment</h2>
      <pre className=" text-black font-bold p-3" >Total Price:            {totalPrice}</pre>
      <button className=" w-1/2 py-2 m-3 bg-green-600 text-black rounded-lg hover:text-white" onClick={handlePay}>Pay</button>
     </div>
    </div>
  );
};

export default Payment;
