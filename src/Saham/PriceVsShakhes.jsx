import React from 'react'
import {
  Card,
  CardHeader,
  CardBody, Container
} from "shards-react";
import "../shards-dashboard/styles/slider-style.css"
import ReactECharts from 'echarts-for-react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { TotalPrice } from './TotalPrice';
import Loading from '../Loading';
import Swal from 'sweetalert2';
import { set } from 'lodash';
import { RiceBowlSharp } from '@mui/icons-material';


export const PriceVsShakhes = () => {

  const accessToken = localStorage.getItem("access-tocken");
  const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
  const [option, setOption] = useState();
  const [optionRsi, setOptionRsi] = useState([]);
  const [price, setPrice] = useState([]);
  const [sentiment, setSentiment] = useState([]);
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rsi, setRsi] = useState([]);




  useEffect(() => {
    getStockPredicted();
  }, []);

  // useEffect(() => {
  //     const removeduplicate= date.filter((item,
  //         index) => date.indexOf(item) === index);
  //         console.log(removeduplicate);
  //         setRemoveDD(removeduplicate);
  // }, [date]);

  useEffect(() => {

    console.log("data series ...")
    console.log(date);
    console.log(price);
    console.log(sentiment);

    setOption(
      {
        textStyle: {
          fontFamily: 'b yekan',
          fontSize: 13,
          fontStyle: 'normal',
          fontWeight: 'bold'
      },
        // title: {
        //   text: 'Stacked Line'
        // },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['price', 'sentiment',]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date//['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          //   {
          //     name: 'Email',
          //     type: 'line',
          //     stack: 'Total',
          //     data: [120, 132, 101, 134, 90, 230, 210]
          //   },
          //   {
          //     name: 'Union Ads',
          //     type: 'line',
          //     stack: 'Total',
          //     data: [220, 182, 191, 234, 290, 330, 310]
          //   },
          {
            name: 'price',
            type: 'line',
            stack: 'Total',
            data: price//[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'sentiment',
            type: 'line',
            stack: 'Total',
            data: sentiment//[320, 332, 301, 334, 390, 330, 320]
          },
          //   {
          //     name: 'Search Engine',
          //     type: 'line',
          //     stack: 'Total',
          //     data: [820, 932, 901, 934, 1290, 1330, 1320]
          //   }
        ]
      });



  }, [date, price, sentiment]);


  useEffect(() => {
    setOptionRsi((
      {
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
            data: rsi
          }
        ]
      }));
  }, [date, rsi])


  useEffect(() => {

    console.log("option ....")
    console.log(option);

  }, [option])

  const getStockPredicted = () => {

    console.log("مقایسه قیمت شاخص و احساسات ...");

    axios(
      {
        url: serverAddress + "get_stock_predicted",
        method: "get",
        headers:
        {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(function (response) {

        console.log("get stock price ....")
        const resultItems = response.data;
        console.log(resultItems);
        const itemsArray = resultItems.result;
        console.log("itemsArray");
        console.log(itemsArray);
        const arr = JSON.parse(itemsArray);
        console.log(arr);
        setDate([]);
        setPrice([]);
        setSentiment([]);

        arr.map((item) => {
          // const substr = item.date_y.substring(0, 4);
          // console.log(substr)
          setDate(date => [...date, item.date_y]);
          setPrice(price => [...price, item.price]);
          setSentiment(sentiment => [...sentiment, item.sentiment]);
          setRsi(i => [...i, item.rsi]);
        });

        setIsLoading(false);

      }).catch(function (error) {
        setIsLoading(false);
        console.log("axois error: " + error);
        Swal.fire(
          'خطا',
          error.message,
          'error');
      });

  }





  return (
    <div>
      <Card small className="h-100 mt-20" >
        <CardHeader> مقایسه قیمت و شاخص احساسات</CardHeader>
        <CardBody className="pt-0">
          {
            isLoading == true ? <Loading></Loading>
              :
              <ReactECharts option={option} />
          }
        </CardBody>
      </Card>
      <br />
      <Card small className="h-100 mt-20" >
        <CardHeader>نمودار شاخص RSI</CardHeader>
        <CardBody className="pt-0">
          {
            isLoading == true ? <Loading></Loading>
              :
              <ReactECharts option={optionRsi} />
          }
        </CardBody>
      </Card>
      <br/>
    </div>

  )
}
