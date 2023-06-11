import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button
} from "shards-react";
import axios from 'axios'
import "../src/shards-dashboard/styles/slider-style.css"
import { useEffect } from 'react';
import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Flag } from '@material-ui/icons';
import { Spinner } from 'react-bootstrap';
import { setInlineStyles } from 'rsuite/esm/List/helper/utils';


export const CustomerKPI = ({option,isLoading}) => {

    // const accessToken = localStorage.getItem("access-tocken");
    // const [yearList, setYearList] = useState([]);
    // const [oldRevenueList, setOldRevenueList] = useState([]);
    // const [newRevenueList, setNewRevenueList] = useState([]);
    // const [option, setOption] = useState({});
    // const [isLoading, setIsLoading] = useState(false);
    // const [styleVar, setStyleVar] = useState({ visibility: 'collapse' });
    // const [divChart, setDivChart] = useState({ border: "0px" })
    
    // useEffect(() => {


    //     setOption({
    //         tooltip: {
    //             trigger: 'axis',
    //             axisPointer: {
    //                 // Use axis to trigger tooltip
    //                 type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    //             }
    //         },
    //         legend: {},
    //         grid: {
    //             left: '3%',
    //             right: '4%',
    //             bottom: '3%',
    //             containLabel: true
    //         },
    //         xAxis: {
    //             type: 'value'
    //         },
    //         yAxis: {
    //             type: 'category',
    //             data: yearList  // ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
    //         },
    //         series: [
    //             {
    //                 color: "red",
    //                 name: 'مشتریان جدید',
    //                 type: 'bar',
    //                 stack: 'total',
    //                 label:
    //                 {
    //                     show: false
    //                 },
    //                 emphasis: {
    //                     focus: 'series'
    //                 },
    //                 data: newRevenueList//[320, 302, 301, 334, 390, 330, 320]
    //             },
    //             {
    //                 color: "green",
    //                 name: 'مشتریان قدیمی',
    //                 type: 'bar',
    //                 stack: 'total',
    //                 label:
    //                 {
    //                     show: false
    //                 },
    //                 emphasis: {
    //                     focus: 'series'
    //                 },
    //                 data: oldRevenueList //[120, 132, 101, 134, 90, 230, 210]
    //             },

    //         ]
    //     })

    //     setIsLoading(false);
    // }, [yearList, oldRevenueList, newRevenueList]);

    // const getTransactionCustomerKPI = () => {

    //     setDivChart({ border: "2px solid ", color: "#9b9797" , borderRadius:"10px", marginTop: "8px" });
    //     setStyleVar({ visibility: 'visible' });
    //     setIsLoading(true);
    //     console.log("....................");

    //     axios(
    //         {
    //             url: "http://82.115.24.35:8001/get_customer_kpis",
    //             method: "get",
    //             headers:
    //             {
    //                 Authorization: `Bearer ${accessToken}`,
    //             },
    //         }).then(function (response) {

    //             const resultItems = response.data;
    //             const itemsArray = resultItems.result;
    //             console.log("itemsArray");
    //             console.log(itemsArray);
    //             const arr = JSON.parse(itemsArray);
    //             console.log(arr);
    //             const newList = arr.filter(employee => {
    //                 return (
    //                     employee.customer_type == "new"
    //                 );
    //             });

    //             const oldList = arr.filter(employee => {
    //                 return (
    //                     employee.customer_type == "old"
    //                 );
    //             });

    //             const newGroupYeraList = newList.reduce((a, b) => {
    //                 if (!a.find((item) => item.year === b.year)) {
    //                     a.push(b);
    //                 }
    //                 return a;
    //             }, []);


    //             console.log(newGroupYeraList);

    //             console.log(newGroupYeraList.map(item => item.year));

    //             setYearList(newGroupYeraList.map(item => item.year));

    //             const newRevenue = newGroupYeraList.map(item => item.Revenue);

    //             console.log(newRevenue);

    //             setNewRevenueList(newRevenue);

    //             const oldGroupYeraList = oldList.reduce((a, b) => {
    //                 if (!a.find((item) => item.year === b.year)) {
    //                     a.push(b);
    //                 }
    //                 return a;
    //             }, []);

    //             console.log(oldGroupYeraList);
    //             const oldRevenue = oldGroupYeraList.map(item => item.Revenue);
    //             console.log(oldRevenue);
    //             setOldRevenueList(oldRevenue);

    //         }).catch(function (error) {

    //             console.log("axois error: " + error);
    //             setIsLoading(false);
    //             setInlineStyles()

    //         });

    // }

    return (


        <Card small className="h-100">
            <CardHeader>فروش محصول به تفکیک مشتریان جدید و قدیم به تفکیک سال</CardHeader>
            <CardBody className="pt-0">
             
                {
                    isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                        <Spinner animation="grow" size="sm" variant="primary" />
                        <Spinner animation="grow" variant="primary" />
                        <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
                    </div> :
                       option !=undefined ? <ReactECharts option={option}  /> :'' 
                }


            </CardBody>
        </Card>

    )
}
