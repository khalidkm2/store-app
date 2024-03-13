import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../app/userSlice'

const Profile = () => {
    const user = useSelector((store) => store.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!user){
            navigate("/login")
        }
    },[user])


    const handleSignOut = () =>{
            dispatch((removeUser()))
    }

    console.log(user);

    if (!user) return


  return (
    <div className=' flex justify-center items-center '>
    <div className=' my-10 text-pink-500 bg-transparent border border-solid border-pink-500  hover:text-red-600 active:bg-pink-600 font-bold  text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzrKwzB9qf6z1LUGt9CMjPzC5zBy87WL6Fw&usqp=CAU' />
    <h2 className=' py-1'>Username: {user.displayName}</h2>
    <p className=' py-1'>Email: {user.email}</p>
    <button className=' px-4 py-2 bg-green-600 text-white my-2' onClick={handleSignOut}>Sign out</button>

    </div>
    </div>
  )
}

export default Profile