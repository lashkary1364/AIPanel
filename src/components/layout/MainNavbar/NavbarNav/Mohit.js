import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem, FormSelect } from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faReply, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";


export const Mohit = () => {
  const history = useHistory();
  const handleLogout = () => {
    // console.log("log out")
    const user = JSON.parse(sessionStorage.getItem("LoginTocken"));
    // console.log("user:");
    // console.log(JSON.parse(sessionStorage.getItem("LoginTocken")));
    // console.log(user.userFirstName);
    // console.log(user.userLastName);
    sessionStorage.clear();
    localStorage.clear();
    // console.log("user");
    // console.log(sessionStorage.getItem("LoginTocken"));
    window.location.replace('/n');
    window.location.clear();
  }

  const handleGoBack = () => {
    history.goBack();
  }

  const handleGoToHomePage = () => {
    // Outputs: 'https://timmousk.com/blog/react-get-current-url/'
    // console.log(window.location.href)

    // Outputs: 'https:'
    // console.log(window.location.protocol)

    // Outputs: 'timmousk.com'
    // console.log(window.location.hostname)

    // Outputs: '/blog/react-get-current-url/'
    // console.log(window.location.pathname);
    // const path = window.location.pathname;
    // switch (path) {
    //   case "/mainomde":
    //     window.location.replace('/home');
    //     break;

    //   default:
    //     break;
    // }
    window.location.replace('/home');


  }


  return (
    <>
      <NavItem className="dropdown form-inline">
        <NavLink onClick={handleGoBack}
          className="nav-link-icon text-center"   >
          <div className="nav-link-icon__wrapper text-nowrap px-3 mt-2">
            <FontAwesomeIcon icon={faReply} style={{ fontSize: "16pt", color: "#6f0a9d" }} />
          </div>
        </NavLink>
        <NavLink
          className="nav-link-icon text-center" onClick={handleGoToHomePage}           >
          <div className="nav-link-icon__wrapper text-nowrap px-3 mt-2">
            <FontAwesomeIcon icon={faHome} style={{ fontSize: "16pt", color: "#6f0a9d" }} />
          </div>
        </NavLink>
        <NavLink
          className="nav-link-icon text-center" onClick={handleLogout}>
          <div className="nav-link-icon__wrapper text-nowrap px-3 mt-2">
            <span style={{ fontSize: "16pt", color: "#6f0a9d", fontFamily: "b nazanin bold", marginRight: "2px" }}>شبنم لشکری</span>
            <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: "16pt", color: "#6f0a9d" }} />
          </div>
        </NavLink>
      </NavItem>
    </>
  );

}
export default Mohit;