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
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
// import WordCloud from 'react-d3-cloud';
// import "tippy.js/dist/tippy.css";
// import "tippy.js/animations/scale.css";
// import { scaleOrdinal } from 'd3-scale';
// import { schemeCategory10 } from 'd3-scale-chromatic';
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
                // console.log("itemsArray");
                // console.log(itemsArray);

                const arr = JSON.parse(itemsArray);
                // console.log(arr);
                arr.map(item => {
                    setData(data => [...data, { text: item.words, value: item.weights * 10000 }])
                });

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

    // const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

    return (

        <Container fluid className="main-content-container px-4 mt-3" dir="rtl" >

            <Card className="h-100">
                <CardBody className="pt-10">
                    <Row>
                        <Col md="6">
                            <div style={{ height: 700, border: "1px solid", borderColor: "rgb(219, 222, 238)", borderRadius: "15px" }} >
                                <CardHeader>ابر کلمات مثبت</CardHeader>
                                {
                                    isLoading == true ? <Loading></Loading> :
                                        // <WordCloud data={data} width={500}
                                        //     height={400}
                                        //     font="tahoma"
                                        //     fontSize={(word) => Math.log2(word.value) * 5}
                                        //     spiral="rectangular"
                                        //     rotate={(word) => word.value % 360}
                                        //     padding={5}
                                        //     random={Math.random}
                                        //     fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
                                        // />
                                        <ReactWordcloud
                                            words={data}
                                            padding={5}
                                            // spiral="rectangular"
                                            // rotate={(word) => word.value % 360}

                                            options={{
                                                fontSizes: [10, 100],
                                                fontFamily: "tahoma",
                                                // rotations: 0,
                                                rotations: 0,
                                                rotationAngles: [-90, 0],
                                                enableOptimizations: true
                                            }}
                                        />
                                }
                            </div>
                        </Col>
                        <Col md="6">
                            <WordCloudNeg1></WordCloudNeg1>
                        </Col>
                    </Row>

                </CardBody>
            </Card>




        </Container >

    )
}



// import React from "react";
// import ReactDOM from "react-dom";
// import ReactWordcloud from "react-wordcloud";
// import "tippy.js/dist/tippy.css";
// import "tippy.js/animations/scale.css";
// import {
//     Card,
//     CardHeader,
//     CardBody, Container, Col, Row
// } from "shards-react";
// import words from "./words";

// export const WordCloudPos = () => {

//     const word2 = words.map((d) => ({
//         text: d.Text,
//         value: d.Value
//     }));
//     return (
//         <Container fluid className="main-content-container px-4 mt-3" dir="rtl" >
//             <Row>
//                 <Card className="h-100">
//                     <CardBody className="pt-10"></CardBody>
//                     <div style={{ height: 800, width: 800 }}>
//                         <ReactWordcloud
//                             words={word2}
//                             options={{
//                                 fontSizes: [10, 50],
//                                 rotations: 0,
//                                 enableOptimizations: true
//                             }}
//                         />
//                     </div>
//                 </Card>
//             </Row>
//         </Container>

//     );
// }


