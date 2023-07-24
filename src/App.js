import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.css";
import PrivateRouteChild from "./PrivateRouteChild";
import { NotFound } from "./NotFound";
import { Login1 } from "./Login1";
import { Register } from "./Register";
import { MainOmde1 } from "./MainOmde1";


export default () => (
 
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <Switch>    
      <Route path="/" key={10000} exact component={Login1} />   
      <Route path="/login" key={10002} exact component={Login1} />    
      <Route path="/register" key={10003} exact component={Register} />    
      <PrivateRouteChild></PrivateRouteChild>      
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
