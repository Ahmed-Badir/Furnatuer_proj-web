
import * as React from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import Allshop from "./shop/Allshop";
import Allabout from "./About/Allabout";
import Allservices from "./Services/Allservices";
import Allcontact from "./Contact/Allcontact";
import Allblog from "./Blogs/Allblog";
import Allcheckout from "./Checkout/Allcheckout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "shop",
    element:<Allshop/>,
  },

  {
    path: "about",
    element:<Allabout/>,
  },
  {
    path: "services",
    element:<Allservices/>,
  },
  {
    path: "contact",
    element:<Allcontact/>,
  },
  {
    path: "blog",
    element:<Allblog/>,
  },
  {
    path: "checkout",
    element:<Allcheckout/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);















// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import Allshop from './shop/Allshop';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App/>,
//   <Allshop/>
// );

