import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts } from "../app/productSlice";

export const useFetch = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.allProducts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      dispatch(addAllProducts(jsonData));
      } catch (error) {
        console.log(error);
      }
      
    };

   !allProducts && fetchData();
  }, []); // Pass the URL as a dependency to the useEffect hook

  // Return the data, loading, and error states
};
