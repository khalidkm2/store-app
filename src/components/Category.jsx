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
    <div className=' border border-r-gray-500'>
        <h2 className=' cursor-pointer' onClick={handleCategory}>Category</h2>
        {showCategory && (<ul>
         {category && category.map((item,index) => <CategoryItem  setShowIndex={() => setShowIndex(index)}
            setFalse={() => setShowIndex(null)}
            showChecked={showIndex === index && true} key={item} item={item}/>)}
        </ul>)}
    </div>
  )
}

export default Category

