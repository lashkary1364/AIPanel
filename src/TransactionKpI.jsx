import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "shards-react";
import axios from 'axios'
import "../src/shards-dashboard/styles/slider-style.css"
import { useEffect } from 'react';
import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Flag } from '@material-ui/icons';

export const TransactionKpI = () => {

  const accessToken = localStorage.getItem("access-tocken");

  const [option, setOption] = useState({});

  const [revenueJun, setRevenueJun] = useState([]);
  const [revenueFeb, setRevenueFeb] = useState([]);
  const [revenueApr, setRevenueApr] = useState([]);
  const [revenueMay, setRevenueMay] = useState([]);
  const [revenueJune, setRevenueJune] = useState([]);
  const [revenueJul, setRevenueJul] = useState([]);
  const [revenueAug, setRevenueAug] = useState([]);
  const [revenueSept, setRevenueSep] = useState([]);
  const [revenueOct, setRevenueOct] = useState([]);
  const [revenueNov, setRevenueNov] = useState([]);
  const [revenueDec, setRevenueDec] = useState([]);
  const [revenueMarch, setRevenueMarch] = useState([]);
  const [revenueYear, setRevenueYear] = useState([]);
  const [year, setYear] = useState(["revenue"]);
  const [newY, setNewY] = useState([]);
  const [flag, setFlag] = useState(false);
  const [variable, setVariable] = useState({});
  useEffect(() => {

    console.log(year);
    const y = year.filter((x, i, a) => a.indexOf(x) == i);
    console.log(y);
    setNewY(y)

  }, [year, setYear]);



  // useEffect(() => {

  //   console.log("revenueMarch")
  //   console.log(revenueMarch);


  // }, [revenueMarch, setRevenueMarch]);


  useEffect(() => {
    console.log("revenue march ....")
    console.log(revenueMarch)
    JSON.stringify()
    //const newEmployees = revenueMarch.filter(revenueMarch => revenueMarch !== "{");
    console.log("newEmployees")
    console.log(revenueMarch.toString())
    //     return () => {

    console.log("revenueYear")
    console.log(revenueYear)


    revenueYear.map((item, index) => {
      console.log(item)
      console.log(revenueYear[index] + ":" + revenueMarch[index])

      const x = revenueYear[index];
      const y = revenueMarch[index];


      const updatedValue = {[revenueYear[index]]: revenueMarch[index] };
      setVariable({
        ...variable,
        ...updatedValue
      });


      console.log(variable)
    })




    setOption({

      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', 2015, 2016, 2017],
        source: [

          { product: 'Matcha Latte', "2015": "43.3", "2016": "85.8", "2017": "93.7" },
          // { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
          // { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
          // { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]

    })



  }, [flag, setFlag, revenueMarch, setRevenueMarch, revenueYear, setRevenueYear])

  // useEffect(() => {
  //   console.log("year ..............................");
  //   console.log(option);
  //   setOption(  {
  //     xAxis: {
  //       type: 'category',
  //       data: year
  //     },
  //     yAxis: {
  //       type: 'value'
  //     },
  //     series: [
  //       {
  //         data: revenue,
  //         type: 'bar',
  //         showBackground: true,
  //         backgroundStyle: {
  //           color: 'rgba(180, 180, 180, 0.2)'
  //         }
  //       }
  //     ]
  //   })

  // }, [year , revenue]);


  // const option2 = {
  //   legend: {},
  //   tooltip: {},
  //   dataset: {
  //     dimensions:['product', 2015, 2016, 2017],
  //     source: [
  //       { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
  //       { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
  //       { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
  //       { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
  //     ]
  //   },
  //   xAxis: { type: 'category' },
  //   yAxis: {},
  //   // Declare several bar series, each will be mapped
  //   // to a column of dataset.source by default.
  //   series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  // };

  //  useEffect(() => {
  //   // setYear(year.filter((x, i, a) => a.indexOf(x) == i));
  //   setOption({
  //     legend: {},
  //     tooltip: {},
  //     dataset: {
  //       dimensions: [year],     //['revenue', 2015, 2016, 2017],
  //       source: [
  //         // revenueJun,
  //         // revenueFeb,
  //         revenueMarch,
  //         // revenueApr,
  //         // revenueMay,
  //         // revenueJune,
  //         // revenueJul,
  //         // revenueAug

  //         // { revenue: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
  //         // { revenue: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
  //         // { revenue: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
  //         // { revenue: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
  //       ]
  //     },
  //     xAxis: { type: 'category' },
  //     yAxis: {},
  //     // Declare several bar series, each will be mapped
  //     // to a column of dataset.source by default.
  //     series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  //   });

  //   console.log("optiiiiion:")
  //   console.log(option)
  //  }, [year,setYear , revenueMarch, setRevenueMarch])

  const getTransactionKPI = () => {
    axios(
      {
        url: "http://82.115.24.35:8000/get_transaction_kpis",
        method: "get",
        headers:
        {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data"
        },
      }).then(function (response) {

        var monthName;
        const resultItems = response.data;
        //console.log(resultItems.result);
        const itemsArray = resultItems.result;
        console.log("itemsArray")
        console.log(itemsArray)
        const arr = JSON.parse(itemsArray)
        console.log(arr)

        arr.map(item => {

          setYear(year => [...year, item.year])


          if (item.month == 1) {
            monthName = "January";
            // setRevenueJun(revenueJun => [...revenueJun, { 'revenue': "January", year: rev }])
          } else if (item.month == 2) {
            monthName = "February"
            // setRevenueFeb(revenueFeb => [...revenueFeb, { 'revenue': "February", year: rev }])
          } else if (item.month == 3) {
            monthName = "March"
            setRevenueYear(revenueYear => [...revenueYear, item.year])

            setRevenueMarch(revenueMarch => [...revenueMarch, item.Revenue])
            //setRevenueMarch(revenueMarch => [...revenueMarch, { [item.year]: item.Revenue }])
          } else if (item.month == 4) {
            monthName = "April"
            // setRevenueApr(revenueApr => [...revenueApr, { 'revenue': "April", year: rev }])
          } else if (item.month == 5) {
            monthName = "May"
            // setRevenueMay(revenueMay => [...revenueMay, { 'revenue': "May", year: rev }])
          } else if (item.month == 6) {
            monthName = "June"
            // setRevenueJune(revenueJune => [...revenueJune, { 'revenue': "June", year: rev }])
          } else if (item.month == 7) {
            monthName = "July"
            // setRevenueJul(revenueJul => [...revenueJul, { 'revenue': "July", year: rev }])
          } else if (item.month == 8) {
            monthName = "August"
            // setRevenueAug(revenueAug => [...revenueAug, { 'revenue': "August", year: rev }])
          } else if (item.month == 9) {
            monthName = "September"
            // setRevenueSep(revenueSep => [...revenueSep, { 'revenue': "September", year: rev }])
          } else if (item.month == 10) {
            monthName = "October"
            // setRevenueOct(revenueOct => [...revenueOct, { 'revenue': "October", year: rev }])
          } else if (item.month == 11) {
            monthName = "Novamber"
            //  setRevenueNov(revenueNov => [...revenueNov, { 'revenue': "Novamber", year: rev }])
          } else {
            monthName = "December"
            // setRevenueDec(revenueDec => [...revenueDec, { 'revenue': "December", year: rev }])
          }

          //const obj={revenue:monthName , }
          //{ revenue: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 }
          //setRevenue(revenue=>[...revenue , { revenue:monthName, item.year}])

        });

        setFlag(true);

        //       console.log(year)
        //       const y=year.filter((x, i, a) => a.indexOf(x) == i);
        //       console.log(y)
        // setNewY(y);
        //   console.log("new year")
        // console.log(newY)
      }).catch(function (error) {
        console.log("axois error: " + error);
      })



  }



  return (

    <Container fluid className="main-content-container px-4" dir="rtl" >
      <Row className="page-header mt-2 ">
        <Col lg="12"  >
          <nav className="breadcrumb">
            <a className="breadcrumb-item" href="#">خانه</a>
            <span className="breadcrumb-item active">داشبورد شاخص های کلیدی عملکرد</span>
          </nav>
        </Col>
      </Row>
      <Card small className="h-100">
        <CardHeader>نمودار درآمد محصول  به تفکیک سال و ماه</CardHeader>
        <CardBody className="pt-0">
          {newY}
          <hr />
          {year}
          <button them="secondary" type='button' onClick={getTransactionKPI}>generate</button>
          <ReactECharts option={option} />
        </CardBody>
      </Card>

    </Container>
  )
}
