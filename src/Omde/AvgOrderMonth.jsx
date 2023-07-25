import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Card,
  CardHeader,
  CardBody,
} from "shards-react";
import { Spinner } from 'react-bootstrap';
import ReactECharts from 'echarts-for-react';
import Loading from '../Loading';
export const AvgOrderMonth = ({ optionAvgOrderMonth, isLoading }) => {

  return (
    <Card small className="h-100" style={{width:"83%"}}>
      <CardHeader>متوسط سفارشات در سال</CardHeader>
      <CardBody className="pt-0">
        {isLoading == true ? <Loading></Loading>
        //  <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
        //   <Spinner animation="grow" size="sm"   className='color-spinner' />
        //   <Spinner animation="grow"  className='color-spinner'   />
        //   <div className='text-center color-spinner loading-text' dir="rtl">در حال بارگزاری...</div>
        // </div> 
        :
          optionAvgOrderMonth != undefined ? <ReactECharts option={optionAvgOrderMonth} /> : ''
        }
      </CardBody>
    </Card>
  )
}
