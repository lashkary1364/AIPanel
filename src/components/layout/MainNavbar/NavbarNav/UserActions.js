import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      firstName: "",
      lastName: ""
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);

    // sessionStorage.setItem("LoginTocken", JSON.stringify({
    //   userFirstName: data.userName,
    //   userLastName: data.password,
    //   userTocken: response.data.access_token,
    // }));

    const user = JSON.parse(sessionStorage.getItem("LoginTocken"))
    this.state.firstName = user.userFirstName;
    this.state.lastName = user.userLastName;
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }



  render() {


    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap ">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("../../../../images/navbar/images3.png")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{this.state.lastName + " " + this.state.firstName}  </span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible} style={{ fontFamily: "b nazanin bold", fontWeight: "bold", zIndex: "1000" }}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> تغییر رمز عبور
          </DropdownItem>
          {/* <DropdownItem tag={Link} to="edit-user-profile">
          <i className="material-icons">&#xE8B8;</i> Edit Profile
        </DropdownItem>
        <DropdownItem tag={Link} to="file-manager-list">
          <i className="material-icons">&#xE2C7;</i> Files
        </DropdownItem>
        <DropdownItem tag={Link} to="transaction-history">
          <i className="material-icons">&#xE896;</i> Transactions
        </DropdownItem> */}
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> خروج
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
