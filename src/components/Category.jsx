import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import CategoryItem from './CategoryItem'

const Category = () => {
  const[showIndex,setShowIndex] = useState(null)
  const[showCategory,setShowCategory] = useState(false)
  const category = useSelector((store) => store.products.category)

  

  const handleCategory = () => {
    setShowCategory(!showCategory)
  }

 

  return (
    <div className=' font-semibold p-3 text-1xl border border-gray-500 rounded-lg bg-white '>
        <h2 className=' cursor-pointer text-2xl text-center' onClick={handleCategory}>Category {showCategory?"⬆️":"⬇️"}</h2>
        {showCategory && (<ul>
         {category && category.map((item,index) => <CategoryItem  setShowIndex={() => setShowIndex(index)}
            setFalse={() => setShowIndex(null)}
            showChecked={showIndex === index && true} key={item} item={item}/>)}
        </ul>)}
    </div>
  )
}

export default Category

