import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    Container, Row, Col,
    Button,
} from "shards-react";
import ReactECharts from 'echarts-for-react';
import ReactLoading from 'react-loading';


export const BarChart = () => {

    const [chartData, setChartData] = useState([]);
    const [option1, setOption1] = useState({});
    const [x, setX] = useState([]);
    const [y, setY] = useState([]);
    const [isAction, setIsAction] = useState(false);

    useEffect(() => {

        setBarChart();

    }, [x, y]);


    const getAll = () => {
        setIsAction(true);
        const accessToken = localStorage.getItem("access-tocken")
        if(accessToken!=null){
  
            const form = new FormData();

    
            form.append("asset_id", "14447");
            form.append("var_name", "bbn_sentiment");
            form.append("var_value", "positive");
            form.append("target", "rsi_change");
    
            axios(
                {
                    url: 'http://82.115.24.35:8000/bbn_query',
                    method: "post",
                    headers:
                    {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "multipart/form-data"
                    },
                    data: form
                }).then(function (response) {
    
                    console.log("response:");
                    console.log(response.data);
    
                    const resultItems = response.data;
                    console.log(resultItems.result);
                    const itemsArray = resultItems.result;
                    // console.log(itemsArray[0])
                    // JSON.parse(itemsArray);
                    // array = Object.keys(object).map(function(k) {
                    //   return object[k];
                    // });
                    const arr = JSON.parse(itemsArray)
                    console.log(arr)
    
                    arr.map((item, index) => {
                        console.log(index)
                        console.log(item)
                        setChartData(chartData => [...chartData, { "rsi_change": item.rsi_change, "p": item.p }])
                        setX(x => [...x, item.rsi_change])
                        setY(y => [...y, item.p])
                    });
        
                    console.log(x);    
                    console.log(y);  
                    
                    setIsAction(false)
    
                }).catch(function (error) {
                    // handle error
                    console.log("axois error: ");
                    console.log(error)
                    setIsAction(false)
                });
    
    
        }else{
            window.location.replace('/')
        }
       
     
    }

    const setBarChart = () => {
        setOption1({
            xAxis: {
                type: 'category',
                data: x
                //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: y,
                    // [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        });

        return option1;
    }


    return (
        <Container fluid className="main-content-container px-4" >
            <Row className="page-header mt-2 ">
                <Col lg="12" >
                    <nav className="breadcrumb">
                        <a className="breadcrumb-item" href="#">خانه</a>
                        <span className="breadcrumb-item active">مدیریت صورت هزینه ها</span>
                    </nav>
                </Col>
            </Row>

            <Col lg="12" >
                {/* <Card small className="mb-2">
            <ListGroup flush>
              <ListGroupItem > */}

                <Row>
                    <Col md="4" className="form-group">
                        <Button theme="primary" className="mb-2 mr-1" type="button" onClick={getAll} >
                            ثبت
                        </Button>
                    </Col>
                </Row>

                {isAction == true ? <ReactLoading type="bars" color="black"   /> :   <ReactECharts option={option1} />}
                
              
                
                
               
              

            </Col>
            {/* </ListGroupItem>
                        </ListGroup> */}
            {/* </Card>
                </Col>
            </Row> */}
            {/* <ReactECharts option={option1} /> */}
        </Container>

    )
}
