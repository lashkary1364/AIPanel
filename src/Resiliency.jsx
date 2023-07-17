import React from 'react'
import {
    Card,
    CardHeader,
    CardBody, Container
} from "shards-react";
import "../src/shards-dashboard/styles/slider-style.css"
import ReactECharts from 'echarts-for-react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios'
import { useEffect, useState } from 'react';
export const Resiliency = () => {

    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const accessToken = localStorage.getItem("access-tocken");
    const [option, setOption] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [dataSeries, setDataSeries] = useState([]);
    const [names, setNames] = useState([]);



    useEffect(() => {
        tabAvary();

    }, [])



    useEffect(() => {

        console.log("data series ...")
        console.log(dataSeries);

        setOption({
            title: {
                text: 'بهره وری بر اساس سال'
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
            //[
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
            //   {
            //     name: 'Video Ads',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [150, 232, 201, 154, 190, 330, 410]
            //   },
            //   {
            //     name: 'Direct',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [320, 332, 301, 334, 390, 330, 320]
            //   },
            //   {
            //     name: 'Search Engine',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [820, 932, 901, 934, 1290, 1330, 1320]
            //   }
            // ]
        });




    }, [dataSeries, names]);


    useEffect(() => {


        console.log("option ....")
        console.log(option);

    }, [option])

    const tabAvary = () => {

        console.log("tab avari ...");
        axios(
            {
                url: serverAddress + "industry_resiliency",
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

            }).catch(function (error) {

                console.log("axois error: " + error);


            });

    }

    return (
        <Container fluid className="main-content-container px-4 mt-3" dir="rtl" >
            <Card small className="h-100">
                <CardHeader>تاب آوری بر اساس سال</CardHeader>
                <CardBody className="pt-0">
                    {
                        isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                            <Spinner animation="grow" size="sm" variant="primary" />
                            <Spinner animation="grow" variant="primary" />
                            <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
                        </div> :
                            option != undefined ? <ReactECharts option={option} /> : ''
                    }
                </CardBody>
            </Card>
            

        </Container>





    )
}
