import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const user = useSelector((store) => store.user);
  const cart = useSelector((store) => store.products.cart);
  const filteredCart = useSelector((store) => store.products.filteredCart);
  const navigate = useNavigate();

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

  // const paymentDetails = {
  //   intent: "sale",
  //   payer: {
  //     payment_method: "paypal",
  //   },
  //   transactions: [
  //     {
  //       amount: {
  //         total: totalPrice,
  //         currency: "USD",
  //       },
  //       description: "The payment transaction description.",
  //       item_list: {
  //         items: [filteredCart],
  //       },
  //     },
  //   ],
  //   note_to_payer: "Contact us for any questions on your order.",
  //   redirect_urls: {
  //     return_url: "https://example.com/return",
  //     cancel_url: "https://example.com/cancel",
  //   },
  // };

  const handlePay = async() => {
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
          amount: 1000,
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
   
    
  }
  

  return (
    <div className=" w-screen h-screen mx-auto my-auto text-center">
      <h1 className=" mt-40 text-3xl text-green-600 font-bold my-auto ">
        Welcome to Payment Page...
      </h1>
      <button onClick={handlePay}>pay</button>
    </div>
  );
};

export default Payment;
