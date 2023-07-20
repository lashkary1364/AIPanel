import React from 'react'
import "../shards-dashboard/styles/slider-style.css"
import axios from 'axios'
import "../shards-dashboard/styles/slider-style.css"
import { useEffect, useState } from 'react';
import { RFM } from './RFM';
import { RFMPurchase } from './RFMPurchase';
import { RFMPrice } from './RFMPrice';
import { CustomerSegmentation } from './CustomerSegmentation';
import {Container} from "shards-react"



export const CustomerPredicted = () => {


    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const accessToken = localStorage.getItem("access-tocken");
    const [optionRFM, setOptionRFM] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    // const [xDataList, setXDataList] = useState([]);
    // const [seriDataList, setSeriDatalist] = useState([]);

    const [purchaseList, setPurchaseList] = useState([]);
    const [frequencyList, setFrequencyList] = useState([]);
    const [predictedPurchaseList, setPredictedPurchaseList]=useState([]);
    const [monetoryList, setMonetoryList] = useState([]);
    const [recencyList, setRecencyList] = useState([]);
    
    const [optionPurchase, setOptionPurchase] = useState({});

    const [optionPrice,setOptionPrice]=useState({});
    const [priceList,setPriceList]=useState([]);

    const[segmentList,setSegmentList]=useState([]);
    const[optiobCustSegment,setOptionCustSegment]=useState({});
     
    useEffect(() => {
// نمودار فراوانی تازگی خرید
        setOptionRFM({
            xAxis: {
                type: 'category',
                data: recencyList //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: frequencyList,
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
    }, [recencyList, frequencyList]);

    useEffect(() => {

// نمودار تعداد خرید
        setOptionPurchase({

            xAxis: {
                type: 'category',
                data: predictedPurchaseList //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: frequencyList,
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
    }, [predictedPurchaseList, frequencyList]);

    
    useEffect(() => {

// نمودار فراوانی مبلغ خرید
        setOptionPrice({
                      
                xAxis: {
                  type: 'category',
                  data:monetoryList //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                  type: 'value'
                },
                series: [
                  {
                    data: frequencyList,
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
    }, [monetoryList, frequencyList]);
    
    
    useEffect(() => {

        console.log("segment list ...");
        console.log(segmentList);

        setOptionCustSegment({
    
          xAxis: {
            type: 'category',
            data: ['ارزش پایین' , 'ارزش متوسط' , 'ارزش بالا'] //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: segmentList,
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
      }, [ segmentList]);
    
    
    useEffect(() => {
        getCustomerPredicted();
    }, []);


    const getCustomerPredicted = () => {

      
        setIsLoading(true);
        console.log("......getCustomerPredicted..............");

        axios(
            {
                url: serverAddress + "get_customer_predicted",
                method: "get",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(function (response) {
                console.log("response for ===>getCustomerPredicted");
                console.log(response.date);
                const resultItems = response.data;
                const itemsArray = resultItems.result;
                const arr = JSON.parse(itemsArray);
                console.log("resultItems.....");
                console.log(resultItems);
                console.log("itemsArray...");
                console.log(itemsArray);
console.log("arr.....");
console.log(arr);
                // arr.map((item,index)=>{
                //     console.log(item.Recency);
                // });
                setRecencyList(arr.map(m => m.Recency));//تازگی خرید
                setFrequencyList(arr.map(m => m.Frequency));
                setPredictedPurchaseList(arr.map(m => m.predicted_purchases)); // تعداد خرید
                setMonetoryList(arr.map(m=>m.monetary_value)) ;

                var countMedium=0;
                var countHight=0;
                var countLow=0;
                arr.map((item,index)=>{
                    if(item.Profile=="medium value"){
                        countMedium++;
                    }else if (item.Profile=="high value"){
                        countHight++;
                    }else if (item.Profile=="low value"){
                        countLow++;
                    }else{
        
                    }
                });
        
        
        
              
                setSegmentList([countLow, countMedium , countHight]);
            }).catch(function (error) {

                console.log("axois error: " + error);
                setIsLoading(false);


            });
    }
    
    return (
        <Container fluid className="main-content-container px-4 mt-3" dir="rtl"  >
             <RFM optionRFM={optionRFM} isLoading={isLoading} />
             <hr/>
              <RFMPurchase  optionPurchase={optionPurchase} isLoading={isLoading} ></RFMPurchase>
             <hr/> 
             <RFMPrice optionPrice={optionPrice} isLoading={isLoading}></RFMPrice>
             <hr/>
             <CustomerSegmentation  optiobCustSegment={optiobCustSegment} isLoading={isLoading} />            
        </Container>
       
    )
}
