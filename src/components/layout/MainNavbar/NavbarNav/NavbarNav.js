import React from "react";
import { Nav } from "shards-react";
import HomePage from "./HomePage";
import Mohit from "./Mohit";

import Notifications from "./Notifications";
import Signout from "./Signout";
import UserActions from "./UserActions";

export default () => (

  <Nav navbar className="border-left flex-row">
    {/* <HomePage></HomePage>
    <Notifications /> */}
    <UserActions />
  </Nav>


  // <Nav navbar className="border-left flex-row">
  //  <Notifications />
  // <UserActions />
  // </Nav>
  // // <Nav navbar  className="border-left flex-row">
  // // <Nav navbar  className="border-left flex-row">
  //    {/* <Notifications />  */}
  //   {/* <Mohit/>    */}
  //   {/* <Mohit/>   */}
  //   {/* <Signout></Signout>  */}
  //   // <UserActions />

  // // </Nav>
);
