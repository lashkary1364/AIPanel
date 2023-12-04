import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    Container, Row, Col, ListGroup, ListGroupItem, Card, Button, CardHeader, CardBody, FormInput
} from "shards-react";
import Slider from '@mui/material/Slider';
import ReactECharts from 'echarts-for-react';
import Select from 'react-select';
import Loading from '../Loading';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Swal from 'sweetalert2';
export const WatifCustomer = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [errorCategory, setErrorCategory] = useState(false);
    const [errorProduct, setErrorProduct] = useState(false);
    const [errorCustomer, setErrorCustomer] = useState(false);
    const [errorArea, setErrorArea] = useState(false);
    const [errorMonth, setErrorMonth] = useState(false);
    const [errorFromDay, setErrorFromDay] = useState(false);
    const [errorToDay, setErrorToDay] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const accessToken = localStorage.getItem("access-tocken");
    const [productCategory, setProductCategory] = useState([]);
    const [productId, setProductId] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [areas, setAreas] = useState([]);

    const [isLoadingProduct, setIsLoadingProduct] = useState(true);
    const [isLoadingCategory, setIsLoadingCategory] = useState(true);
    const [isLoadingCustomer, setIsLoadingCustomer] = useState(true);
    const [isLoadingArea, setIsLoadingArea] = useState(true);


    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedArea, setSelectedArea] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedFromDay, setSelectedFromDay] = useState();
    const [selectedToDay, setSelectedToDay] = useState();
    const [selectedDistinct1Day, setDistinct1Day] = useState(50);
    const [selectedDistinct2Day, setDistinct2Day] = useState(50);
    const [selectedDistinct3Day, setDistinct3Day] = useState(50);
    const [selectedDistinct4Day, setDistinct4Day] = useState(50);
    const [days, setDays] = useState([]);
    const [daysValue1, setDaysValue1] = useState([]);
    const [daysValue, setDaysValue] = useState([]);
    const [qtyValue, setQtyValue] = useState([]);
    const [revenueValue, setRevenueValue] = useState([]);
    const [revenueValue1, setRevenueValue1] = useState([]);
    const [qtyValue1, setQtyValue1] = useState([]);
    const [revenueValue2, setRevenueValue2] = useState([]);

    const [optionRevenue, setOptionRevenue] = useState({});
    const [optionQty, setOptionQty] = useState({});
    const [checked, setChecked] = useState(true);
    const [disabled, setdisabled] = useState(true);
    const [isVisibleChart, setIsVisibleChart] = useState(false);

    const Month = [
        { label: 'فروردین', value: '1' },
        { label: 'اردیبهشت', value: '2' },
        { label: 'خرداد', value: '3' },
        { label: 'تیر', value: '4' },
        { label: 'مرداد', value: '5' },
        { label: 'شهریور', value: '6' },
        { label: 'مهر', value: '7' },
        { label: 'آبان', value: '8' },
        { label: 'آذر', value: '9' },
        { label: 'دی', value: '10' },
        { label: 'بهمن', value: '11' },
        { label: 'اسفند', value: '12' },
    ];

    useEffect(() => {

        // getProductKpis();
        getProductCategory();
        getCustomers();
        getAreas();


    }, []);

    const changeMonth = (e) => {


        if (e.value <= 6) {
            for (let i = 1; i <= 31; i++) {

                setDays(days => [...days, { value: i, label: i }]);
            }
        } else {

            for (let i = 1; i <= 30; i++) {
                setDays(days => [...days, { value: i, label: i }]);
            }
        }

        setSelectedMonth(e.value);
        setErrorMonth(false);

    }

    const changeDiscount1 = (event, newValue) => {
        setDistinct1Day(newValue);
    }

    const changeDiscount2 = (event, newValue) => {
        setDistinct2Day(newValue);
    }

    const changeDiscount3 = (event, newValue) => {
        setDistinct3Day(newValue);
    }

    const changeDiscount4 = (event, newValue) => {
        setDistinct4Day(newValue);
    }

    const changeProduct = (e) => {

        setSelectedProduct(e.value);
        setErrorProduct(false);
    }

    const changeAllArea = (e) => {
        console.log("chage check box...");
        console.log(e.target.checked);
        setChecked(e.target.checked);
        if (e.target.checked) {
            setdisabled(true);
        } else {
            setSelectedArea([]);
            setdisabled(false);
        }
    }

    const chaneArea = (e) => {


        e.map((item) => {
            setSelectedArea(p => [...p, item.value]);
        });

        if (e.length == 0) {
            setErrorArea(true);
        } else {
            setErrorArea(false);
        }

        // setSelectedArea(e.value);
    }

    const changeCategory = (e) => {

        console.log("change category");
        console.log(e)

        // setSelectedCategory([]);
        e.map((item) => {
            setSelectedCategory(p => [...p, item.value]);
        });

        if (e.length == 0) {
            setErrorCategory(true);
        } else {
            setErrorCategory(false);
        }

    }

    const changeCustomer = (e) => {
        console.log("changeCustomer")
        console.log(e)
        e.map((item) => {
            setSelectedCustomer(p => [...p, item.value]);
        });
        if (e.length == 0) {
            setErrorCustomer(true);
        } else {
            setErrorCustomer(false);
        }

    }

    const changeFromDay = (e) => {

        setSelectedFromDay(e.value);
        setErrorFromDay(false);
    }

    const changeToday = (e) => {

        setSelectedToDay(e.value);
        setErrorToDay(false);
    }

    const getProductKpis = (e) => {
        console.log(e);

        if (e.length == 0) {
            setErrorCategory(true);
        } else {
            setErrorCategory(false);
        }

        var products = localStorage.getItem("products");

        console.log("products....")
        console.log(JSON.parse(products));

        var products2 = JSON.parse(products);
        setProductId([]);
        e.map((item) => {

            setSelectedCategory(p => [...p, item.value]);


            let xxx = products2.filter(element => element.L0_GroupID === item.value);
            console.log("xxx")
            console.log(xxx);

            xxx.map((item) => {
                setProductId(p => [...p, { label: item.GoodsName, value: item.GoodsCode }]);

            });

            setIsLoadingProduct(false);

        });



    }

    const getProductCategory = () => {
        axios(
            {
                url: serverAddress + "sku_category",
                method: "get",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(function (response) {

                const resultItems = response.data;

                let productsTemp = JSON.parse(resultItems.result);
                window.localStorage.setItem("products", JSON.stringify(productsTemp));


                // const uniqueNames = products.filter((val, id, array) => {
                //     return array.indexOf(val) == id;
                // });


                setProductCategory([]);



                let p = productsTemp.filter((ele, ind) => ind === productsTemp.findIndex(elem => elem.L0_GroupID === ele.L0_GroupID && elem.L0_GroupName === ele.L0_GroupName));
                p.slice(0, 500).map((item) => {
                    setProductCategory(p => [...p, { label: item.L0_GroupName, value: item.L0_GroupID }]);
                });

                setIsLoadingCategory(false);
                setIsLoadingProduct(false);

            }).catch(function (error) {

                console.log("axois error: " + error);


            });

    }

    const getCustomers = () => {

        axios(
            {
                url: serverAddress + "customer_type",
                method: "get",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(function (response) {

                const resultItems = response.data;
                const products = JSON.parse(resultItems.result);
                setCustomers([]);

                products.map((item) => {
                    setCustomers(p => [...p, { label: item.CustTypeName, value: item.CustTypeId }]);
                });

                setIsLoadingCustomer(false);

            }).catch(function (error) {
                setIsLoadingCustomer(false);
            });

    }

    const getAreas = () => {
        axios(
            {
                url: serverAddress + "customer_area",
                method: "get",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(function (response) {


                const resultItems = response.data;

                const products = JSON.parse(resultItems.result);
                setAreas([]);
                products.slice(0, 100).map((item) => {
                    setSelectedArea(p => [...p, item.Area_ID]);
                    setAreas(p => [...p, { label: item.AreaName, value: item.Area_ID }]);
                });

                setIsLoadingArea(false);

            }).catch(function (error) {

                console.log("axois error: " + error);
                setIsLoadingArea(false);


            });

    }

    const promotionPrediction = () => {
        setIsVisibleChart(true);
        setIsLoading(true);

        setOptionQty({});
        setOptionRevenue({});
        console.log(selectedCategory);

        if (selectedProduct == undefined) {
            setErrorProduct(true);
        } else {
            setErrorProduct(false);
        }
        if (selectedCategory == undefined || selectedCategory.length == 0) {
            setErrorCategory(true);
        } else {
            setErrorCategory(false);
        }
        if (selectedCustomer == undefined || selectedCustomer.length == 0) {
            setErrorCustomer(true);
        } else {
            setErrorCustomer(false);
        }

        if (selectedArea == undefined || selectedArea.length == 0) {
            setErrorArea(true);
        } else {
            setErrorArea(false);
        }

        if (selectedMonth == undefined) {
            setErrorMonth(true);
        } else {
            setErrorMonth(false);
        }

        if (selectedFromDay == undefined) {
            setErrorFromDay(true);
        } else {
            setErrorFromDay(false);
        }

        if (selectedToDay == undefined) {
            setErrorToDay(true);
        } else {
            setErrorToDay(false);
        }

        if (errorArea == true || errorCategory == true || errorCustomer == true || errorFromDay == true || errorMonth == true || errorProduct == true || errorToDay == true) {
            Swal.fire(
                'خطا',
                "لطفا فیلدهای اجباری را وارد نمایید",
                'error');
            return;
        } else {
            const form = new FormData();
            form.append("sku_filter", selectedProduct);
            form.append("sku_category_filter", selectedCategory);
            form.append("customer_type_filter", selectedCustomer);
            form.append("area_filter", selectedArea);
            form.append("month_filter", selectedMonth);
            form.append("from_day_filter", selectedFromDay);
            form.append("to_day_filter", selectedToDay);
            form.append("dis1_filter", selectedDistinct1Day);
            form.append("dis2_filter", selectedDistinct2Day);
            form.append("dis3_filter", selectedDistinct3Day);
            form.append("dis4_filter", selectedDistinct4Day);

            const form1 = new FormData();
            form1.append("sku_filter", selectedProduct);
            form1.append("sku_category_filter", selectedCategory);
            form1.append("customer_type_filter", selectedCustomer);
            form1.append("area_filter", selectedArea);
            form1.append("month_filter", selectedMonth);
            form1.append("from_day_filter", selectedFromDay);
            form1.append("to_day_filter", selectedToDay);
            form1.append("dis1_filter", 0);
            form1.append("dis2_filter", 0);
            form1.append("dis3_filter", 0);
            form1.append("dis4_filter", 0);


            axios(
                {
                    url: serverAddress + "promotion_prediction",
                    method: "post",
                    headers:
                    {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    data: form,
                }).then(function (response) {

                    console.log("end ......")
                    console.log("response:")
                    console.log(response);
                    const resultItems = response.data;
                    console.log(resultItems.result);
                    const products = JSON.parse(resultItems.result);
                    setQtyValue([]);
                    setDaysValue([]);
                    setRevenueValue([]);
                    products.map((item) => {
                        setQtyValue(p => [...p, item.qty_pred]);
                        setRevenueValue(p => [...p, item.revenue_pred]);
                        setDaysValue(p => [...p, item.day]);
                    });
                }).catch(function (error) {
                    Swal.fire(
                        'خطا',
                        error.message,
                        'error');

                });


            axios(
                {
                    url: serverAddress + "promotion_prediction",
                    method: "post",
                    headers:
                    {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    data: form1,
                }).then(function (response) {

                    console.log("end ......")
                    console.log("response:")
                    console.log(response);
                    const resultItems = response.data;
                    console.log(resultItems.result);
                    const products = JSON.parse(resultItems.result);
                    setQtyValue1([]);
                    setDaysValue1([]);
                    setRevenueValue1([]);
                    products.map((item) => {
                        setQtyValue1(p => [...p, item.qty_pred]);
                        setRevenueValue1(p => [...p, item.revenue_pred]);
                        setDaysValue1(p => [...p, item.day]);
                    });

                }).catch(function (error) {
                    Swal.fire(
                        'خطا',
                        error.message,
                        'error');

                });


            setIsLoading(false);

        }



    }


    useEffect(() => {
        setOptionQty({
            // title: {
            //     text: 'Stacked Area Chart'
            // }, 
            textStyle: {
                fontFamily: 'b yekan',
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight: 'bold'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['بدون تخفیف', 'با تخفیف']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    name: 'روز',
                    type: 'category',
                    boundaryGap: false,
                    data: daysValue
                }
            ],
            yAxis: [
                {
                    name: 'مقدار',
                    type: 'value'
                }
            ],
            series: [
                {
                    title: '',
                    name: 'بدون تخفیف',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: qtyValue1
                },
                {
                    name: 'با تخفیف',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: qtyValue
                }
            ]
        });
    }, [daysValue, qtyValue1, qtyValue])



    useEffect(() => {
        setOptionRevenue({
            // title: {
            //     text: 'Stacked Area Chart'
            // }, textStyle: {
            textStyle: {
                fontFamily: 'b yekan',
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight: 'bold'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['بدون تخفیف', 'با تخفیف']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    name: 'روز',
                    type: 'category',
                    boundaryGap: false,
                    data: daysValue
                }
            ],
            yAxis: [
                {
                    name: 'حجم',
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'بدون تخفیف',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: revenueValue1
                },
                {
                    name: 'با تخفیف',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: revenueValue
                }
            ]
        });
    }, [daysValue1, revenueValue, revenueValue1])


    return (
        <div>
            <Container fluid className="main-content-container px-4 mt-2" dir="rtl" >
                <Card small className="h-100" >
                    <CardHeader>برنامه ریزی پروموشن</CardHeader>
                    <CardBody className="pt-2">
                        <div>
                            <Row >
                                <Col md="4">
                                    <Row >
                                        <Col className="form-group">
                                            <label>کد گروه محصول / نام گروه محصول</label>
                                            <Select
                                                placeholder="انتخاب کنید"
                                                defaultValue={selectedOption}
                                                onChange={(e) => getProductKpis(e)}
                                                selectedOption options={productCategory}
                                                isMulti={true}
                                                isLoading={isLoadingCategory}
                                            />
                                            {errorCategory ?
                                                <p className='error-message'>فیلد اجباری</p> : ""}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="form-group">
                                            <label >کد محصول / نام محصول</label>
                                            <Select
                                                placeholder="انتخاب کنید"
                                                defaultValue={selectedOption}
                                                onChange={(e) => changeProduct(e)}
                                                options={productId}
                                                isLoading={isLoadingProduct}
                                            />
                                            {errorProduct ?
                                                <p className='error-message'>فیلد اجباری</p> : ""}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="form-group">
                                            <label>کد گروه مشتری / نام گروه مشتری</label>
                                            <Select
                                                placeholder="انتخاب کنید"
                                                defaultValue={selectedOption}
                                                onChange={(e) => changeCustomer(e)}
                                                options={customers}
                                                isMulti={true}
                                                isLoading={isLoadingCustomer}
                                            />
                                            {errorCustomer ? <p className='error-message'>فیلد اجباری</p> : ""}

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ marginRight: "0px" }}>
                                            <FormControlLabel control={<Checkbox checked={checked} onChange={(e) => changeAllArea(e)} inputProps={{ 'aria-label': 'controlled' }} />} label="انتخاب کل ناحیه فروش" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="form-group">
                                            <label>کد ناحیه فروش / نام ناحیه فروش</label>
                                            <Select isDisabled={disabled}
                                                placeholder="انتخاب کنید"
                                                defaultValue={selectedOption}
                                                onChange={(e) => chaneArea(e)}
                                                isMulti={true}
                                                options={areas}
                                                isLoading={isLoadingArea}
                                            />
                                            {checked ? "" :
                                                errorArea ?
                                                    <p className='error-message'>فیلد اجباری</p> : ""}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="form-group">
                                            <label>ماه</label>
                                            <Select
                                                placeholder="انتخاب کنید"
                                                defaultValue={selectedOption}
                                                onChange={(e) => changeMonth(e)}
                                                options={Month}
                                                isSearchable="true"
                                            />
                                            {errorMonth ?
                                                <p className='error-message'>فیلد اجباری</p>
                                                : ""}
                                        </Col>
                                        <Col className="form-group">
                                            <label>از روز</label>
                                            <Select
                                                placeholder="انتخاب کنید"
                                                defaultValue={selectedOption}
                                                onChange={(e) => changeFromDay(e)}
                                                options={days}
                                            />
                                            {errorFromDay ?
                                                <p className='error-message'>فیلد اجباری</p>
                                                : ""}
                                        </Col>
                                        <Col className="form-group">
                                            <label>تا روز</label>
                                            <Select
                                                placeholder="انتخاب کنید"
                                                defaultValue={selectedOption}
                                                onChange={(e) => changeToday(e)}
                                                options={days}
                                            />
                                            {errorToDay ?
                                                <p className='error-message'>فیلد اجباری</p> : ""}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="form-group">
                                            <label>تخفیف محصول</label>
                                            <Slider
                                                onChange={changeDiscount1}
                                                size="small"
                                                step={10}
                                                defaultValue={50}
                                                aria-label="Small"
                                                valueLabelDisplay="auto"
                                            />
                                        </Col>
                                        <Col className="form-group">
                                            <label>تخفیف گروه محصول</label>
                                            <Slider
                                                onChange={changeDiscount2}
                                                size="small"
                                                step={10}
                                                defaultValue={50}
                                                aria-label="Small"
                                                valueLabelDisplay="auto"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="form-group">
                                            <label>تخفیف  مشتری</label>
                                            <Slider
                                                onChange={changeDiscount3}
                                                size="small"
                                                step={10}
                                                defaultValue={50}
                                                aria-label="Small"
                                                valueLabelDisplay="auto"
                                            />
                                        </Col>
                                        <Col className="form-group">
                                            <label>تخفیف ناحیه فروش </label>
                                            <Slider
                                                onChange={changeDiscount4}
                                                size="small"
                                                defaultValue={50}
                                                step={10}
                                                aria-label="Small"
                                                valueLabelDisplay="auto"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                {isVisibleChart ?
                                    <Col md="6">
                                        {
                                            isLoading ? <Loading></Loading> :
                                                <>
                                                    <ReactECharts style={{ height: "50%", width: "100%" }} option={optionQty} />
                                                    <ReactECharts style={{ height: "50%", width: "100%" }} option={optionRevenue} />
                                                </>
                                        }
                                    </Col> : ""
                                }
                            </Row>
                            <Row>
                                <Col>
                                    <Button theme="primary" className="mb-2 ml-10" type="submit" onClick={promotionPrediction} >
                                        نمایش نمودار
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
                <br />
            </Container >
        </div >
    )
}
