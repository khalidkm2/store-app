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
    <div className=' flex md:flex-col  font-semibold p-1 md:px-4 md:py-1  border border-gray-500 rounded-lg bg-white '>
        <h2 className=' hidden md:block cursor-pointer  text-[12px] md:text-base text-center' onClick={handleCategory}>Category {showCategory?"⬆️":"⬇️"}</h2>
        {/* for smaller screen */}
        <div className=' flex md:hidden'>
        <ul className=' flex md:flex-col shrink-0'>
         {category && category.map((item,index) => <CategoryItem  setShowIndex={() => setShowIndex(index)}
            setFalse={() => setShowIndex(null)}
            showChecked={showIndex === index && true} key={item} item={item}/>)}
        </ul>
        </div>


        {showCategory && (<ul className=' hidden md:flex md:flex-col shrink-0'>
         {category && category.map((item,index) => <CategoryItem  setShowIndex={() => setShowIndex(index)}
            setFalse={() => setShowIndex(null)}
            showChecked={showIndex === index && true} key={item} item={item}/>)}
        </ul>)}
    </div>
  )
}

export default Category

