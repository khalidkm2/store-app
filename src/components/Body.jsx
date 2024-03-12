import React, { useState, useEffect } from "react";
import { useFetch } from "../custom/useFetch";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useCategory } from "../custom/useCategory";
import Category from "./Category";
import { addFilteredProducts } from "../app/productSlice";

const Body = () => {
  const dispatch = useDispatch();
  useFetch();
  useCategory();

  const data = useSelector((store) => store.products.filteredProducts);
  const allProducts = useSelector((store) => store.products.allProducts);



  if (!data) return <h1>Loading</h1>;

  // console.log(data);
  
 
 

 const handleShowAll = () => {
  dispatch(addFilteredProducts(allProducts))
 }

  return (
    <div className="  grid grid-cols-12 gap-5 pb-6  -z-10 bg-[#f0f0f0] ">
      <div className=" col-span-2  border-r-2 border-gray-300 px-5 py-3">
      <button className=" text-2xl w-full my-4 font-semibold p-3 text-1xl border border-gray-500 rounded-lg bg-white" onClick={handleShowAll}>Show All</button>
        <Category />
       
      </div>
      {data.length == 0?<h1>No</h1>:<div className=" col-span-10">
        <h1>Products</h1>
        <div className=" flex justify-around flex-wrap gap-4">
          {data.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>}

      
    </div>
  );
};

export default Body;
