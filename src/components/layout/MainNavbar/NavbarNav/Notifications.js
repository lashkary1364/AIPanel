import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowLeft, faArrowLeftLong, faArrowLeftRotate, faArrowsAlt, faBackwardStep, faHomeAlt } from '@fortawesome/free-solid-svg-icons'
import { faReply } from "@fortawesome/fontawesome-free-solid";
import { history, withRouter } from 'react-router-dom';

export default class Notifications extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleBack() {
    window.history.back();
  }

  render() {
    return (
      <NavItem className="border-right border-left dropdown notifications">
        <NavLink
          className="nav-link-icon text-center"
          onClick={this.toggleNotifications}>
          <div className="nav-link-icon__wrapper ">
          <FontAwesomeIcon  className="text-center"  icon={faArrowLeftRotate} style={{ fontSize: "16pt", color: "#530c8e" , marginTop:"7px" }} title="برگشت" onClick={this.handleBack} />
            {/* color: "#6f0a9d" */}
            {/* <FontAwesomeIcon icon={faArrowAltCircleLeft} /> */}
            {/* <i className="material-icons">&#xE7F4;</i> */}
            {/* <Badge pill theme="danger">
              2
            </Badge> */}

          </div>
         
        </NavLink>
        {/* <Collapse
          open={this.state.visible}
          className="dropdown-menu dropdown-menu-small">
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE6E1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Analytics</span>
              <p>
                Your website’s active users count increased by{" "}
                <span className="text-success text-semibold">28%</span> in the
                last week. Great job!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE8D1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Sales</span>
              <p>
                Last week your store’s sales count decreased by{" "}
                <span className="text-danger text-semibold">5.52%</span>. It
                could have been worse!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem className="notification__all text-center">
            View all Notifications
          </DropdownItem>
        </Collapse> */}
      </NavItem>
    );
  }
}
