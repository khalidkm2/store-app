import React, { useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useCustomLocation } from "../custom/useLocation";
import { addFilteredProducts } from "../app/productSlice";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Header = () => {
  const[text,setText] = useState("");
  const [nav,setNav] = useState(false)
  const cart = useSelector((store) => store.products.cart);
  const products = useSelector((store) => store.products.allProducts);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate()
  const filteredProducts = useSelector(
    (store) => store.products.filteredProducts
  );
  const searchText = useRef();
  const dispatch = useDispatch();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSearch = () => {
    // console.log(searchText.current.value);
    // console.log(products);
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
    // console.log(searchedProducts);

    dispatch(addFilteredProducts(searchedProducts));
    setText("")
    navigate("/")
  };

  const handleChange = (e) => {
    // dispatch(addFilteredProducts(products));
    setText(e.target.value)


  };

  return (
    <div className=" font-bold relative top-0 left-0   border border-slate-500 flex w-screen items-center  justify-around py-8 bg-blue-950 text-white overflow-hidden  ">
      <div>
        <img className=" w-[30px] md:w-[60px] rounded-lg" src={LOGO_URL} />
      </div>
      {/* <p>location</p> */}

      <div className=" w-8/12 md:h-10 h-8 md:w-6/12 flex justify-between">
        <input
          value={text}
          onChange={(e)=>handleChange(e)}
          ref={searchText}
          type="text"
          className=" border border-gray-400 px-2 focus:outline-gray-600 mr-3 active:border-blue-800 text-gray-700 w-full  rounded-sm"
        />
        <button
          className=" bg-white p-1 md:text-base text-xs md:py-3 md:px-2 text-black rounded-lg"
          onClick={handleSearch}
        >
          search
        </button>
      </div>

      {/* for medium and large size screen */}
      <div>
        <ul className=" hidden md:flex gap-5 cursor-pointer">
          <li className=" hover:text-gray-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" hover:text-gray-300">
            <Link to={"/login"}>{!user ? "Login" : "Profile"}</Link>
          </li>
          <li className=" hover:text-gray-300">
            <Link to={"/cart"}>Cart({cart.length})</Link>
          </li>
        </ul>
      </div>


      {/* for small size screen */}
      <div className=" block md:hidden mr-6 cursor-pointer" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav?"fixed h-full left-0 top-0 w-[60%] bg-blue-900  ease-in-out duration-500": 'fixed left-[-100%]'}>
      <ul className=" flex flex-col p-8  md:text-2xl cursor-pointer">
          <li className=" hover:text-gray-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" hover:text-gray-300">
            <Link to={"/login"}>{!user ? "Login" : "Profile"}</Link>
          </li>
          <li className=" hover:text-gray-300">
            <Link to={"/cart"}>Cart({cart.length})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
