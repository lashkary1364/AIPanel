import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Button
} from "shards-react";
import axios from 'axios'
import "../shards-dashboard/styles/slider-style.css"
import { useEffect } from 'react';
import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Spinner } from 'react-bootstrap';

export const RFMPrice = ({optionPrice, isLoading}) => {
    
    // const accessToken = localStorage.getItem("access-tocken");
    // const [option, setOption] = useState({});
    // const [isLoading, setIsLoading] = useState(false);
    // const [styleVar, setStyleVar] = useState({ visibility: 'collapse' });
    // const [divChart, setDivChart] = useState({ border: "0px" })
    // const serverAddress=process.env.REACT_APP_SERVER_ADRESS
    // const [xDataList,setXDataList]=useState([])
    // const [seriDataList,setSeriDatalist]=useState([])


    // useEffect(() => {


    //     setOption({
                      
    //             xAxis: {
    //               type: 'category',
    //               data:xDataList //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //             },
    //             yAxis: {
    //               type: 'value'
    //             },
    //             series: [
    //               {
    //                 data: seriDataList,
    //                 //[120, 200, 150, 80, 70, 110, 130],
    //                 type: 'bar',
    //                 showBackground: true,
    //                 backgroundStyle: {
    //                   color: 'rgba(180, 180, 180, 0.2)'
    //                 }
    //               }
    //             ]
              
    //     })

    //     setIsLoading(false);
    // }, [xDataList, setXDataList, seriDataList , setSeriDatalist]);

    
    // const getTransactionCustomerKPI = () => {

    //     setDivChart({ border: "2px solid ", color: "#9b9797" , borderRadius:"10px", marginTop: "8px" });
    //     setStyleVar({ visibility: 'visible' });
    //     setIsLoading(true);
    //     console.log("....................");

    //     axios(
    //         {
    //             url: serverAddress+"get_customer_predicted",
    //             method: "get",
    //             headers:
    //             {
    //                 Authorization: `Bearer ${accessToken}`,
    //             },
    //         }).then(function (response) {

    //             const resultItems = response.data;
    //             const itemsArray = resultItems.result;

    //            setXDataList(itemsArray.map(m=>m.monetary_value)) ;
    //            setSeriDatalist(itemsArray.map(m=>m.Frequency));
              
    //         }).catch(function (error) {

    //             console.log("axois error: " + error);
    //             setIsLoading(false);
                

    //         });

    // }


  return (
    <Card small className="h-100"  style={{width:"83%"}}>
    <CardHeader>نمودار فراوانی  مبلغ خرید</CardHeader>
    <CardBody className="pt-0">
       
        {
            isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                <Spinner animation="grow" size="sm" className='color-spinner'  />
                <Spinner animation="grow"  className='color-spinner'/>
                <div className='text-center color-spinner loading-text' dir="rtl">در حال بارگزاری...</div>
            </div> :
            <ReactECharts option={optionPrice}  />
        }


    </CardBody>
</Card>

  )
}

