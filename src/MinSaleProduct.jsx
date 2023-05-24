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
    const [revenue, setRevenue] = useState([]);
    const [product, setProduct] = useState([]);
    const [styleVar, setStyleVar] = useState({ visibility: 'collapse', height: "1500px" });
    const [isLoading, setIsLoading] = useState(false);
    const accessToken = localStorage.getItem("access-tocken");


    useEffect(() => {

        setOption(
            {
                // title: {
                //   text: 'World Population'
                // },
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
                    data: product,//['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
                },
                series: [
                    {
                        name: 'فروش محصول',
                        type: 'bar',
                        data: revenue//[18203, 23489, 29034, 104970, 131744, 630230]
                    },

                ]
            }
        )

        console.log(option)
    }, [product, setProduct, revenue, setRevenue])



    const GetProductKpis = () => {

        setStyleVar({ visibility: 'visible', height: "4000px" });
        setIsLoading(true);

        console.log("....................");

        axios(
            {
                url: "http://82.115.24.35:8000/get_product_kpis",
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

                const sale = arr.map(item => item.Revenue);


                const avg = sale.reduce((sum, curr) => sum + Number(curr), 0) / sale.length;


                console.log("avg ....")
                console.log(avg);
                setProduct([])
                setRevenue([])





                arr.map((item) => {
                    if (item.Revenue >= avg) {
                        setProduct(product => [...product, item.ProductID]);
                        setRevenue(revenue => [...revenue, item.Revenue]);
                    }
                });

                setIsLoading(false);
                setDisabled("");

            }).catch(function (error) {

                console.log("axois error: " + error);
                setIsLoading(false);
                setInlineStyles();

            });

    }


    return (
        <Card className="h-100">
            <CardHeader>کم فروش ترین محصولات</CardHeader>
            <CardBody className="pt-0">
                <div >
                    <Button type="button" className='btn btn-secondary' disabled={disabled} onClick={GetProductKpis}>محاسبه</Button>
                    {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
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

