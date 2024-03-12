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

  return (
    <div>Profile
    <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}

export default Profile