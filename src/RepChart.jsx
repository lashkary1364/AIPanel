import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Badge, ListGroup, ListGroupItem, Progress,
    Button
} from "shards-react";
import ReactSlider from "react-slider";
import "../src/shards-dashboard/styles/slider-style.css"
import ReactECharts from 'echarts-for-react';
import { useEffect } from 'react';
import { useState } from 'react';
export const RepChart = () => {

    const [sliderValue, setSliderValue] = useState(0);


    //chart 1
    //   const option = {
    //     xAxis: {
    //       type: 'category',
    //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //     },
    //     yAxis: {
    //       type: 'value'
    //     },
    //     series: [
    //       {
    //         data: [120, 200, 150, 80, 70, 110, 130],
    //         type: 'bar'
    //       }
    //     ]
    //   }; 

    // useEffect(() => {

    //     GetAll();


    //   }, []);

    useEffect(() => {
        // const timer = setTimeout(() => {
        //   console.log('This will run after 1 second!')
        // }, 1000);
        // return () => clearTimeout(timer);

        setTimeout(function () {
            run();
        }, 0);

        setInterval(function () {
            run();

            console.log("after 3000")
        }, 3000);

    }, [sliderValue]);

    useEffect(() => {

        run();
        // setInterval(function () {


        //     console.log("after 3000")
        // }, 3000);

    }, []);



    const data = [];

    for (let i = 0; i < 5; ++i) {
        data.push(Math.round(Math.random() * 200));
    }

    const option = {
        xAxis: {
            max: 'dataMax'
        },
        yAxis: {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E'],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 2 // only the largest 3 bars will be displayed
        },
        series: [
            {
                realtimeSort: true,
                name: 'X',
                type: 'bar',
                data: data,
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                }
            }
        ],
        legend: {
            show: true
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };
    // const myChart = echarts.init(chartDom);
    function run() {

        for (var i = 0; i < data.length; ++i) {
            if (Math.random() > 0.9) {
                data[i] += Math.round(Math.random() * 2000);
            } else {
                data[i] += Math.round(Math.random() * 200);
            }
        }

        // myChart.setOption({
        //     series: [
        //         {
        //             type: 'bar',
        //             data
        //         }
        //     ]
        // });
    }


    const optionGauage = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                name: 'Pressure',
                type: 'gauge',
                progress: {
                    show: true
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value}'
                },
                data: [
                    {
                        value: 50,
                        name: 'SCORE'
                    }
                ]
            }
        ]
    };

    return (

        <Container fluid className="main-content-container px-4" dir="rtl" >
            <Row className="page-header mt-2 ">
                <Col lg="12"  >
                    <nav className="breadcrumb">
                        <a className="breadcrumb-item" href="#">خانه</a>
                        <span className="breadcrumb-item active">نمودارهای داشبورد و واتیف</span>
                    </nav>
                </Col>
            </Row>
            <Card small className="h-100">
                <CardBody className="pt-0">
                    {/* <ListGroup flush>
                            <ListGroupItem> */}
                    <Row>
                        <Col lg="6">
                            <ReactECharts id="" option={option} />
                        </Col>
                        <Col lg="6">
                            <ReactSlider min={0} max={3}
                                className="horizontal-slider"
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                                renderThumb={(props, state) => <div {...props}>{setSliderValue(state.valueNow)}</div>}
                            />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg="6">
                            <ReactECharts id="" option={optionGauage} />
                        </Col>
                        <Col lg="6">
                            <textarea type="text" className='form-control' placeholder="متن خبری" row='10' />


                        </Col>
                    </Row>
                    {/* </ListGroupItem>
                        </ListGroup> */}
                </CardBody>
            </Card>





        </Container>

        // <div class="container" >
        //     <h2>Card Header and Footer</h2>
        //     <div class="card" >
        //         <div class="card-header">Header</div>
        //         <div class="card-body"> <Row>
        //             <div class="col-md-6" style={{maxHeight:"600px"}}>
        //                 <ReactECharts id="" option={option} />
        //             </div>
        //             <div class="col-md-6">
        //                 <ReactSlider min={0} max={3}
        //                     className="horizontal-slider"
        //                     thumbClassName="example-thumb"
        //                     trackClassName="example-track"
        //                     renderThumb={(props, state) => <div {...props}>{setSliderValue(state.valueNow)}</div>}
        //                 />
        //             </div>
        //         </Row></div>
        //         <div class="card-footer">Footer</div>
        //     </div>
        // </div>


    )
}
