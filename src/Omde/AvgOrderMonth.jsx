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
export const AvgOrderMonth = ({ optionAvgOrderMonth, isLoading }) => {

  return (
    <Card small className="h-100" style={{width:"83%"}}>
      <CardHeader>متوسط سفارشات در ماه</CardHeader>
      <CardBody className="pt-0">
        {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
          <Spinner animation="grow" size="sm" variant="primary" />
          <Spinner animation="grow" variant="primary" />
          <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
        </div> :
          optionAvgOrderMonth != undefined ? <ReactECharts option={optionAvgOrderMonth} /> : ''
        }
      </CardBody>
    </Card>
  )
}
