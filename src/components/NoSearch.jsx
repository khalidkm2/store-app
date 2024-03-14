import React from 'react'
import { Link } from 'react-router-dom'

const NoSearch = ({handleShowAll}) => {
  return (
    <div className=" absolute left-[500px] flex items-center  flex-col gap-2">
        <img className=" w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1XIyEVOOr_q7_6HxHWwqCDQHaL-9f6O4sQ&usqp=CAU" />
      <button onClick={handleShowAll} className=" px-4 py-2 bg-purple-600 text-white">Show Other Items</button>
       </div>
  )
}

export default NoSearch