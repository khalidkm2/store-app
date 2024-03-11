import React, { useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useCustomLocation } from "../custom/useLocation";
import { addFilteredProducts } from "../app/productSlice";

const Header = () => {
  const cart = useSelector((store) => store.products.cart);
  const products = useSelector((store) => store.products.allProducts);
  const filteredProducts = useSelector(
    (store) => store.products.filteredProducts
  );
  const searchText = useRef();
  const dispatch = useDispatch();

  useCustomLocation();

  const handleSearch = () => {
    console.log(searchText.current.value);
    console.log(products);
    if (!searchText.current.value) return;
    const searchedProducts = products.filter((product) => {
      return (
        product.title
          .toLowerCase()
          .includes(searchText.current.value.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(searchText.current.value.toLowerCase())
      );
    });
    console.log(searchedProducts);

    dispatch(addFilteredProducts(searchedProducts));
  };

  const handleAll = () => {
    dispatch(addFilteredProducts(products));
  };

  return (
    <div className=" font-bold relative top-0 left-0   border border-slate-500 flex w-screen items-center  justify-around py-8 bg-blue-950 text-white overflow-hidden  ">
      <div>
        <img className=" w-[60px] rounded-lg" src={LOGO_URL} />
      </div>
      <p>location</p>

      <div className=" w-6/12 flex justify-between">
        <input
          onChange={handleAll}
          ref={searchText}
          type="text"
          className=" border border-gray-400 focus:outline-gray-600 mr-3 active:border-blue-800 text-gray-700 w-full p-1 rounded-sm"
        />
        <button className=" bg-white py-3 px-2 text-black rounded-lg" onClick={handleSearch}>search</button>
      </div>
      <div>
        <ul className=" flex gap-5 cursor-pointer">
          <li className=" hover:text-gray-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" hover:text-gray-300">language</li>
          <li className=" hover:text-gray-300"><Link to={"/login"}>Login</Link></li>
          <li className=" hover:text-gray-300">
            <Link to={"/cart"}>cart({cart.length})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
