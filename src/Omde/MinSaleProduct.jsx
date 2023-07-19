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

export const MinSaleProduct = ({optionMin , isLoading}) => {
    

    return (
        <Card className="h-100" style={{width:"83%"}}>
            <CardHeader>کم فروش ترین محصولات</CardHeader>
            <CardBody className="pt-0">
                <div >
                    
                    {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                        <Spinner animation="grow" size="sm" variant="primary" />
                        <Spinner animation="grow" variant="primary" />
                        <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
                    </div> :
                     optionMin!=undefined ?   <ReactECharts option={optionMin}  /> :''
                    }
                </div>


            </CardBody>
        </Card>
    )
}

