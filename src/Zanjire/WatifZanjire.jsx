import React from 'react'
import {
    Card,
    CardHeader,
    CardBody, Container, FormSelect, Row, Col
} from "shards-react";
import "../shards-dashboard/styles/slider-style.css"
import ReactECharts from 'echarts-for-react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import Swal from 'sweetalert2';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


export const WatifZanjire = () => {

    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const [visible, setVisible] = useState(false);
    const accessToken = localStorage.getItem("access-tocken");
    const [option, setOption] = useState({});
    const [optionSurplus, setOptionSurplus] = useState({});
    const [option2, setOption2] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState([]);
    const [comboItem, setComboItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    const [factorySendingOrder, setFactorySendingOrder] = useState([]);
    const [distributorSendingOrder, setDistributorSendingOrder] = useState([]);
    const [wholesalerSendingOrder, setWholesalerSendingOrder] = useState([]);
    const [etailerSendingOrder, setEtailerSendingOrder] = useState([]);
    const [consumerSendingOrder, setConsumerSendingOrder] = useState([]);

    const [factorySurplus, setFactorySurplus] = useState([]);
    const [distributorSurplus, setDistributorSurplus] = useState([]);
    const [wholesalerSurplus, setWholesalerSurplus] = useState([]);
    const [retailerSurplus, setRetailerSurplus] = useState([]);


    const [totalTetailerCost, setTotalTetailerCost] = useState([]);
    const [targetRetailerCost, setTargetRetailerCost] = useState([]);
    const [totalSupplyChainCost, setTotalSupplyChainCost] = useState([]);
    const [targetSupplyChainCost, setTargetSupplyChainCost] = useState([]);

    const [backorder, setBackorder] = React.useState(true);
    const [supplyLine, setSupplyLine] = React.useState(true);
    const [inventoryAdjustmentTime, setInventoryAdjustmentTime] = useState(1);

    const [flag, setFlag] = useState(false);


    const handleChangeIgnoreBackorder = (event) => {
        setBackorder(event.target.checked);
        // console.log(event.target.checked);
    };

    const handleChangeSupplyLine = (event) => {
        // console.log("handleChangeSupplyLine");
        setSupplyLine(event.target.checked);
    };


    useEffect(() => {
        // console.log("factorySendingOrder");

        // console.log(factorySendingOrder);

        setOption({
            // title: {
            //     text: 'Stacked Line'
            // },
            textStyle: {
                fontFamily: 'b yekan',
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight: 'bold'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ["سفارش ارسال کارخانه", "سفارش ارسال توزیع کننده", 'سفارش ارسال  عمده فروش', 'سفارش ارسال خرده فروش', 'سفارش ارسال مصرف کننده']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: time//['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: "سفارش ارسال کارخانه",
                    type: 'line',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    smooth: true,
                    seriesLayoutBy: 'row',
                    data: factorySendingOrder//[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: "سفارش ارسال توزیع کننده",
                    type: 'line',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    smooth: true,
                    seriesLayoutBy: 'row',
                    data: distributorSendingOrder //[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'سفارش ارسال  عمده فروش',
                    type: 'line',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    smooth: true,
                    seriesLayoutBy: 'row',
                    data: wholesalerSendingOrder //[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'سفارش ارسال خرده فروش',
                    type: 'line',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    smooth: true,
                    seriesLayoutBy: 'row',
                    data: etailerSendingOrder //[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'سفارش ارسال مصرف کننده',
                    type: 'line',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    smooth: true,
                    seriesLayoutBy: 'row',
                    data: consumerSendingOrder //[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        });

    }, [factorySendingOrder, distributorSendingOrder, wholesalerSendingOrder, etailerSendingOrder, consumerSendingOrder]);

    useEffect(() => {

        setOptionSurplus({
            // title: {
            //     text: 'Stacked Line'
            // },
            textStyle: {
                fontFamily: 'b yekan',
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight: 'bold'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['مازاد کارخانه', 'مازاد پخش کننده', 'مازاد عمده فروش', 'مازاد خرده فروش']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,

                data: time//['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'مازاد کارخانه',
                    type: 'line',
                    // seriesLayoutBy: 'row',   
                    // areaStyle: {},            
                    data: factorySurplus//[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'مازاد پخش کننده',
                    type: 'line',
                    // seriesLayoutBy: 'row', 
                    // areaStyle: {},  
                    // emphasis: {
                    //     focus: 'series'
                    //   },              
                    data: distributorSurplus //[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'مازاد عمده فروش',
                    type: 'line',
                    // seriesLayoutBy: 'row',  
                    // areaStyle: {},
                    // emphasis: {
                    //     focus: 'series'
                    //   },             
                    data: wholesalerSurplus //[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'مازاد خرده فروش',
                    type: 'line',
                    // seriesLayoutBy: 'row',  
                    // areaStyle: {},  
                    // emphasis: {
                    //     focus: 'series'
                    //   },           
                    data: retailerSurplus //[320, 332, 301, 334, 390, 330, 320]
                },

            ]
        });

    }, [factorySurplus, distributorSurplus, wholesalerSurplus, retailerSurplus]);

    useEffect(() => {
        setOption2({
            // title: {
            //     text: 'Stacked Line'
            // },
            textStyle: {
                fontFamily: 'b yekan',
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight: 'bold'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['کل هزینه خرده فروش', 'هزینه هدف گذاری خرده فروش', 'کل هزینه زنجیره تامین', 'هزینه زنجیره تامین هدف']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: time//['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'کل هزینه خرده فروش',
                    type: 'line',
                    // seriesLayoutBy: 'row', 
                    // areaStyle: {},    
                    // emphasis: {
                    //     focus: 'series'
                    //   },            
                    data: totalTetailerCost//[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'هزینه هدف گذاری خرده فروش',
                    type: 'line',
                    // seriesLayoutBy: 'row', 
                    // areaStyle: {},
                    // emphasis: {
                    //     focus: 'series'
                    //   },                  
                    data: targetRetailerCost //[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'کل هزینه زنجیره تامین',
                    type: 'line',
                    // seriesLayoutBy: 'row',     
                    // areaStyle: {},   
                    // emphasis: {
                    //     focus: 'series'
                    //   },       
                    data: totalSupplyChainCost //[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'هزینه زنجیره تامین هدف',
                    type: 'line',
                    // seriesLayoutBy: 'row',    
                    // areaStyle: {},
                    // emphasis: {
                    //     focus: 'series'
                    //   },              
                    data: targetSupplyChainCost //[320, 332, 301, 334, 390, 330, 320]
                },

            ]
        });

    }, [totalTetailerCost, targetRetailerCost, totalSupplyChainCost, targetSupplyChainCost]);


    const watifSupplyChain = (form) => {
        // console.log("tab avari ...");
        // console.log(form)
        axios(
            {
                url: serverAddress + "what_if_supply_chain",
                method: "post",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
                data: form,
            }).then(function (response) {

                const resultItems = response.data;
                // console.log(resultItems);
                const itemsArray = resultItems.result;
                // console.log("itemsArray");
                // console.log(itemsArray);

                const arr = JSON.parse(itemsArray);
                // console.log(arr);

                setTime([]);
                setFactorySendingOrder([]);
                setDistributorSendingOrder([]);
                setWholesalerSendingOrder([]);
                setEtailerSendingOrder([]);
                setConsumerSendingOrder([]);
                setFactorySurplus([]);
                setDistributorSurplus([]);
                setWholesalerSurplus([]);
                setRetailerSurplus([]);
                setTotalTetailerCost([]);
                setTargetRetailerCost([]);
                setTotalSupplyChainCost([]);
                setTargetSupplyChainCost([]);
                arr.map(function (item, index) {

                    setTime(i => [...i, item.t]);

                    setFactorySendingOrder(i => [...i, item.factory_sending_order]);

                    setDistributorSendingOrder(i => [...i, item.distributor_sending_order]);
                    setWholesalerSendingOrder(i => [...i, item.wholesaler_sending_order]);
                    setEtailerSendingOrder(i => [...i, item.retailer_sending_order]);
                    setConsumerSendingOrder(i => [...i, item.consumer_sending_order]);


                    setFactorySurplus(i => [...i, item.factory_surplus]);
                    setDistributorSurplus(i => [...i, item.distributor_surplus]);
                    setWholesalerSurplus(i => [...i, item.wholesaler_surplus]);
                    setRetailerSurplus(i => [...i, item.retailer_surplus]);

                    setTotalTetailerCost(i => [...i, item.total_tetailer_cost]);
                    setTargetRetailerCost(i => [...i, item.target_retailer_cost]);
                    setTotalSupplyChainCost(i => [...i, item.total_supply_chain_cost]);
                    setTargetSupplyChainCost(i => [...i, item.target_supply_chain_cost]);

                });




                setIsLoading(false);

            }).catch(function (error) {
                setIsLoading(false);
                console.log("axois error: " + error);
                if (error.message == "Request failed with status code 401") {
                    window.location.replace('/');
                    return;
                }
                Swal.fire(
                    'خطا',
                    error.message,
                    'error');
            });

    }

    const handleSearch = () => {
        setIsLoading(true);
        setVisible(true);
        // console.log("")
        const form = new FormData();
        if (backorder == true) {
            form.append("ignore_backorders", "1");
        } else {
            form.append("ignore_backorders", "0");
        }

        if (supplyLine == true) {
            form.append("include_supply_line", "1");
        } else {
            form.append("include_supply_line", "0");
        }

        form.append("inventory_adjustment_time", parseInt(inventoryAdjustmentTime));

        watifSupplyChain(form)
    }

    const inventoryTime = (e) => {
        // console.log("inventory-adjusment-time...");
        // console.log(e);
        setInventoryAdjustmentTime(e)

    }


    return (
        <Container fluid className="main-content-container px-4 mt-3" dir="rtl" >
            <Card small className="h-100">
                <CardHeader>فیلتر</CardHeader>
                <CardBody className="pt-0">
                    <row>
                        <div className='form-inline'>
                            <FormControlLabel required checked={backorder} style={{ fontFamily: "IRANSans" }}
                                onChange={handleChangeIgnoreBackorder} control={<Switch defaultChecked />} label="سفارشات به تاخیر افتاده" />
                            <FormControlLabel required checked={supplyLine}
                                onChange={handleChangeSupplyLine} control={<Switch />} label="اعمال حد تامین" />
                            <label npm rclassName=' ml-5'>زمان تعدیل موجودی</label>
                            <FormSelect className="form-control ml-3 combo" onChange={(e) => inventoryTime(e.target.value)} >
                                {
                                    comboItem.map((item, index) => (
                                        <option key={index}
                                            value={item}>
                                            {item}
                                        </option>
                                    ))
                                }
                            </FormSelect>
                            <button className='btn-watif' onClick={handleSearch}>جستجو</button>
                        </div>
                    </row>
                </CardBody>
            </Card>
            {visible ?
                <>
                    <Row className="mt-3">
                        <Col>
                            <Card small className="h-100">
                                <CardHeader>نمودار سفارشات ارسالی</CardHeader>
                                <CardBody className="pt-0">
                                    {
                                        isLoading == true ? <Loading></Loading>
                                            : option != undefined ? <ReactECharts option={option} /> : ''
                                    }
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card small className="h-100">
                                <CardHeader>نمودار مازاد موجودی</CardHeader>
                                <CardBody className="pt-0">
                                    {
                                        isLoading == true ? <Loading></Loading>
                                            : option != undefined ? <ReactECharts option={optionSurplus} /> : ''
                                    }
                                </CardBody>
                            </Card>
                        </Col>
                        <Col> <Card small className="h-100 mb-3">
                            <CardHeader>نمودار هزینه زنجیره تامین</CardHeader>
                            <CardBody className="pt-0">
                                {
                                    isLoading == true ? <Loading></Loading>
                                        : option != undefined ? <ReactECharts option={option2} /> : ''
                                }
                            </CardBody>
                        </Card></Col>
                    </Row>
                </>
                : ''}

        </Container>
    )
}
