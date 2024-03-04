import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSingleProduct } from "../app/productSlice";

export const useSingleProduct = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products/'+id);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
    //   console.log(jsonData);
      dispatch(addSingleProduct(jsonData));
    };

    fetchData();
  }, []); // Pass the URL as a dependency to the useEffect hook

  // Return the data, loading, and error states
};
