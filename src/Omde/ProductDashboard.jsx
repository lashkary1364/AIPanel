import React from 'react'
import {
  Container, Row, Col
} from "shards-react";
import "../shards-dashboard/styles/slider-style.css"
import { MinSaleProduct } from './MinSaleProduct'
import { MaxSaleProduct } from './MaxSaleProduct'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { setInlineStyles } from 'rsuite/esm/List/helper/utils';

export const ProductDashboard = () => {

  const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
  const [optionMax, setOptionMax] = useState({});
  const [optionMin, setOptionMin] = useState({});
  const [revenueMax, setRevenueMax] = useState([]);
  const [productMax, setProductMax] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const accessToken = localStorage.getItem("access-tocken");

  const [revenueMin, setRevenueMin] = useState([]);
  const [productMin, setProductMin] = useState([]);


  useEffect(() => {
    console.log(accessToken)
    getProductKpis();

  }, [])

  useEffect(() => {

    console.log("lllllllllllllllllllllll")
    
    setOptionMax({
      // title: {
      //   text: 'World Population'
      // },
      textStyle: {
        fontFamily: 'b yekan',
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: productMax
      },
      series: [
        {
          // name: '2011',
          type: 'bar',
          data: revenueMax
        },

      ]
    })

    setOptionMin({
      // title: {
      //   text: 'World Population'
      // },
      textStyle: {
        fontFamily: 'b yekan',
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: productMin
      },
      series: [
        {
          // name: '2011',
          type: 'bar',
          data: revenueMin
        },

      ]
    })

  }, [revenueMax, revenueMin, productMax, productMin])


  const getProductKpis = () => {

    setIsLoading(true);

    console.log("....................");

    axios(
      {
        url: serverAddress + "get_product_kpis",
        method: "get",
        headers:
        {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(function (response) {
        console.log("response:")
        console.log(response);
        const resultItems = response.data;
        const maxItems = resultItems.result_max;
        const minItems = resultItems.result_min;

        const arrMax = JSON.parse(maxItems);
        console.log(arrMax);


        const arrMin = JSON.parse(minItems);
        console.log(arrMin);
        setProductMax([]);
        setRevenueMax([]);
        setProductMin([]);
        setRevenueMin([]);

        arrMax.map((item) => {

          setProductMax(productMax => [...productMax, item.ProductID]);
          setRevenueMax(revenueMax => [...revenueMax, item.Revenue]);

        });

        arrMin.map((item) => {

          setProductMin(productMin => [...productMin, item.ProductID]);
          setRevenueMin(revenueMin => [...revenueMin, item.Revenue]);

        });

        setIsLoading(false);

      }).catch(function (error) {

        console.log("axois error: " + error);
        setIsLoading(false);
        setInlineStyles();

      });

  }


  return (
    <Container fluid className="main-content-container px-4 mt-2" dir="rtl" >
      {/* <Row className="page-header mt-2 ">
        <Col lg="12"  >
          <nav className="breadcrumb">
            <a className="breadcrumb-item" href="/home">خانه</a>
            <a className="breadcrumb-item" href="/main">صفحه قبلی</a>
            <span className="breadcrumb-item active">داشبورد شاخص های کلیدی عملکرد محصول</span>
          </nav>
        </Col>
      </Row> */}
      <MinSaleProduct optionMin={optionMin} isLoading={isLoading}></MinSaleProduct>
      <br />
      <MaxSaleProduct optionMax={optionMax} isLoading={isLoading}></MaxSaleProduct>
      <br />
      {/* <RFM />
      <hr />
      <RFMPurchase />
      <hr />
      <RFMPrice />
      <hr />
      <CustomerChurn />
      <hr />
      <CustomerSegmentation /> */}
    </Container>
  )
}

