import React from 'react'
import {
  Container, Row, Col
} from "shards-react";
import "../src/shards-dashboard/styles/slider-style.css"
import { CustomerActivity } from './CustomerActivity';
import { RevenueCustomer } from './RevenueCustomer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomerKPI } from './CustomerKPI';
import axios from 'axios'
import "../src/shards-dashboard/styles/slider-style.css"
import { useEffect } from 'react';
import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Flag } from '@material-ui/icons';
import { Spinner } from 'react-bootstrap';
import { setInlineStyles } from 'rsuite/esm/List/helper/utils';


export const CustomerDashboard = () => {
 
  const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
 const accessToken = localStorage.getItem("access-tocken");
    const [yearList, setYearList] = useState([]);
    const [oldRevenueList, setOldRevenueList] = useState([]);
    const [newRevenueList, setNewRevenueList] = useState([]);
    const [option, setOption] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    


    const [disabled, setDisabled] = useState("");
    const [optionRevenue, setOptionRevenue] = useState({});
    const [date, setDate] = useState([]);
    const [revenueNew, setRrevenueNew] = useState([]);
    const [revenueOld, setRrevenueOld] = useState([]);
    const [styleVar, setStyleVar] = useState({ visibility: 'collapse' , height:"0px" });
   
    const [seri,setSeri]=useState([])
    const [newDate,setNewDate]=useState([])
    const [divChart, setDivChart] = useState({ border: "0px" })

  
  useEffect(() => {

    setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: yearList  // ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
        },
        series: [
            {
                color: "red",
                name: 'مشتریان جدید',
                type: 'bar',
                stack: 'total',
                label:
                {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: newRevenueList//[320, 302, 301, 334, 390, 330, 320]
            },
            {
                color: "green",
                name: 'مشتریان قدیمی',
                type: 'bar',
                stack: 'total',
                label:
                {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: oldRevenueList //[120, 132, 101, 134, 90, 230, 210]
            },

        ]
    })

    setIsLoading(false);
}, [yearList, oldRevenueList, newRevenueList ]);



useEffect(() => {
  
  getCustomerKpis();
 
}, [])

useEffect(() => {
 
  console.log("revenue new ...");
  console.log(revenueNew);
  console.log("revenue old ...");
  console.log(revenueOld);

  setOptionRevenue({
    // title: {
    //   text: 'Rainfall vs Evaporation',
    //   //subtext: 'Fake Data'
    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['مشتریان جدید', 'مشتریان قدیم']
    },
    toolbox: {
      show: true,
      feature: {
        // dataView: { show: true, readOnly: false },
        // magicType: { show: true, type: ['line', 'bar'] },
        // restore: { show: true },
       // saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        // prettier-ignore
        data:newDate
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'مشتریان جدید',
        type: 'bar',
        data: revenueNew ,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      },
      {
        name: 'مشتریان قدیم',
        type: 'bar',
        data: revenueOld ,
        markPoint: {
          data: [
            { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
            { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }
    ]
  });

}, [ revenueNew , revenueOld])


  const getCustomerKpis = () => {

    //setDivChart({ border: "2px solid ", color: "#9b9797" , borderRadius:"10px", marginTop: "8px" });
    
    setIsLoading(true);
    console.log("....................");

    axios(
        {
            url: serverAddress+"get_customer_kpis",
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
            
            const newList = arr.filter(employee => {
                return (
                    employee.customer_type == "new"
                );
            });

            const oldList = arr.filter(employee => {
                return (
                    employee.customer_type == "old"
                );
            });

            const newGroupYeraList = newList.reduce((a, b) => {
                if (!a.find((item) => item.year === b.year)) {
                    a.push(b);
                }
                return a;
            }, []);


            console.log(newGroupYeraList);

            console.log(newGroupYeraList.map(item => item.year));

            setYearList(newGroupYeraList.map(item => item.year));

            const newRevenue = newGroupYeraList.map(item => item.Revenue);

            console.log(newRevenue);

            setNewRevenueList(newRevenue);

            const oldGroupYeraList = oldList.reduce((a, b) => {
                if (!a.find((item) => item.year === b.year)) {
                    a.push(b);
                }
                return a;
            }, []);

            console.log(oldGroupYeraList);
            const oldRevenue = oldGroupYeraList.map(item => item.Revenue);
            console.log(oldRevenue);
            setOldRevenueList(oldRevenue);




            newList.map((item, index) => {
               
                setRrevenueNew(revenueNew => [...revenueNew, item.Revenue]);
             
            });

            oldList.map((item, index) => {
                                 
                setRrevenueOld(revenueOld => [...revenueOld, item.Revenue]);

            });

            arr.map((item, index) => {
                console.log(item.year + " , " + item.month)
                const date1 = item.year + " , " + item.month;
                setDate(date => [...date, date1]);
                setRrevenueNew(revenueNew => [...revenueNew, item.Revenue]);
                setRrevenueOld(revenueOld => [...revenueOld, item.Revenue]);
            });

        }).catch(function (error) {

            console.log("axois error: " + error);
            setIsLoading(false);
            setInlineStyles()

        });

}

  
  
  return (
    <Container fluid className="main-content-container px-4" dir="rtl" >
      <Row className="page-header mt-2 ">
        <Col lg="12"  >
          <nav className="breadcrumb">
            <a className="breadcrumb-item" href="#">خانه</a>
            <span className="breadcrumb-item active">داشبورد شاخص های کلیدی عملکرد مشتریان</span>
          </nav>
        </Col>
      </Row>

      <CustomerActivity style={{ marginTop: "30px" }}></CustomerActivity>
      <hr />
      <CustomerKPI option={option}  isLoading={isLoading}></CustomerKPI>
      <RevenueCustomer optionRevenue={optionRevenue}  isLoading={isLoading} ></RevenueCustomer>
      <hr />
    </Container>
  )
}
