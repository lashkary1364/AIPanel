import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

import { Home2 } from "./home2";
import DefaulCustomeLayout from "./layouts/DefaultCustome";
import { BarChart } from "./BarChart";
import { Register } from "./Register";
import { Main } from "./Main";
import  Layout from "./layouts/Layout";


export default [
  {
    path: "/home2",
    layout: DefaulCustomeLayout,
    component: Home2
  },
  {
    path: "/barchart",
    layout: DefaulCustomeLayout,
    component: BarChart
  },
  {
    path: "/main",
   layout: DefaulCustomeLayout,
    component: Main
  },
 
];
