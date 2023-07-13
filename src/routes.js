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
import { Resiliency } from "./Resiliency";
import { NaghdinegiSal } from "./NaghdinegiSal";
import { Dion } from "./Dion";
import { SoodavariSal } from "./SoodavariSal";
import Default1Layout from "./layouts/Default1";



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
  {
    path: "/test",
    layout: DefaultLayout,
    component: Resiliency
  },
  {
    path: "/naghdineghi",
    layout: DefaultLayout,
    component: NaghdinegiSal
  },
  {
    path: "/dion",
    layout: DefaultLayout,
    component: Dion
  },
  {
    path: "/soodavari",
    layout: DefaultLayout,
    component: SoodavariSal
  },
];
