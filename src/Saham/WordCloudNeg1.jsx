import React from 'react'
import {
    Card, Col,
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
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

export const WordCloudNeg1 = () => {

    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const accessToken = localStorage.getItem("access-tocken");
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        worldCloud();
    }, []);





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
                const arr = JSON.parse(itemsArray);
                arr.map(item => {

                    setData(data => [...data, { text: item.words, value: item.weights }])
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
    const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);
    return (

        <div style={{ border: "1px solid", borderColor: "rgb(219, 222, 238)", borderRadius: "15px" }} >
            <CardHeader>ابر کلمات منفی</CardHeader>
            {

                isLoading == true ? <Loading></Loading> :
                    <WordCloud data={data} width={500}
                        height={400}
                        font="tahoma"
                        fontSize={(word) => Math.log2(word.value) * 5}
                        spiral="rectangular"
                        rotate={(word) => word.value % 360}
                        padding={5}
                        random={Math.random}
                        fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
                    />
            }
        </div>









    )
}
