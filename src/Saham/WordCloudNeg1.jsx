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
import WordCloud from 'react-d3-cloud';


export const WordCloudNeg1 = () => {
   
    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const accessToken = localStorage.getItem("access-tocken");
    const [option, setOption] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [dataSeries, setDataSeries] = useState([]);
    const [names, setNames] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        worldCloud();
    }, []);


    useEffect(() => {
      console.log("data...");
      console.log(data);
    }, [data])
    

    const worldCloud = () => {
        axios(
            {
                url: serverAddress + "get_topics_neg",
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
                arr.map(item => {

                    setData(data => [...data, { text: item.words, value: item.weights }])
                });


                console.log("data series ...");
                console.log(dataSeries);
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
        <Card small className="h-100">
            <CardHeader>ابر کلمات منفی</CardHeader>
            <CardBody className="pt-0">
                 {
                    isLoading == true ? <Loading></Loading>:
                    <WordCloud data={data} width={200}
                    height={200}
                    font="cinema"
                    fontStyle="italic"
                    fontWeight="bold"
                    fontSize={(word) => Math.log2(word.value) * 2}
                    spiral="rectangular"
                    rotate={(word) => word.value % 360}
                    padding={5}
                    random={Math.random} />
                }                
            </CardBody>
        </Card>
    )
}
