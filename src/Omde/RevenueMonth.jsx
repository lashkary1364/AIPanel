
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,Col,
  ListGroupItem
  } from "shards-react";
import { Spinner } from 'react-bootstrap';
import ReactECharts from 'echarts-for-react';
export const RevenueMonth = ({optionRevenueMonth , isLoading}) => {
  return (
   
       <Card small className="h-100 mt-2" >
    
    <CardHeader>درآمد ماهانه</CardHeader>
  <CardBody className="pt-0">
   

    {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
      <Spinner animation="grow" size="sm"  className='color-spinner'   />
      <Spinner animation="grow"   className='color-spinner'  />
      <div className='text-center color-spinner loading-text' dir="rtl">در حال بارگزاری...</div>
    </div> :
     optionRevenueMonth !=undefined ?<ReactECharts option={optionRevenueMonth}  />:''
    }

  </CardBody>       
</Card>

)
    
   
}
