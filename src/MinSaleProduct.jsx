import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card,
    CardHeader,
    CardBody,
    Button
} from "shards-react";
import { Spinner } from 'react-bootstrap';
import { setInlineStyles } from 'rsuite/esm/List/helper/utils';
import ReactECharts from 'echarts-for-react';

export const MinSaleProduct = () => {
    const [disabled, setDisabled] = useState("");
    const [option, setOption] = useState({});
    const [growth, setGrowth] = useState([]);
    const [date, setDate] = useState([]);
    const [styleVar, setStyleVar] = useState({ visibility: 'collapse' ,height:"1500px" });
    const [isLoading, setIsLoading] = useState(false);
    const accessToken = localStorage.getItem("access-tocken");

    const labelRight = {
        position: 'right'
    };

    useEffect(() => {

        setOption(
            {
                title: {
                  text: 'World Population'
                },
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'shadow'
                  }
                },
                legend: {},
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                xAxis: {
                  type: 'value',
                  boundaryGap: [0, 0.01]
                },
                yAxis: {
                  type: 'category',
                  data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
                },
                series: [
                  {
                    name: '2011',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                  },
                  
                ]
              }
        )

        console.log(option)
    }, [date, setDate, growth, setGrowth])



    const getGrowth = () => {

        setStyleVar({ visibility: 'visible',height:"1500px" });
        setIsLoading(true);

        console.log("....................");

        axios(
            {
                url: "http://82.115.24.35:8000/get_transaction_kpis",
                method: "get",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(function (response) {

                const resultItems = response.data;
                const itemsArray = resultItems.result;
                console.log("itemsArray");
                console.log(itemsArray);
                const arr = JSON.parse(itemsArray);
                console.log(arr);
                setDate([])
                setGrowth([])

                arr.map((item) => {
                    console.log(item.year + " , " + item.month)
                    const date1 = item.year + " , " + item.month;
                    setDate(date => [...date, date1]);
                    if (item.monthly_growth == null) {
                        console.log("null")

                    } else {
                        if (item.monthly_growth < 0) {
                            setGrowth(growth => [...growth, { value: item.monthly_growth, label: labelRight }])
                        } else {
                            setGrowth(growth => [...growth, item.monthly_growth])
                        }

                        // { value: -0.07, label: labelRight }

                    }

                });

                setIsLoading(false);
                setDisabled("");

            }).catch(function (error) {

                console.log("axois error: " + error);
                setIsLoading(false);
                setInlineStyles()

            });

    }


    return (
        <Card  className="h-100">
                <CardHeader>کم فروش ترین محصولات</CardHeader>
                <CardBody className="pt-0">
        <div >
            <Button type="button" className='btn btn-secondary' disabled={disabled} onClick={getGrowth}>محاسبه</Button>

            {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                {/* <Spinner animation="border" role="status" ></Spinner> */}
                <Spinner animation="grow" size="sm" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
            </div> :
                <ReactECharts option={option} style={styleVar} />
            }
        </div>


           </CardBody>
         </Card> 
    )
}

