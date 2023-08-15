import { Home } from "./home";
import { BarChart } from "./Omde/BarChart";
import { TransactionKpI } from "./Omde/TransactionKpI";
import { CustomerDashboard } from "./Omde/CustomerDashboard";
import { ProductDashboard } from "./Omde/ProductDashboard";
import { CustomerPredicted } from "./Omde/CustomerPredicted";
import { CustomerInfo } from "./Omde/CustomerInfo";
import { Resiliency } from "./Saham/Resiliency";
import { NaghdinegiSal } from "./Saham/NaghdinegiSal";
import { Dion } from "./Saham/Dion";
import { MainOmde } from "./MainOmde"
import { MainZanjire } from "./MainZanjire"
import { MainSaham } from "./MainSaham"
import { WathiOmde } from "./Omde/WathiOmde"
import { MainOmde1 } from "./MainOmde1"
import { WatifSaham } from "./Saham/WatifSaham"
import { WatifZanjire } from "./Zanjire/WatifZanjire"
import { DashboardOmde } from "./Omde/DashboardOmde"
import { DashboardSaham } from "./Saham/DashboardSaham"
import { DasboardZanjire } from "./Zanjire/DasboardZanjire"
import { TahlilGeymat } from "./Saham/TahlilGeymat";
import { Productivity } from "./Saham/Productivity";
import { Profitability } from "./Saham/Profitability"
import DefaultLayout from "./layouts/Default";
import DefaulCustomeLayout from "./layouts/DefaultCustome";
import SahamLayout from "./layouts/SahamLayout";
import SahamWhatifLayout from "./layouts/SahamWhatifLayout";
import OmdeLayout from "./layouts/OmdeLayout";
import { Register } from "./Register";
import { home1 } from "./home1";
import { WordCloudPos } from "./Saham/WordCloudPos";
import OmdeWhatifLayout from "./layouts/OmdeWhatifLayout";
import ZanjireWhatifLayout from "./layouts/ZanjireWhatifLayout";
import { RSI } from "./Saham/RSI";

export default [
  {
    path: "/home",
    layout: DefaulCustomeLayout,
    component: home1
  },
  {
    path: "/barchart",
    layout: OmdeLayout,
    component: BarChart
  },
  {
    path: "/mainomde",
    layout: DefaulCustomeLayout,
    component: MainOmde1
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
  {
    path: "/kpi",
    layout: OmdeLayout,
    component: TransactionKpI
  },
  {
    path: "/customer",
    layout: OmdeLayout,
    component: CustomerDashboard
  },
  {
    path: "/product",
    layout: OmdeLayout,
    component: ProductDashboard
  },
  {
    path: "/customer-predicted",
    layout: OmdeLayout,
    component: CustomerPredicted
  },
  {
    path: "/customer-info",
    layout: OmdeLayout,
    component: CustomerInfo
  },
  {
    path: "/resiliency",
    layout: SahamLayout,
    component: Resiliency
  },
  {
    path: "/naghdineghi",
    layout: SahamLayout,
    component: NaghdinegiSal
  },
  {
    path: "/dion",
    layout: SahamLayout,
    component: Dion
  },
  {
    path: "/whatif-saham",
    layout: SahamWhatifLayout,
    component: WatifSaham
  },
  {
    path: "/profitability",
    layout: SahamLayout,
    component: Profitability
  },
  {
    path: "/whatif-omde",
    layout: OmdeWhatifLayout,
    component: WathiOmde
  },
  // {
  //   path: "/watifsaham",
  //   layout: DefaulCustomeLayout,
  //   component: WatifSaham
  // },
  {
    path: "/whatif-chain" ,
    layout: ZanjireWhatifLayout,
    component: WatifZanjire
  },
  {
    path: "/dashboardomde",
    layout: OmdeLayout,
    component: DashboardOmde
  },
  {
    path: "/dashboardsaham",
    layout: SahamLayout,
    component: DashboardSaham
  },
  {
    path: "/dashboardzanjire",
    layout: DefaultLayout,
    component: DasboardZanjire
  },
  {
    path: "/tahlilgeymat",
    layout: SahamLayout,
    component: TahlilGeymat
  },
  {
    path: "/productivity",
    layout: SahamLayout,
    component: Productivity
  },
  {
    path: "/bours",
    layout: SahamLayout,
    component: WordCloudPos
  },

  // {
  //   path: "/register",
  //  // layout: DefaulCustomeLayout,
  //   component:Register
  // },
];
