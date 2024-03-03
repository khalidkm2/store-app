import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllProducts } from "../app/productSlice";

export const useFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      dispatch(addAllProducts(jsonData));
    };

    fetchData();
  }, []); // Pass the URL as a dependency to the useEffect hook

  // Return the data, loading, and error states
};
