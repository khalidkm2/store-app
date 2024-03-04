import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, description, price,image,title } = product;
  return (
    <Link to={"/product-detail/"+id}>
 <div className=" border-2 border-gray-500 rounded-lg w-56 text-center pt-6 cursor-pointer">
      <div className=" w-11/12 ml-4">
        <img className=" w-11/12 aspect-auto object-contain max-h-48" src={image} />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
    </Link>
   
  );
};

export default Card;
