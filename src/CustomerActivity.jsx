import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card,
    CardHeader,
    CardBody,
    Button
} from "shards-react";
import { Spinner } from 'react-bootstrap';
import { setInlineStyles } from 'rsuite/esm/List/helper/utils';
import ReactECharts from 'echarts-for-react';



export const CustomerActivity = () => {
    const [disabled, setDisabled] = useState("");
    const [option, setOption] = useState({});
    const [date, setDate] = useState([]);
    const [countcustomer, setCountCustomer] = useState([]);
    const [styleVar, setStyleVar] = useState({ visibility: 'collapse' });
    const [isLoading, setIsLoading] = useState(false);
    const accessToken = localStorage.getItem("access-tocken");
    const [arrTemp, setArrTemp] = useState([]);
    const [r, setR] = useState([])



    useEffect(() => {

        console.log(date)
        console.log(countcustomer)

        setOption(
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



    const getActivityCustomer = () => {

        setStyleVar({ visibility: 'visible' });
        setIsLoading(true);

        console.log("....................");

        axios(
            {
                url: "http://82.115.24.35:8000/get_transaction_kpis",
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
                setDate([])
                setCountCustomer([])
                
                arr.map((item, index) => {
                   console.log(item.year+" , "+item.month)
                   const date1=item.year+" , "+item.month;
                    setDate(date => [...date, date1]);
                    setCountCustomer(countcustomer => [...countcustomer, item.active_customers]);

                });

                setIsLoading(false);
                setDisabled("");


                // let count = 1;
                // const mmm = arr.reduce((a, b) => {

                //     if (!(a.find((item) => (item.year === b.year) && (item.month === b.month)))) {
                //         a.push({ "Unnamed": count++, "year": b.year, "month": b.month, "customer_type": b.customer_type, "Revenue": b.Revenue })

                //         console.log(count);
                //         setArrTemp(arrTemp => [...arrTemp, { count: count, date: b.year + " , " + b.month }])
                //     }
                //     return a;
                // }, []);



            }).catch(function (error) {

                console.log("axois error: " + error);
                setIsLoading(false);
                setInlineStyles()

            });

    }

    return (
        <Card small className="h-100">
            <CardHeader>مشتریان فعال</CardHeader>
            <CardBody className="pt-0">
                <Button type="button" className='btn btn-secondary' disabled={disabled} onClick={getActivityCustomer}>محاسبه</Button>

                {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                    {/* <Spinner animation="border" role="status" ></Spinner> */}
                    <Spinner animation="grow" size="sm" variant="primary" />
                    <Spinner animation="grow" variant="primary" />
                    <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
                </div> :
                    <ReactECharts option={option} style={styleVar} />
                }

            </CardBody>
        </Card>
    )
}
