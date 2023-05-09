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
import { main } from "./Main";
import { Register } from "./Register";
import { Dashboard } from "./Dashboard";
import { BarChart } from "./BarChart";

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
      {/* <Route path="/main" key={100002} exact component={main} />    
      {/* <Route path="/barchart" key={100008} exact component={BarChart} />  */}   
      {/* <Route path="/dashboard" key={100013} exact component={Dashboard} /> */}
      <Route path="/register" key={100012} exact component={Register} />
{/* </ToastProvider> */}
{/* </ToastProvider> */}


    </div>

  </Router>
);
