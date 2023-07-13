import React from 'react'
import {
  Container,
  Row,
  Col,
  
} from "shards-react";
import axios from 'axios'
import "../src/shards-dashboard/styles/slider-style.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { RevenueMonth } from './RevenueMonth';
import { GrowthMonth } from './GrowthMonth';
import { AvgOrderMonth } from './AvgOrderMonth';
import { OrderValueMonth } from './OrderValueMonth';
import { CustomerActivity } from './CustomerActivity';

export const TransactionKpI = () => {

  const accessToken = localStorage.getItem("access-tocken");
  const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
  const [optionRevenueMonth, setOptionRevenueMonth] = useState({});
  const [revenue, setRevenue] = useState([]);
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //----------------------------------------------------------------------

  const [optionGrowthMonth, setOptionGrowthMonth] = useState({});
  const [growth, setGrowth] = useState([]);
  const labelRight = {
    position: 'right'
  };

  //----------------------------------------------------------------------

  const [optionAvgOrderMonth, setOptionAvgOrderMonth] = useState({});
  const [avgOrder, setAvgOrder] = useState([]);

  //----------------------------------------------------------------------

  const [option, setOption] = useState({});
  const [order, setOrder] = useState([]);


  useEffect(() => {


    setOption(
      {
        xAxis: {
          tooltip: { show: true },
          type: 'category',
          data: date
        },
        yAxis: {
          tooltip: { show: true },
          type: 'value'
        },
        series: [
          {
            tooltip: { show: true },
            data: order,//[150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
    )

    console.log(option)
  }, [date, setDate, order, setOrder])

  //-----------------------------------------------------------------------


  const [optionActivityCustomer, setOptionActivityCustomer] = useState({});
  const [countcustomer, setCountCustomer] = useState([]);
  
  

  useEffect(() => {

      console.log(date);
      console.log(countcustomer);

      setOptionActivityCustomer(
          {
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow'
                  }
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: [
                  {
                      type: 'category',
                      data: date,
                      axisTick: {
                          alignWithLabel: true
                      }
                  }
              ],
              yAxis: [
                  {
                      type: 'value'
                  }
              ],
              series: [
                  {
                      name: 'Direct',
                      type: 'bar',
                      barWidth: '60%',
                      data: countcustomer
                  }
              ]
          }


      )

      console.log(option)
  }, [date, setDate, countcustomer, setCountCustomer])


  //-------------------------------------------------------------------------
  useEffect(() => {
    getTransactionKpi();
  }, []);

  //------------------------------------------------------------------------
  useEffect(() => {


    setOptionRevenueMonth(
      {
        xAxis: {
          tooltip: { show: true },
          type: 'category',
          data: date
        },
        yAxis: {
          tooltip: { show: true },
          type: 'value'
        },
        series: [
          {
            tooltip: { show: true },
            data: revenue,//[150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
    )


  }, [date, setDate, setRevenue, setRevenue]);

  //-----------------------------------------------------------------------

  useEffect(() => {


    setOptionGrowthMonth({
      // title: {
      //     text: 'Bar Chart with Negative Value'
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: 30,
        bottom: 30
      },
      xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      yAxis: {
        type: 'category',
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        data: date

      },
      series: [
        {
          name: 'Cost',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            formatter: '{b}'
          },
          data: growth

        }
      ]
    })


  }, [date, setDate, growth, setGrowth])

  //---------------------------------------------------------------
  useEffect(() => {


    setOptionAvgOrderMonth(
      {
        // title: {
        //   text: 'World Population'
        // },
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
          boundaryGap: [0, 0.1]
        },
        yAxis: {
          type: 'category',
          data: date
          //['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
          {
            // name: '2011',
            type: 'bar',
            data: avgOrder
            //[18203, 23489, 29034, 104970, 131744, 630230]
          },

        ]
      }
    )


  }, [date, setDate, avgOrder, setAvgOrder])
  //---------------------------------------------------------------
  const getTransactionKpi = () => {

    setIsLoading(true);


    axios(
      {
        url: serverAddress + "get_transaction_kpis",
        method: "get",
        headers:
        {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(function (response) {

        const resultItems = response.data;
        const itemsArray = resultItems.result;
        console.log("itemsArray");
        console.log(itemsArray);
        const arr = JSON.parse(itemsArray);
        console.log(arr);
        setDate([]);
        setRevenue([]);
        setGrowth([]);
        setAvgOrder([]);
        setOrder([]);
        setCountCustomer([]);

        arr.map((item) => {
          console.log(item.year + " , " + item.month)
          const date1 = item.year + " , " + item.month;
          setDate(date => [...date, date1]);
          setCountCustomer(countcustomer => [...countcustomer, item.active_customers]);

          if (item.Revenue == null) {
            console.log("null");
          } else {
            setRevenue(revenue => [...revenue, item.Revenue])
          }


          if (item.monthly_growth == null) {
            console.log("null")

          } else {
            if (item.monthly_growth < 0) {
              setGrowth(growth => [...growth, { value: item.monthly_growth, label: labelRight }])
            } else {
              setGrowth(growth => [...growth, item.monthly_growth])
            }
          }



          if (item.monthly_order_average == null) {
            console.log("null")
          } else {
            setAvgOrder(avgOrder => [...avgOrder, item.monthly_order_average])
          }

          if (item.monthly_order_count == null) {
            console.log("null")

          } else {
            setOrder(order => [...order, item.monthly_order_count])
          }

        });

        setIsLoading(false);

      }).catch(function (error) {

        console.log("axois error: " + error);
        setIsLoading(false);

        sessionStorage.clear();
        localStorage.clear();
        window.location.replace('/login');
      });

  }


  return (

    <Container fluid className="main-content-container px-4 mt-3" dir="rtl"  >
      {/* <Row className="page-header mt-2 ">
        <Col lg="12"  >
          <nav className="breadcrumb">
            <a className="breadcrumb-item" href="/home">خانه</a>
            <a className="breadcrumb-item" href="/main">صفحه قبلی</a>
            <span className="breadcrumb-item active">داشبورد شاخص های کلیدی عملکرد</span>
          </nav>
        </Col>
      </Row> */}

      <RevenueMonth optionRevenueMonth={optionRevenueMonth} isLoading={isLoading} />
      <hr />
      <GrowthMonth optionGrowthMonth={optionGrowthMonth} isLoading={isLoading} />
      <hr />
      <AvgOrderMonth optionAvgOrderMonth={optionAvgOrderMonth} isLoading={isLoading}></AvgOrderMonth>
      <hr />
      <OrderValueMonth option={option} isLoading={isLoading}></OrderValueMonth>
      <hr />
      <CustomerActivity optionActivityCustomer ={optionActivityCustomer} isLoading={isLoading}></CustomerActivity>
    </Container>
  )
}
