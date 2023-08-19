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

export const StockPrice = () => {
    const accessToken = localStorage.getItem("access-tocken");
    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const [option, setOption] = useState();
    const [lastPrice, setLastPrice] = useState([]);
    const [date, setDate] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getStockPrice();
    }, []);

    useEffect(() => {

        console.log("data series ...")
        console.log(date);
        console.log(lastPrice);


        setOption({
            textStyle: {
                fontFamily: 'b yekan',
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight: 'bold'
            },
            xAxis: {
                type: 'category',
                data: date
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: lastPrice,
                    type: 'line'
                }
            ]
        });

    }, [date, lastPrice]);

    useEffect(() => {

        console.log("option ....")
        console.log(option);

    }, [option])

    const getStockPrice = () => {

        console.log("tahlile  zar ...");
        axios(
            {
                url: serverAddress + "get_stock_price",
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
                setLastPrice([]);


                arr.map((item) => {

                    setDate(date => [...date, item.date]);
                    setLastPrice(lastPrice => [...lastPrice, item.last_price]);

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
        <Card small className="h-100 mt-20" >
            <CardHeader>تحلیل قیمت زر</CardHeader>
            <CardBody className="pt-0">
                {
                    isLoading == true ? <Loading></Loading>
                        // <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                        //     <Spinner animation="grow" size="sm" variant="primary" />
                        //     <Spinner animation="grow" variant="primary" />
                        //     <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
                        // </div>
                        :
                        option != undefined ? <ReactECharts option={option} /> : ''
                }

            </CardBody>
        </Card>
    )
}
