import React, { useState, useEffect } from "react";
import { useFetch } from "../custom/useFetch";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useCategory } from "../custom/useCategory";
import Category from "./Category";
import { addFilteredProducts } from "../app/productSlice";
import Loading from "./Loading";



const Body = () => {
  const dispatch = useDispatch();
  useFetch();
  useCategory();

  const data = useSelector((store) => store.products.filteredProducts);
  const allProducts = useSelector((store) => store.products.allProducts);

  if (!data) return <Loading/>

  // console.log(data);

  const handleShowAll = () => {
    dispatch(addFilteredProducts(allProducts));
  };

  const handleTopRated = () => {
    const filterData = allProducts.filter(
      (product) => product.rating.rate >= 4
    );
    dispatch(addFilteredProducts(filterData));
  };

  return (
    <div className="  w-full  grid grid-cols-12 gap-5 pb-6  -z-10 bg-[#f0f0f0] ">
      <div className=" col-span-3 md:col-span-2 text-[8px] md:text-base    border-r-2 border-gray-300 px-4 py-3">
        <button
          className=" w-full my-4 font-semibold p-1 md:p-3  border border-gray-500 rounded-lg bg-white"
          onClick={handleShowAll}
        >
          Show All
        </button>
        <Category />
        <button
          onClick={handleTopRated}
          className=" w-full my-4 font-semibold p-1 md:p-3 text-1xl border border-gray-500 rounded-lg bg-white"
        >
          Top Rated
        </button>
      </div>
      {data.length == 0 ? (
        <h1>No</h1>
      ) : (
        <div className=" col-span-9 md:col-span-10">
          <h1>Products</h1>
          <div className=" flex justify-around flex-wrap gap-4">
            {data.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
