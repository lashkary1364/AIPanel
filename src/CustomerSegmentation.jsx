import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Button
} from "shards-react";
import axios from 'axios'
import "../src/shards-dashboard/styles/slider-style.css"
import { useEffect } from 'react';
import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Spinner } from 'react-bootstrap';

export const CustomerSegmentation = () => {

  const accessToken = localStorage.getItem("access-tocken");
  const [option, setOption] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [styleVar, setStyleVar] = useState({ visibility: 'collapse' });
  const [divChart, setDivChart] = useState({ border: "0px" })
  const serverAddress = process.env.REACT_APP_SERVER_ADRESS
  const [seriDataList, setSeriDatalist] = useState([])
  

  useEffect(() => {


    setOption({

      xAxis: {
        type: 'category',
        data: ['ارزش پایین' , 'ارزش متوسط' , 'ارزش بالا'] //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: seriDataList,
          //[120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]

    })

    setIsLoading(false);
  }, [ seriDataList, setSeriDatalist]);


  const getTransactionCustomerKPI = () => {

    setDivChart({ border: "2px solid ", color: "#9b9797", borderRadius: "10px", marginTop: "8px" });
    setStyleVar({ visibility: 'visible' });
    setIsLoading(true);
    console.log("....................");

    axios(
      {
        url: serverAddress + "get_customer_predicted",
        method: "get",
        headers:
        {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(function (response) {

        const resultItems = response.data;
        const itemsArray = resultItems.result;
        console.log(itemsArray);
        var countMedium=0;
        var countHight=0;
        var countLow=0;
        itemsArray.map((item,index)=>{
            if(item.Profile=="medium value"){
                countMedium++;
            }else if (item.Profile=="high value"){
                countHight++;
            }else if (item.Profile=="low value"){
                countLow++;
            }else{

            }
        });



      
        setSeriDatalist([countLow, countMedium , countHight]);

      }).catch(function (error) {

        console.log("axois error: " + error);
        setIsLoading(false);


      });

  }


  return (
    <Card small className="h-100">
      <CardHeader>بخش بندی مشتریان</CardHeader>
      <CardBody className="pt-0">
        <Button type="button" className='btn btn-secondary' onClick={getTransactionCustomerKPI}>محاسبه</Button>
        {
          isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
            <Spinner animation="grow" size="sm" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
          </div> :
            <div style={divChart}  ><ReactECharts option={option} style={styleVar} /></div>
        }


      </CardBody>
    </Card>

  )
}

