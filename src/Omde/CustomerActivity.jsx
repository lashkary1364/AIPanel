import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
} from "shards-react";
import { Spinner } from 'react-bootstrap';
import ReactECharts from 'echarts-for-react';
import Loading from '../Loading';



export const CustomerActivity = ({ optionActivityCustomer, isLoading }) => {
    return (
        <Card small className="h-100 mb-2"  >
            <CardHeader>تعداد مشتریان فعال در ماه</CardHeader>
            <CardBody className="pt-0">
                {isLoading == true ? <Loading></Loading>
                    :
                    <ReactECharts option={optionActivityCustomer} />
                }

            </CardBody>
        </Card>
    )
}
