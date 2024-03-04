import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import Body from "./components/Body.jsx";
import ProductDetail from "./components/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/product-detail/:id",
        element: <ProductDetail/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
