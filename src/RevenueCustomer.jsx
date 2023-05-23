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



export const RevenueCustomer = () => {

    const [disabled, setDisabled] = useState("");
    const [option, setOption] = useState({});
    const [date, setDate] = useState([]);
    const [revenueNew, setRrevenueNew] = useState([]);
    const [revenueOld, setRrevenueOld] = useState([]);
    const [styleVar, setStyleVar] = useState({ visibility: 'collapse' });
    const [isLoading, setIsLoading] = useState(false);
    const accessToken = localStorage.getItem("access-tocken");
    const [seri,setSeri]=useState([])
    const [newDate,setNewDate]=useState([])

    useEffect(() => {

        console.log(date)
        console.log(revenueNew)
        console.log(revenueOld)
       
        setOption(
             {
                // title: {
                //   text: 'Rainfall vs Evaporation',
                //   //subtext: 'Fake Data'
                // },
                tooltip: {
                  trigger: 'axis'
                },
                legend: {
                  data: ['مشتریان جدید', 'مشتریان قدیم']
                },
                toolbox: {
                  show: true,
                  feature: {
                    // dataView: { show: true, readOnly: false },
                    // magicType: { show: true, type: ['line', 'bar'] },
                    // restore: { show: true },
                   // saveAsImage: { show: true }
                  }
                },
                calculable: true,
                xAxis: [
                  {
                    type: 'category',
                    // prettier-ignore
                    data:newDate
                  }
                ],
                yAxis: [
                  {
                    type: 'value'
                  }
                ],
                series: [
                  {
                    name: 'مشتریان جدید',
                    type: 'bar',
                    data: revenueNew ,
                    markPoint: {
                      data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                      ]
                    },
                    markLine: {
                      data: [{ type: 'average', name: 'Avg' }]
                    }
                  },
                  {
                    name: 'مشتریان قدیم',
                    type: 'bar',
                    data: revenueOld ,
                    markPoint: {
                      data: [
                        { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                        { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
                      ]
                    },
                    markLine: {
                      data: [{ type: 'average', name: 'Avg' }]
                    }
                  }
                ]
              }
        )

        console.log(option)
    }, [newDate, setNewDate, revenueNew, setRrevenueNew , revenueOld,setRrevenueOld , seri , setSeri])

   
    useEffect(() => {
        console.log(date);
       
        setNewDate( date.filter((x, i, a) => a.indexOf(x) == i))
    
      }, [date, setDate]);


      useEffect(() => {
      
        setSeri([]);
        for (let i = 1; i < newDate.length; i++) {
          setSeri(seri => [...seri, { type: "bar" }])
        }

      }, [newDate, setNewDate])
      

    const getRevenueCustomer = () => {

        setStyleVar({ visibility: 'visible' });
        setIsLoading(true);

        console.log("....................");

        axios(
            {
                url: "http://82.115.24.35:8000/get_customer_kpis",
                method: "get",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(function (response) {

                const resultItems = response.data;
                const itemsArray = resultItems.result;
                console.log("itemsArray");
                console.log(itemsArray);
                const arr = JSON.parse(itemsArray);
                console.log(arr);
                

                const newList = arr.filter(employee => {
                    return (
                        employee.customer_type == "new"
                    );
                });

                const oldList = arr.filter(employee => {
                    return (
                        employee.customer_type == "old"
                    );
                });


                newList.map((item, index) => {
                   
                    setRrevenueNew(revenueNew => [...revenueNew, item.Revenue]);
                 
                });

                oldList.map((item, index) => {
                                     
                    setRrevenueOld(revenueOld => [...revenueOld, item.Revenue]);

                });

                arr.map((item, index) => {
                    console.log(item.year + " , " + item.month)
                    const date1 = item.year + " , " + item.month;
                    setDate(date => [...date, date1]);
                    setRrevenueNew(revenueNew => [...revenueNew, item.Revenue]);
                    setRrevenueOld(revenueOld => [...revenueOld, item.Revenue]);
                });

                setIsLoading(false);
                setDisabled("");

            }).catch(function (error) {

                console.log("axois error: " + error);
                setIsLoading(false);
                setInlineStyles()

            });

    }



    return (

        <Card small className="h-100">
            <CardHeader>درآمدماهانه مشتریان جدید و قدیم</CardHeader>
            <CardBody className="pt-0">
                <Button type="button" className='btn btn-secondary' disabled={disabled} onClick={getRevenueCustomer}>محاسبه</Button>

                {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >                 
                    <Spinner animation="grow" size="sm" variant="primary" />
                    <Spinner animation="grow" variant="primary" />
                    <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
                </div> :
                  <ReactECharts option={option} style={styleVar} />
                }

            </CardBody>
        </Card>

    )
}
