import React from 'react'
import { Link } from 'react-router-dom'

const NoSearch = ({handleShowAll}) => {
  return (
    <div className=" w-screen h-screen flex md:items-center items-start justify-center">
    <div className=' flex flex-col '>
    <img className=" w-48 md:w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1XIyEVOOr_q7_6HxHWwqCDQHaL-9f6O4sQ&usqp=CAU" />
      <button onClick={handleShowAll} className=" my-2 px-4 py-2 bg-purple-600 text-white">Show Other Items</button>
    </div>
      
       </div>
  )
}

export default NoSearch