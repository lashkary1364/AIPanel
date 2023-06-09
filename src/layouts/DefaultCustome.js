import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

const DefaulCustomeLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      {/* <MainSidebar /> */}
      <Col
        className="main-content p-0"
        lg={{ size: 12 }}
        md={{ size:12 }}
        sm="12"
        tag="main"
      >
     
        {/* {!noNavbar && <MainNavbar />} */}
        {children}
        {/* {!noFooter && <MainFooter />} */}
      </Col>
    </Row>
  </Container>
);

DefaulCustomeLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaulCustomeLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaulCustomeLayout;
