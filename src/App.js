import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login"
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.css";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../src/login/css/fontiran.css'
import './assets/ag-grid.css'
import PrivateRouteChild from "./PrivateRouteChild";
import { Register } from "./Register";
import { NotFound } from "./NotFound";
import { Resiliency } from "./Resiliency";
import { LoginTest } from "./LoginTest";
import { Login1 } from "./Login1";


export default () => (
  // }
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <Switch>
      {/* <PrivateRoute></PrivateRoute> */}
      <Route path="/" key={10000} exact component={Login1} />
      {/* <Route path="/menu" key={100010} component={TransactionKpI} />
      <PrivateRoute exact path="/home" component={Home}  /> 
      <PrivateRoute exact path="/main" component={Main}  /> 
      <PrivateRoute exact path="/barchart" component={BarChart}  />  */}
      <PrivateRouteChild></PrivateRouteChild>
      {/* <Route path="/home" key={100001} exact component={Home} />
      <Route path="/main" key={100002} exact component={Main} />
      <Route path="/barchart" key={100003} exact component={BarChart} /> */}
      {/* <Route path="/main" key={100002} exact component={main} />    
      {/* <Route path="/barchart" key={100008} exact component={BarChart} />  */}
  
      <Route path="/register" key={10004} exact component={Register} />
      <Route path="/404" key={10005} component={NotFound} />
      <Route path="*" component={NotFound} />      
    </Switch>
    {/* <div> */}
    {/* <ToastProvider> */}
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


    {/* </ToastProvider> */}
    {/* </ToastProvider> */}


    {/* </div> */}

  </Router>
);
