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
import {MainOmde} from "./MainOmde"
import {MainZanjire} from "./MainZanjire"
import {MainSaham} from "./MainSaham"
import {WathiOmde} from "./WathiOmde"
import {WatifSaham} from "./WatifSaham"
import {WatifZanjire} from "./WatifZanjire"
import { DashboardOmde} from "./DashboardOmde"
import {DashboardSaham} from "./DashboardSaham"
import {DasboardZanjire} from "./DasboardZanjire"

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
    path: "/mainomde",
    layout: DefaulCustomeLayout,
    component: MainOmde
  },
  {
    path: "/mainzanjire",
    layout: DefaulCustomeLayout,
    component: MainZanjire
  },
  {
    path: "/mainsaham",
    layout: DefaulCustomeLayout,
    component: MainSaham
  },
  // {
  //   path: "/kpi",
  //   layout: DefaultLayout,
  //   component: TransactionKpI
  // },
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
  {
    path: "/watifomde",
    layout: DefaulCustomeLayout,
    component: WathiOmde
  },
  {
    path: "/watifsaham",
    layout: DefaulCustomeLayout,
    component: WatifSaham
  },
  {
    path: "/watifzanjire",
    layout: DefaulCustomeLayout,
    component: WatifZanjire
  },
  {
    path: "/dashboardomde",
    layout: DefaultLayout,
    component: DashboardOmde
  },
  {
    path: "/dashboardsaham",
    layout: DefaultLayout,
    component: DashboardSaham
  },
  {
    path: "/dashboardzanjire",
    layout: DefaultLayout,
    component: DasboardZanjire
  },
];
