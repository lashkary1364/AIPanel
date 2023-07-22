import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,

} from "shards-react";
import { Spinner } from 'react-bootstrap';
import ReactECharts from 'echarts-for-react';

export const GrowthMonth = ({ optionGrowthMonth, isLoading }) => {

    return (
        <Card className="h-100" style={{width:"83%"}}>
            <CardHeader>رشد سالانه</CardHeader>
            <CardBody className="pt-0" >
                <div >
                    {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                        <Spinner animation="grow" size="sm"  className='color-spinner'  />
                        <Spinner animation="grow"   className='color-spinner' />
                        <div className='text-center color-spinner loading-text' dir="rtl">در حال بارگزاری...</div>
                    </div> :
                        optionGrowthMonth != undefined ? <ReactECharts option={optionGrowthMonth}  /> : ''
                    }
                </div>
            </CardBody>
        </Card>
    )
}

