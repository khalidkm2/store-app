import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!user) {
      navigate("/login")
    }
  },[user])
 
  return (
    <div className=' w-screen h-screen mx-auto my-auto text-center'>
        <h1 className=' mt-40 text-3xl text-green-600 font-bold my-auto '>Welcome to Payment Page...</h1>
    </div>
  )
}

export default Payment