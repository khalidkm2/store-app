import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAllProducts, addFilteredProducts } from '../app/productSlice'

const Category = () => {
  const[showCategory,setShowCategory] = useState(false)
  const dispatch = useDispatch()
  const category = useSelector((store) => store.products.category)
  const  data = useSelector((store) => store.products.allProducts)
  const all = [...data]
  

  const handleCategory = () => {
    setShowCategory(!showCategory)
  }

  const filterCategory = (item) => {
      const filterData = all.filter((product) => product.category == item)
      dispatch((addFilteredProducts(filterData)))
  }

  return (
    <div className=' border border-r-gray-500'>
        <h2 className=' cursor-pointer' onClick={handleCategory}>Category</h2>
        {showCategory && (<ul>
         {category && category.map((item) => <li onClick={() => filterCategory(item)} key={item}>{item}</li>)}
        </ul>)}
    </div>
  )
}

export default Category