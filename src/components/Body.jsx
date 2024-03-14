import React, { useState, useEffect } from "react";
import { useFetch } from "../custom/useFetch";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useCategory } from "../custom/useCategory";
import Category from "./Category";
import { addFilteredProducts } from "../app/productSlice";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import NoSearch from "./NoSearch";



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
    <div className=" flex flex-col  w-full  md:grid md:grid-cols-10 md:gap-1 pb-6  -z-10 bg-[#f0f0f0] ">
      <div className=" md:my-14 flex flex-wrap  md:flex-col items-center justify-start gap-2 shrink-0  md:col-span-1 text-[12px] md:text-base border-r-2 border-gray-300 p-3">
        <button
          className=" font-bold my-4 shrink-0  p-1 md:px-6 md:py-2  border border-gray-500 rounded-lg bg-white"
          onClick={handleShowAll}
        >
          Show All
        </button>
       
        <button
          onClick={handleTopRated}
          className=" font-bold my-4 shrink-0  p-1 md:px-6 md:py-2  border border-gray-500 rounded-lg bg-white"
        >
          Top Rated
        </button>
        <Category />
      </div>
      {data.length == 0 ? (
      <NoSearch handleShowAll={handleShowAll} />
      ) : (
        <div className="  md:col-span-9">
          <h1 className=" font-bold text-center my-2 md:my-6 text-blue-500 text-4xl">Products</h1>
          <div className=" flex justify-evenly  md:justify-around flex-wrap gap-1 md:gap-4">
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
