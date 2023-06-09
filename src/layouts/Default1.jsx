import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const Default1Layout = ({ children, noNavbar, noFooter }) => (
  <Container fluid dir="rtl" className="rtl">
    <Row>
      {/* <MainSidebar /> */}
      <Col
        // className="main-content p-0"
        lg={{ size: 12, offset: 2 }}
        md={{ size: 12, offset: 3 }}
        sm="12"
        tag="main"
      >     
        {!noNavbar && <MainNavbar />}
        {children}
        {/* {!noFooter && <MainFooter />} */}
      </Col>
    </Row>
  </Container>
);

Default1Layout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

Default1Layout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default Default1Layout;
