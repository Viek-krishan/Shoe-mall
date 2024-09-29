import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import "boxicons";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Provider } from "react-redux";
import store from "./utils/store";
import Product from "./components/Product";
import AllProducts from "./components/AllProducts";
import SearchPage from "./components/SearchPage";
import Register from "./components/register&logIn";
import About from "./components/About";
import Cart from "./components/Cart";


// main container going to be rendered.
const AppLayOut = function () {
  // const [user, setUser] = useState();

 

  return (
    <Provider store={store}>
      <ScrollRestoration />
      <div
        className="container w-full bg-[#f4f4f5] box-border"
        key={"main-container"}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

// Creating router configration...
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/product/:index",
        element: <Product />,
      },
      {
        path: "/all",
        element: <AllProducts />,
      },
      {
        path: "/search/:input",
        element: <SearchPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
