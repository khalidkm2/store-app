import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, description, price,image,title } = product;
  return (
    <Link to={"/product-detail/"+id}>
 <div className=" border border-gray-300 bg-white p-4 rounded-lg w-56 text-center pt-6 cursor-pointer">
      <div className=" w-11/12 ml-4">
        <img className=" w-11/12 aspect-[1/4] mb-2 object-contain max-h-48" src={image} />
      </div>
      <div>
        <h2 className=" text-gray-600 font-semibold text-lg">{title}</h2>
      </div>
    </div>
    </Link>
   
  );
};

export default Card;
