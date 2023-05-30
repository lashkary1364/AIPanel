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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, } from '@fortawesome/free-solid-svg-icons';
import ReactECharts from 'echarts-for-react';


export const OrderValueMonth = () => {

    const [disabled, setDisabled] = useState("");
    const [option, setOption] = useState({});
    const [order, setOrder] = useState([]);
    const [date, setDate] = useState([]);
    const [styleVar, setStyleVar] = useState({ visibility: 'collapse', height: "0px" });
    const [isLoading, setIsLoading] = useState(false);
    const accessToken = localStorage.getItem("access-tocken");
    const [toggleChart, setToggleChart] = useState(true)
    const [divChart, setDivChart] = useState({ border: "0px" })
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




    const getGrowth = () => {


        setDivChart({ border: "2px solid ", color: "#9b9797" , borderRadius:"10px", marginTop: "8px" });

        // if (toggleChart == false) {
        setStyleVar({ visibility: 'visible', height: "600px" });

        // }
        // else {
        //     setStyleVar({ visibility: 'collapse', height: "0px" });

        // }


        // setStyleVar({ visibility: 'visible', height: "600px", border: "1px solid", marginTop: "8px" });
        setIsLoading(true);

        console.log("....................");

        axios(
            {
                url: "http://82.115.24.35:8001/get_transaction_kpis",
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
                setOrder([])

                arr.map((item) => {
                    console.log(item.year + " , " + item.month)
                    const date1 = item.year + " , " + item.month;
                    setDate(date => [...date, date1]);
                    if (item.monthly_order_count == null) {
                        console.log("null")

                    } else {
                        setOrder(order => [...order, item.monthly_order_count])
                    }

                });

                setIsLoading(false);
                setDisabled("");

            }).catch(function (error) {

                console.log("axois error: " + error);
                setIsLoading(false);
                setInlineStyles()
                sessionStorage.clear();
                localStorage.clear();
                window.location.replace('/login');
            });
        setToggleChart(false)

    }

    const closeChart = () => {
        if (toggleChart == false) {
            setStyleVar({ visibility: 'visible', height: "600px" });
            setToggleChart(true)
        }
        else {
            setStyleVar({ visibility: 'collapse', height: "0px" });
            setToggleChart(false)
        }

    }


    return (
        <Card small className="h-100">
            <CardHeader >مقدار سفارشات در ماه </CardHeader>
            <CardBody className="pt-0">
                <Button type="button" className='btn btn-secondary' disabled={disabled} onClick={getGrowth}>محاسبه</Button>

                {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                    <Spinner animation="grow" size="sm" variant="primary" />
                    <Spinner animation="grow" variant="primary" />
                    <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
                </div> : <div style={divChart}  ><ReactECharts option={option} style={styleVar} /></div>

                }
            </CardBody>



        </Card>
    )
}
