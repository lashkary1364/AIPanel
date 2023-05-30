import React from 'react'
import {
  Container, Row, Col
} from "shards-react";
import "../src/shards-dashboard/styles/slider-style.css"
import { MinSaleProduct } from './MinSaleProduct'
import { MaxSaleProduct } from './MaxSaleProduct'
import { RFM } from './RFM'
import { RFMPurchase } from './RFMPurchase'
import { RFMPrice } from './RFMPrice'
import { CustomerChurn } from './CustomerChurn';
import { CustomerSegmentation } from './CustomerSegmentation';

export const ProductDashboard = () => {
  return (
    <Container fluid className="main-content-container px-4" dir="rtl" >
      <Row className="page-header mt-2 ">
        <Col lg="12"  >
          <nav className="breadcrumb">
            <a className="breadcrumb-item" href="/home">خانه</a>
            <a className="breadcrumb-item" href="/main">صفحه قبلی</a>
            <span className="breadcrumb-item active">داشبورد شاخص های کلیدی عملکرد محصول</span>
          </nav>
        </Col>
      </Row>
      {/* <MinSaleProduct style={{ marginTop: "30px" }}></MinSaleProduct>
            <hr />
            <MaxSaleProduct></MaxSaleProduct>
            <hr /> */}
      <RFM />
      <hr />
      <RFMPurchase />
      <hr />
      <RFMPrice />
      <hr />
      <CustomerChurn />
      <hr />
      <CustomerSegmentation />
    </Container>
  )
}

