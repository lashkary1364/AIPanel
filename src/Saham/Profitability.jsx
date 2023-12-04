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
import Swal from 'sweetalert2'


export const Profitability = () => {

    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const accessToken = localStorage.getItem("access-tocken");
    const [option, setOption] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [dataSeries, setDataSeries] = useState([]);
    const [names, setNames] = useState([]);

    useEffect(() => {

        tabavari();
    }, []);

    useEffect(() => {


        setOption({
            textStyle: {
                fontFamily: 'b yekan',
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight: 'bold'
            },
            // title: {
            //     text: 'تاب آوری بر اساس سال'
            // },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: names//['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
                data: ['y1395', 'y1396', 'y1397', 'y1398', 'y1399', 'y1400']
            },
            yAxis: {
                type: 'value'
            },
            series: dataSeries

        });




    }, [dataSeries, names]);




    const tabavari = () => {


        axios(
            {
                url: serverAddress + "industry_productivity",
                method: "get",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(function (response) {

                const resultItems = response.data;

                const itemsArray = resultItems.result;


                const arr = JSON.parse(itemsArray);
                // console.log(arr);
                // console.log(arr[0].name);

                arr.map(item => {
                    var temp = [];
                    setNames(names => [...names, item.name]);
                    temp.push(item.y1395);
                    temp.push(item.y1396);
                    temp.push(item.y1397);
                    temp.push(item.y1398);
                    temp.push(item.y1399);
                    temp.push(item.y1400);
                    var obj = { "name": item.name, "type": "line", "stack": "Total", "data": temp }
                    // console.log(obj);
                    setDataSeries(dataSeries => [...dataSeries, obj])
                    // console.log("data series ...")
                    // console.log(dataSeries);
                    temp = [];
                });

                setIsLoading(false);
                // console.log("data series ...");
                // console.log(dataSeries);

            }).catch(function (error) {


                setIsLoading(false);

                Swal.fire(
                    'خطا',
                    error.message,
                    'error');

            });

    }

    return (

        <Card small className="h-100" >
            <CardHeader> سودآوری بر اساس سال</CardHeader>
            <CardBody className="pt-0">
                {
                    isLoading == true ? <Loading></Loading>
                        :
                        option != undefined ? <ReactECharts
                            // style={{
                            //     animation: "mymove infinite",
                            //     animationDuration: "3s"
                            // }}
                            option={option} /> : ''
                }

            </CardBody>
        </Card>

    )
}

