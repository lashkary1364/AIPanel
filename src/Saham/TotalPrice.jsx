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
import Loading from '../Loading';
import Swal from 'sweetalert2';
import { DateTimePicker } from '@mui/lab';

export const TotalPrice = () => {

    const accessToken = localStorage.getItem("access-tocken");
    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const [option, setOption] = useState();
    const [value, setValue] = useState([]);
    const [date, setDate] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getTotalPrice();
    }, []);

    useEffect(() => {
        console.log("value")
        console.log(value)
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

                    data: value,
                    type: 'line'
                }
            ]
        });

    }, [date, value]);



    const getTotalPrice = () => {

        // console.log("tahlile geymat ...");
        axios(
            {
                url: serverAddress + "get_total_price",
                method: "get",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(function (response) {
                // console.log("get total price ....")
                const resultItems = response.data;
                // console.log(resultItems);
                const itemsArray = resultItems.result;
                // console.log("itemsArray");
                // console.log(itemsArray);
                const arr = JSON.parse(itemsArray);
                // console.log(arr);
                // arr.sort((a, b) => a.date - b.date);
                // const copyArray = [...arr];
                // copyArray.sort((a, b) => {
                //     return a.date - b.date;
                // });
                setDate([]);
                setValue([]);

                const dataTemp = [];
                arr.map((item) => {
                    console.log(item.date)
                    setDate(date => [...date, item.date]);

                    //dataTemp.push(item.date);
                    setValue(value => [...value, (item.value)]);

                });

                //dataTemp.sort((a, b) => b - a);

                // setDate(...dataTemp);

                setIsLoading(false);

            }).catch(function (error) {

                setIsLoading(false);
                // console.log("axois error: " + error);
                Swal.fire(
                    'خطا',
                    error.message,
                    'error');
            });

    }


    return (
        <>
            <Card small className="h-100" >
                <CardHeader>تحلیل قیمت شاخص کل</CardHeader>
                <CardBody className="pt-0">
                    {
                        isLoading == true ? <Loading></Loading>
                            :
                            option != undefined ? <ReactECharts option={option} /> : ''
                    }
                </CardBody>
            </Card>
        </>

    )
}
