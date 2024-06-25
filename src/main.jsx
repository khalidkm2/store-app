import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./app/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import Body from "./components/Body.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Payment from "./components/Payment.jsx";
import { PersistGate } from "redux-persist/integration/react";

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
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/payment",
        element:<Payment/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor} >
  <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </PersistGate>
   
  </Provider>
);
