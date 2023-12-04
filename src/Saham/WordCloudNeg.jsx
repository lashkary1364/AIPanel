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
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

export const WordCloudNeg = () => {
    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const accessToken = localStorage.getItem("access-tocken");
    const [option, setOption] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [dataSeries, setDataSeries] = useState([]);
    const [names, setNames] = useState([]);
    const [words, setWords] = useState([]);

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
                // console.log(resultItems);
                const itemsArray = resultItems.result;
                // console.log("itemsArray");
                // console.log(itemsArray);

                const arr = JSON.parse(itemsArray);
                // console.log(arr);
                // arr.map(item => {

                //     setWords(words => [...words, { text: item.words, value: item.weights }])
                // });


                // console.log("data series ...");
                // console.log(dataSeries);
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

    //   const callbacks = {
    //     getWordColor: word => word.value > 50 ? "blue" : "red",
    //     onWordClick: console.log,
    //     onWordMouseOver: console.log,
    //     getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
    //   }
    const options = {
        rotations: 2,
        fontFamily: "cinema",
        rotationAngles: [-90, 0],
    };
    const size = [600, 400];
    const fontSizes = [400, 350];
    return (
        // <Container fluid className="main-content-container px-4 mt-3" dir="rtl" >
        <Card small className="h-100">
            <CardHeader>ابر کلمات منفی</CardHeader>
            <CardBody className="pt-0">
                {/* {
                isLoading == true ? <Loading></Loading>                  
                :  option != undefined ? <ReactECharts option={option} /> : ''
            } */}
                {/* <div>
                        <ReactWordcloud words={words}
                            options={options}
                            size={size} 
                            fontSizes={fontSizes}
                            />
                    </div> */}
            </CardBody>
        </Card>
        // </Container>
    )
}
