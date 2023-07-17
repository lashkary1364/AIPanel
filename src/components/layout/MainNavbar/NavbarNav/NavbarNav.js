import React from "react";
import { Nav } from "shards-react";
import Mohit from "./Mohit";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

export default () => (
  <Nav navbar dir="rtl" className="border-left flex-row">
    <Mohit/>   
    <Mohit/>   
    <UserActions />
    {/* <Notifications />  */}
  </Nav>
);
