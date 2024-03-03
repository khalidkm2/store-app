import React from "react";

const Card = ({ product }) => {
  const { id, description, price,image,title } = product;
  return (
    <div className=" bg-slate-200 w-56 text-center pt-6">
      <div className=" w-11/12 ml-4">
        <img className=" w-11/12 max-h-48" src={image} />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
