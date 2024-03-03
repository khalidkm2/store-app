

import React, { useState, useEffect } from 'react';
import { useFetch } from '../custom/useFetch';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { useCategory } from '../custom/useCategory';
import Category from './Category';
import { addFilteredProducts } from '../app/productSlice';

const Body = () =>  {
 const dispatch = useDispatch()
 useFetch();
 useCategory();

   const  data = useSelector((store) => store.products.filteredProducts)
   const  allProducts = useSelector((store) => store.products.allProducts)

   


   if(!data) return <h1>Loading</h1>


const handleShowAll = () => {
  console.log("Inside btn");
   dispatch(addFilteredProducts(allProducts))
}

    
    
      return (
        <div className=' grid grid-cols-12'>
        <div className=' col-span-2  border-2 border-gray-500 px-5 py-3'>
          <Category/>
        </div>

        <div className=' col-span-10'>
        <h1>Products</h1>
        <button onClick={handleShowAll}>Show all</button>
          <div className=' flex justify-around flex-wrap gap-4'>
          {data.map((product) => <Card key={product.id} product={product} />)}
          </div>
        </div>
         
        
        </div>
      );



}


export default Body