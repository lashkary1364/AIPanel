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

export const SoodavariSal = () => {
 
    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const accessToken = localStorage.getItem("access-tocken");
    const [option, setOption] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [dataSeries, setDataSeries] = useState([]);
    const [names, setNames] = useState([]);

    useEffect(() => {
        naghdineghi();
    }, []);

    useEffect(() => {

        console.log("data series ...")
        console.log(dataSeries);

        setOption({
            title: {
                text: 'پرداخت دیون  بر اساس سال'
            },
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

    useEffect(() => {

        console.log("option ....")
        console.log(option);

    }, [option])

    const naghdineghi = () => {

        console.log("tab avari ...");
        axios(
            {
                url: serverAddress + "industry_solvency",
                method: "get",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(function (response) {

                const resultItems = response.data;
                console.log(resultItems);
                const itemsArray = resultItems.result;
                console.log("itemsArray");
                console.log(itemsArray);

                const arr = JSON.parse(itemsArray);
                console.log(arr);
                console.log(arr[0].name);
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
                    console.log(obj);
                    setDataSeries(dataSeries => [...dataSeries, obj])
                    console.log("data series ...")
                    console.log(dataSeries);
                    temp = [];
                });


                console.log("data series ...");
                console.log(dataSeries);
                setIsLoading(false);
            }).catch(function (error) {
                setIsLoading(false);
                Swal.fire(
                    'خطا',
                    error.message,
                    'error' );
                console.log("axois error: " + error);

            });

    }


    return (
        <Card small className="h-100" >
            <CardHeader> پرداخت دیون بر اساس سال</CardHeader>
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
