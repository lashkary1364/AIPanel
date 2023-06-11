import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    
} from "shards-react";
import { Spinner } from 'react-bootstrap';
import ReactECharts from 'echarts-for-react';


export const OrderValueMonth = ({option , isLoading}) => {

    return (
        <Card small className="h-100">
            <CardHeader >مقدار سفارشات در ماه </CardHeader>
            <CardBody className="pt-0">
               
                {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                    <Spinner animation="grow" size="sm" variant="primary" />
                    <Spinner animation="grow" variant="primary" />
                    <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
                </div> : <div  ><ReactECharts option={option}  /></div>
                }
            </CardBody>



        </Card>
    )
}
