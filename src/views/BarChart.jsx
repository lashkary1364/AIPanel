import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    Container, Row, Col,
    Button, FormSelect, Card
} from "shards-react";
import ReactECharts from 'echarts-for-react';
import ReactLoading from 'react-loading';
import { ChangeHistory } from '@material-ui/icons';


export const BarChart = () => {

    const [chartData, setChartData] = useState([]);
    const [option1, setOption1] = useState({});
    const [x, setX] = useState([]);
    const [y, setY] = useState([]);
    const [isLoadingVisible, setIsLoadingVisible] = useState(false);
    const [isChartVisible, setIsChartVisible] = useState(false);
    const [valueItems, setValueItems] = useState([]);
    const [analytic, setAnalytic] = useState();


    useEffect(() => {
        setBarChart();
    }, [x, y]);




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

    const changeAnalytics = (value) => {
        setIsChartVisible(false)
        setX("")
        setY("")

        
        setAnalytic(value);
        console.log("changeAnalytics")
        console.log(value)

        switch (value) {
            case 'bbn_bandwagen':
                setValueItems([{ "name": "بلی", "value": "positive" }, { "name": "خیر", "value": "negative" }]);
                return valueItems;
            case 'bbn_total_index':
                setValueItems([{ "name": "مثبت", "value": "positive" }, { "name": "منفی", "value": "negative" }, { "name": "خنثی", "value": "neutral" }]);
                return valueItems;
            case 'bbn_attitude':
                setValueItems([{ "name": "مثبت", "value": "positive" }, { "name": "منفی", "value": "negative" }, { "name": "خنثی", "value": "neutral" }]);
                return valueItems;
            case 'bbn_news':
                setValueItems([{ "name": "مثبت", "value": "positive" }, { "name": "منفی", "value": "negative" }, { "name": "خنثی", "value": "neutral" }]);
                return valueItems;
            case 'bbn_mode':
                setValueItems([{ "name": "پشیمان", "value": "regret" }, { "name": "صبر", "value": "patient" }, { "name": "خسته", "value": "bored" }, { "name": "خنثی", "value": "neutral" }]);
                return valueItems;
            case 'bbn_decision':
                setValueItems([{ "name": "خرید", "value": "buy" }, { "name": "فروش", "value": "sale" }, { "name": "خنثی", "value": "neutral" }]);
                return valueItems;
            case 'bbn_sentiment':
                setValueItems([{ "name": "مثبت", "value": "positive" }, { "name": "منفی", "value": "negative" }, { "name": "خنثی", "value": "neutral" }]);
                return valueItems;
            default:
                setValueItems([{ "name": "مثبت", "value": "positive" }, { "name": "منفی", "value": "negative" }, { "name": "خنثی", "value": "neutral" }]);
                return valueItems;
        }
    }

    const changeValue = (e) => {
        console.log("analytic")
        console.log(analytic)

        console.log("value")
        console.log(e)

        console.log(localStorage.getItem("access-tocken"))
       
        setIsLoadingVisible(true);
        const accessToken = localStorage.getItem("access-tocken")

        if (accessToken != null) {

            const form = new FormData();

            form.append("asset_id", "14447");
            form.append("var_name", analytic);
            form.append("var_value", e);
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

                    setIsLoadingVisible(false)
                    setIsChartVisible(true)
                }).catch(function (error) {
                    if (error.response) {
                        // ✅ log status code here
                        if (error.response.status == 401)
                            window.location.replace('/')

                        console.log(error.response.status);
                        console.log(error.message);
                        console.log(error.response.headers); // 👉️ {... response headers here}
                        console.log(error.response.data); // 👉️ {... response data here}
                    }


                    //window.location.replace('/')

                    //"401 Unauthorized"
                    // handle error
                    console.log("axois error: ");
                    console.log(error)
                    setIsLoadingVisible(false)
                    setIsChartVisible(true)
                });


        } else {
            window.location.replace('/')
        }

    }

    return (
        <Container fluid className="main-content-container px-4" dir="rtl" >
            <Row className="page-header mt-2 ">
                <Col lg="12" >
                    <nav className="breadcrumb">
                        <a className="breadcrumb-item" href="#">خانه</a>
                        <span className="breadcrumb-item active"> واتیف </span>
                    </nav>
                </Col>
            </Row>

            <Card small className="mb-2">
                <Row>
                    <Col md="4" className="form-group">
                        <label htmlFor="tankhah" className='ml-3' > نوع تحلیل:</label>
                        <FormSelect className='form-control ml-3' onChange={(e) => changeAnalytics(e.target.value)} >
                            <option value="">یک موردانتخاب کنید</option>
                            <option value="bbn_bandwagen">رفتار توده ای</option>
                            <option value="bbn_total_index">شاخص کل</option>
                            <option value="bbn_attitude">نگرش</option>
                            <option value="bbn_news">اخبار</option>
                            <option value="bbn_mode">حالت</option>
                            <option value="bbn_decision">تصمیم</option>
                            <option value="bbn_sentiment">احساسات</option>
                        </FormSelect>
                    </Col>
                    <Col md="4" className="form-group">
                        <label htmlFor="tankhah" > مقدار:</label>
                        <FormSelect className='form-control' onChange={(e) => changeValue(e.target.value)} >
                            <option value={""}>یک موردانتخاب کنید</option>
                            {
                                valueItems.map((item, index) => (
                                    <option key={index}
                                        value={item.value}>
                                        {item.name}
                                    </option>
                                ))
                            }
                        </FormSelect>
                    </Col>
                </Row>

            </Card>

            {/* <ReactLoading type="bars" color="black" width={'5%'} height={'5%'} /> */}
            <Card small className="mb-2">
                {isLoadingVisible == true ? <ReactLoading type="bars" color="black" /> : ''}
                {isChartVisible == true ? <ReactECharts option={option1}></ReactECharts> : ''}
                {/* <Row>
                    <div style={{  height: "200px",  display:"flex", alignItems: "center", justifyContent: "center"}} /> 
                </Row> */}
            </Card>

            {/* {isAction == true ? <ReactLoading type="bars" color="black" /> : <ReactECharts option={option1} />} */}

            {/* </ListGroupItem>
                        </ListGroup> */}
            {/* </Card>
                </Col>
            </Row> */}
            {/* <ReactECharts option={option1} /> */}
        </Container>

    )
}
