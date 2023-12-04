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
    <Card small className="h-100" >
      <CardHeader>متوسط سفارشات در سال</CardHeader>
      <CardBody className="pt-0">
        {isLoading == true ? <Loading></Loading>

          :
          optionAvgOrderMonth != undefined ? <ReactECharts option={optionAvgOrderMonth} /> : ''
        }
      </CardBody>
    </Card>
  )
}
