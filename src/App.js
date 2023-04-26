import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route } from "react-router-dom";

// import routes from "./routes";
// import withTracker from "./withTracker";
import Login from "./login"
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.css";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../src/login/css/fontiran.css'
import './assets/ag-grid.css'
import PrivateRoute from "./PrivateRoute";

import {Home2} from './home2'
import { echart1 } from "./echart1";
import { echart2 } from "./chart2";
import { echart3 } from "./chart3";
import { main } from "./main";
import { main2 } from "./main2";
import { RepChart } from "./RepChart";
import { Home } from "@material-ui/icons";
import { test } from "./views/reports/test";

// import { ToastProvider } from 'react-toast-notifications'

export default () => (

  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
    {/* <ToastProvider> */}
      <PrivateRoute></PrivateRoute>

      {/* {routes.map((route, index) => {
  return (
    <PrivateRoute
      key={index}
      path={route.path}
      exact={route.exact}
      // component={withTracker(props => {
      //   return (
      //     <route.layout {...props}>
      //       <route.component {...props} />
      //     </route.layout>
      //   );
      // })}
    />
  );
})} */}

      <Route path="/" key={100000} exact component={Login} />
      {/* <Route path="/test" key={100001} exact component={test} /> */}
      <Route path="/main" key={100002} exact component={main} />
       {/* <Route path="/home2" key={100003} exact componen={Home2} />  */}
      <Route path="/chart" key={100004} exact component={echart1} />
      <Route path="/chart2" key={100005} exact component={echart2} />
      <Route path="/chart3" key={100006} exact component={echart3} />
      <Route path="/repchart" key={100007} exact component={RepChart} />
        <Route path="/test" key={100008} exact component={test} />
      
{/* </ToastProvider> */}

{/* </ToastProvider> */}
    </div>

  </Router>
);
