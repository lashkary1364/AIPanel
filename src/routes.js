import { Home } from "./home";
import DefaulCustomeLayout from "./layouts/DefaultCustome";
import { BarChart } from "./BarChart";
import { Main } from "./Main";
import { TransactionKpI } from "./TransactionKpI";
import DefaultLayout from "./layouts/Default";
import { CustomerDashboard } from "./CustomerDashboard";
import { ProductDashboard } from "./ProductDashboard";
import { CustomerPredicted } from "./CustomerPredicted";
import { CustomerInfo } from "./CustomerInfo";



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
  {
    path: "/customer",
    layout: DefaultLayout,
    component: CustomerDashboard
  },
  {
    path: "/product",
    layout: DefaultLayout,
    component: ProductDashboard
  },
  {
    path: "/customer-predicted",
    layout: DefaultLayout,
    component: CustomerPredicted
  },
  {
    path: "/customer-info",
    layout: DefaultLayout,
    component: CustomerInfo
  },
  
];
