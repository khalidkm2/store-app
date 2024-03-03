import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../app/productSlice";

export const useCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      dispatch(addCategory(jsonData));
    };

    fetchData();
  }, []); // Pass the URL as a dependency to the useEffect hook

  // Return the data, loading, and error states
};
