import React from 'react'
import {
    Container
} from "shards-react";
import "../src/shards-dashboard/styles/slider-style.css"
import { CustomerActivity } from './CustomerActivity';
import { RevenueCustomer } from './RevenueCustomer';
export const CustomerDashboard = () => {
    return (
        <Container fluid className="main-content-container px-4" dir="rtl" >
            {/* <Row className="page-header mt-2 ">
        <Col lg="12"  >
          <nav className="breadcrumb">
            <a className="breadcrumb-item" href="#">خانه</a>
            <span className="breadcrumb-item active">داشبورد شاخص های کلیدی عملکرد</span>
          </nav>
        </Col>
      </Row> */}
            <CustomerActivity style={{ marginTop: "30px" }}></CustomerActivity>
            <hr />
            <RevenueCustomer></RevenueCustomer>
            <hr />
        </Container>
    )
}
