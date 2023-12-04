
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody, Col,
  ListGroupItem
} from "shards-react";
import { Spinner } from 'react-bootstrap';
import ReactECharts from 'echarts-for-react';
import Loading from '../Loading';
export const RevenueMonth = ({ optionRevenueMonth, isLoading }) => {
  return (

    <Card small className="h-100"  >

      <CardHeader>درآمد ماهانه</CardHeader>
      <CardBody className="pt-0">

        {isLoading == true ? <Loading></Loading>
          :
          optionRevenueMonth != undefined ? <ReactECharts option={optionRevenueMonth} /> : ''
        }

      </CardBody>
    </Card>

  )


}
