import { Component } from 'ag-grid-community';
import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import routes from "./routes";
import withTracker from "./withTracker";

const PrivateRouteChild = () => {
    //const location = useLocation()
    //localStorage.setItem('user','1234')
    const location = window.location.pathname;
    // const currentURL = window.location.href
    console.log("Current Location:");
    console.log(location);
    console.log("access-tocken");
    console.log(localStorage.getItem("access-tocken"));
    // const [isAuth = false
    // if (localStorage.getItem("access-tocken")==null){

    // }

    // sessionStorage.setItem("LoginTocken", JSON.stringify({
    //     userFirstName: data.userName,
    //     userLastName: data.password,
    //     userTocken: response.data.access_token,
    // }));
    return (
        <>
        {/* // <div> */}
            {
                localStorage.getItem("access-tocken") != null ? routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={withTracker(props => {
                                return (
                                   <Route {...props}>
                                          <route.layout {...props}>
                                            <route.component {...props} />
                                        </route.layout>
                                </Route>
                                );
                            })}></Route>

                    )
                })

                    : <Redirect to="/login"   ></Redirect>
            }
        {/* // </div> */}
</>
    )
}



export default PrivateRouteChild;