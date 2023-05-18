import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { Home } from "./home";
import DefaulCustomeLayout from "./layouts/DefaultCustome";
import { BarChart } from "./BarChart";
import { Main } from "./Main";
import { TransactionKpI } from "./TransactionKpI";
import DefaultLayout from "./layouts/Default";


export default [
  {
    path: "/home",
    layout: DefaulCustomeLayout,
    component: Home
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
  {
    path: "/kpi",
   layout: DefaultLayout,
    component: TransactionKpI
  },
 
];
