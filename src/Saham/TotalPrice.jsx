import React from 'react'
import {
    Card,
    CardHeader,
    CardBody, Container
} from "shards-react";
import "../shards-dashboard/styles/slider-style.css"
import ReactECharts from 'echarts-for-react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios'
import { useEffect, useState } from 'react';

export const TotalPrice = () => {

    const accessToken = localStorage.getItem("access-tocken");
    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const [option,setOption]=useState();
    const [value, setValue] = useState([]);
    const [date, setDate] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getTotalPrice();
    }, []);

    useEffect(() => {

        console.log("data series ...")
        console.log(date);
        console.log(value);


        setOption({
            xAxis: {
                type: 'category',
                data: date
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  data:value,
                  type: 'line'
                }
              ]       
        });




    }, [date, value]);

    useEffect(() => {

        console.log("option ....")
        console.log(option);

    }, [option])

    const getTotalPrice = () => {

        console.log("tahlile geymat ...");
        axios(
            {
                url: serverAddress + "get_total_price",
                method: "get",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(function (response) {

               console.log("get total price ....")
                const resultItems = response.data;
                console.log(resultItems);
                const itemsArray = resultItems.result;
                console.log("itemsArray");
                console.log(itemsArray);
                const arr = JSON.parse(itemsArray);
                console.log(arr);
                setDate([]);
                setValue([]);
                

                arr.map((item) => {
                    
                    setDate(date => [...date, item.date]);
                    setValue(value => [...value, item.value]);

                });

                setIsLoading(false);

                }).catch(function (error) {

                    console.log("axois error: " + error);

                });

            }


  return (
    <Card small className="h-100" >
    <CardHeader>تحلیل قیمت شاخص کل</CardHeader>
    <CardBody className="pt-0">
        {
            isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                <Spinner animation="grow" size="sm" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
            </div> :
                option != undefined ? <ReactECharts option={option} /> : ''
        }

    </CardBody>
</Card>
  )
}
