import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,    
} from "shards-react";
import { Spinner } from 'react-bootstrap';
import ReactECharts from 'echarts-for-react';



export const CustomerActivity = ({ optionActivityCustomer, isLoading }) => {
    return (
        <Card small className="h-100 mb-2"  style={{width:"83%"}}>
            <CardHeader>تعداد مشتریان فعال در ماه</CardHeader>
            <CardBody className="pt-0">
                {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                    {/* <Spinner animation="border" role="status" ></Spinner> */}
                    <Spinner animation="grow color-spinner" size="sm" />
                    <Spinner animation="grow color-spinner"  />
                    <div className='text-center color-spinner loading-text' dir="rtl">در حال بارگزاری...</div>
                </div> :
                    <ReactECharts option={optionActivityCustomer} />
                }

            </CardBody>
        </Card>
    )
}
