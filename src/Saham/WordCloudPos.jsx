import React from 'react'
import {
    Card,
    CardHeader,
    CardBody, Container, Col, Row
} from "shards-react";
import "../shards-dashboard/styles/slider-style.css"
import axios from 'axios'
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import Swal from 'sweetalert2';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { WordCloudNeg1 } from "./WordCloudNeg1"
export const WordCloudPos = () => {

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
                url: serverAddress + "get_topics_pos",
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

        <Container fluid className="main-content-container px-4 mt-3" dir="rtl" >
            <Row>
                <Card className="h-100">
                    <CardBody className="pt-10">
                        <Row>
                            <Col>
                                <div style={{ border: "1px solid", borderColor: "rgb(219, 222, 238)", borderRadius: "15px" }} >
                                    <CardHeader>ابر کلمات مثبت</CardHeader>
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
                            </Col>
                            <Col>
                                <WordCloudNeg1></WordCloudNeg1>
                            </Col>
                        </Row>

                    </CardBody>
                </Card>

            </Row>


        </Container >

    )
}
