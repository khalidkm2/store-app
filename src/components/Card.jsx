import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  // console.log(product);
  const { id, description, price,image,title } = product;
  return (
    <Link to={"/product-detail/"+id}>
 <div className=" border border-gray-300 bg-white  md:p-4 rounded-lg w-[100px] md:w-56 text-center pt-2 md:pt-6 cursor-pointer p-1 min-h-[180px] md:h-[300px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-95 hover:shadow-black duration-150 transition-all ease-in ">
      <div className=" text-center w-24 ">
        <img className=" w-20 md:w-36 md:ml-12 ml-2" src={image} />
      </div>
      <div>
        <h2 className=" my-2 text-gray-600 font-semibold text-[10px] md:text-sm">{title}</h2>
      </div>
    </div>
    </Link>
   
  );
};

export default Card;
