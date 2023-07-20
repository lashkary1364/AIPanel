import React from 'react'
import {
  Container,
  Row,
  Col,

} from "shards-react";
import axios from 'axios'
import "../shards-dashboard/styles/slider-style.css"
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
  const [year,setYear]=useState([]);
  const [revenueYear,setRevenueYear]=useState([]); 
 


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
 //درآمد ماهانه
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


  }, [date, setDate, revenue, setRevenue]);

  //-----------------------------------------------------------------------
  //رشد ماهانه
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
        data: [2017,2018,2019,2020,2021,2022,2023,2024],

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
  //متوسط سفارش در ماه
  useEffect(() => {
console.log("year------------------");
console.log(year);
console.log("revenue year-----------------");
console.log(revenueYear);

    // setOptionAvgOrderMonth(
    //   {
    //     // title: {
    //     //   text: 'World Population'
    //     // },
    //     tooltip: {
    //       trigger: 'axis',
    //       axisPointer: {
    //         type: 'shadow'
    //       }
    //     },
    //     legend: {},
    //     grid: {
    //       left: '3%',
    //       right: '4%',
    //       bottom: '3%',
    //       containLabel: true
    //     },
    //     xAxis: {
    //       type: 'value',
    //       boundaryGap: [0, 0.1]
    //     },
    //     yAxis: {
    //       type: 'category',
    //       data: revenueYear
    //       //['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
    //     },
    //     series: [
    //       {
    //         // name: '2011',
    //         type: 'bar',
    //         data:  [2017,2018,2019,2020,2021,2022,2023,2024]
    //         //[18203, 23489, 29034, 104970, 131744, 630230]
    //       },

    //     ]
    //   }
    // )

    setOptionAvgOrderMonth(
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
            data: [2017,2018,2019,2020,2021,2022,2023,2024],
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
            data: revenueYear
          }
        ]
      })


  }, [year,revenueYear])

  //---------------------------------------------------------------

  const getTransactionKpi = () => {

    setIsLoading(true);
    var revenue2017=0;
    var revenue2018=0;
    var revenue2019=0;
    var revenue2020=0;
    var revenue2021=0;
    var revenue2022=0;
    var revenue2023=0;
    var revenue2024=0;
    
    var growth2017=0;
    var growth2018=0;
    var growth2019=0;
    var growth2020=0;
    var growth2021=0;
    var growth2022=0;
    var growth2023=0;
    var growth2024=0;
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

        
      //   images.map(img => {
      //     if (uniqueTags.indexOf(img.tag) === -1) {
      //         uniqueTags.push(img.tag)
      //     }
      // });
        arr.map((item) => {
        //   if (year.indexOf(item.year) === -1) {
        //     year.push(item.year);
        // }

 if(item.year==2017){
  revenue2017+=item.Revenue;
  growth2017+=item.monthly_growth;
 }else if (item.year==2018){
  revenue2018+=item.Revenue;
  growth2018+=item.monthly_growth;
 }else if (item.year==2019){
  revenue2019+=item.Revenue;
  growth2019+=item.monthly_growth;
}else if (item.year==2020){
  revenue2020+=item.Revenue;
  growth2020+=item.monthly_growth; 
 }else if (item.year==2021){
  revenue2021+=item.Revenue;
  growth2021+=item.monthly_growth;
 }else if (item.year==2022){
  revenue2022+=item.Revenue;
  growth2022+=item.monthly_growth;
 }else if (item.year==2023){
  revenue2023+=item.Revenue;
  growth2023+=item.monthly_growth;
 }else if (item.year==2024){
  revenue2024+=item.Revenue;
  growth2024+=item.monthly_growth;
 }

        console.log(year);
          setYear(item.year);
          console.log(item.year + " , " + item.month)
          const date1 = item.year+ " , " + item.month;
          setDate(date => [...date, date1]);
          setCountCustomer(countcustomer => [...countcustomer, item.active_customers]);

          if (item.Revenue == null) {
            console.log("null");
          } else {
            setRevenue(revenue => [...revenue, item.Revenue])
          }

          // if (item.monthly_growth == null) {
          //   console.log("null")

          // } else {
          //   if (item.monthly_growth < 0) {
          //     setGrowth(growth => [...growth, { value: item.monthly_growth}])//, label: labelRight }])
          //   } else {
          //     setGrowth(growth => [...growth, item.monthly_growth])
          //   }
          // }

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

        const sumMentoryValue = arr.map(item => item.Revenue).reduce((prev, curr) => prev + curr, 0);
        
        setRevenueYear(revenueYear => [...revenueYear, revenue2017]);
        setRevenueYear(revenueYear => [...revenueYear, revenue2018]);
        setRevenueYear(revenueYear => [...revenueYear, revenue2019]);
        setRevenueYear(revenueYear => [...revenueYear, revenue2020]);
        setRevenueYear(revenueYear => [...revenueYear, revenue2021]);
        setRevenueYear(revenueYear => [...revenueYear, revenue2022]);
        setRevenueYear(revenueYear => [...revenueYear, revenue2023]);
        setRevenueYear(revenueYear => [...revenueYear, revenue2024]);

        setGrowth(revenueYear => [...revenueYear, growth2017]);
        setGrowth(revenueYear => [...revenueYear, growth2018]);
        setGrowth(revenueYear => [...revenueYear, growth2019]);
        setGrowth(revenueYear => [...revenueYear, growth2020]);
        setGrowth(revenueYear => [...revenueYear, growth2021]);
        setGrowth(revenueYear => [...revenueYear, growth2022]);
        setGrowth(revenueYear => [...revenueYear, growth2023]);
        setGrowth(revenueYear => [...revenueYear, growth2024]);
        console.log(sumMentoryValue)
        setIsLoading(false);

      }).catch(function (error) {

        console.log("axois error: " + error);
        setIsLoading(false);

        sessionStorage.clear();
        localStorage.clear();
       // window.location.replace('/login');
      });

  }


  return (

    <Container fluid className="main-content-container" >
      <RevenueMonth optionRevenueMonth={optionRevenueMonth} isLoading={isLoading} />
      <br />
      <GrowthMonth optionGrowthMonth={optionGrowthMonth} isLoading={isLoading}  />
      <br />
      <AvgOrderMonth optionAvgOrderMonth={optionAvgOrderMonth} isLoading={isLoading} />
      <br />
      <OrderValueMonth option={option} isLoading={isLoading} />
      <br />
      <CustomerActivity optionActivityCustomer={optionActivityCustomer} isLoading={isLoading} />
    </Container>
  )
}
