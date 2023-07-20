import React from "react";
import { Nav } from "shards-react";
import Mohit from "./Mohit";

import Notifications from "./Notifications";
import Signout from "./Signout";
import UserActions from "./UserActions";

export default () => (
  // <Nav navbar  className="border-left flex-row">
  <Nav navbar  className="flex-row">
    {/* <Mohit/>    */}
    <Mohit/>  
    {/* <Signout></Signout>  */}
    {/* <UserActions /> */}
    {/* <Notifications />  */}
  </Nav>
);
