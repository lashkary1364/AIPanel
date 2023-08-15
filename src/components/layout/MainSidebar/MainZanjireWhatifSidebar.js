import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";
import SidebarMainNavbar from "./ZanjireWhatifSidebarMainNavbar";
import SidebarSearch from "./SidebarSearch";
import SidebarNavItems from "./SidebarNavZanjireWhatifItems";
import { Store } from "../../../flux";

class MainZanjireWhatifSidebar extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      sidebarNavItems: Store.getSidebarZanjireWhatifItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      menuVisible: Store.getMenuState(),
      sidebarNavItems: Store.getSidebarZanjireWhatifItems()
    });
  }

  render() {
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12", 
      this.state.menuVisible && "open"
    );

    return (
      <Col id="MainNavbar"
        tag="aside"
        className={classes}
        lg={{ size:2 }}
        md={{ size:3}}>          
        <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        <SidebarSearch />
        <SidebarNavItems />        
      </Col>
    );
  }
}

MainZanjireWhatifSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

MainZanjireWhatifSidebar.defaultProps = {
  hideLogoText: false
};

export default MainZanjireWhatifSidebar;

