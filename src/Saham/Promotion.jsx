import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import {
    Container, Row, Col, ListGroup, ListGroupItem, Card, Button, CardHeader, CardBody, FormInput
} from "shards-react";
import Slider from '@mui/material/Slider';
import ReactECharts from 'echarts-for-react';
import Select from 'react-select';
import Loading from '../Loading';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Swal from 'sweetalert2';
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import persian_en from "react-date-object/locales/persian_en"

export const Promotion = () => {

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
    const calendarRef = useRef();

    const [isLoadingProduct, setIsLoadingProduct] = useState(true);
    const [isLoadingCategory, setIsLoadingCategory] = useState(true);
    const [isLoadingCustomer, setIsLoadingCustomer] = useState(true);
    const [isLoadingArea, setIsLoadingArea] = useState(true);

    const [state, setState] = useState(new DateObject({ calendar: persian, locale: persian_en }));
    const date = new DateObject({ calendar: persian, locale: persian_en });

    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState([]);

    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedArea, setSelectedArea] = useState([]);
    const [selectedFromDay, setSelectedFromDay] = useState();
    const [selectedToDay, setSelectedToDay] = useState();

    const [selectedDistinct1Day, setDistinct1Day] = useState(50);
    const [selectedDistinct2Day, setDistinct2Day] = useState(50);
    const [selectedDistinct3Day, setDistinct3Day] = useState(50);
    const [selectedDistinct4Day, setDistinct4Day] = useState(50);

    const [selectedMonthFrom, setSelectedMonthFrom] = useState();
    const [selectedDayFrom, setSelectedDayFrom] = useState();

    const [selectedMonthTo, setSelectedMonthTo] = useState();
    const [selectedDayTo, setSelectedDayTo] = useState();

    const [daysValue, setDaysValue] = useState([]);
    const [qtyValue, setQtyValue] = useState([]);
    const [revenueValue, setRevenueValue] = useState([]);
    const [optionRevenue, setOptionRevenue] = useState({});

    const [optionQty, setOptionQty] = useState({});
    const [isVisibleCharts, setIsVisibleCharts] = useState(false);

    const convertFrom = (date, format = state.format) => {
        let object = { date, format }

        setState(new DateObject(object).convert(persian, persian_en).format());
        setSelectedMonthFrom(new DateObject(object).convert(persian, persian_en).format("MM"));
        setSelectedDayFrom(new DateObject(object).convert(persian, persian_en).format("DD"));

    }

    const convertTo = (date, format = state.format) => {
        let object = { date, format }

        setState(new DateObject(object).convert(persian, persian_en).format());
        setSelectedMonthFrom(new DateObject(object).convert(persian, persian_en).format("MM"));
        setSelectedDayFrom(new DateObject(object).convert(persian, persian_en).format("DD"));

    }


    useEffect(() => {

        console.log("date");
        console.log(date.format("MM"));
        console.log(date.format("DD"));

        setSelectedMonthFrom(date.format("MM"));
        setSelectedMonthTo(date.format("MM"));

        setSelectedDayTo(date.format("DD"));
        setSelectedDayFrom(date.format("DD"));

        getProductCategory();
        getCustomers();
        getAreas();

    }, []);

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

    const changeCustomer = (e) => {

        e.map((item) => {
            setSelectedCustomer(p => [...p, item.value]);
        });

        if (e.length == 0) {
            setErrorCustomer(true);
        } else {
            setErrorCustomer(false);
        }

    }

    const getProductKpis = (e) => {
        // console.log(e);

        if (e.length == 0) {
            setErrorCategory(true);
        } else {
            setErrorCategory(false);
        }

        var products = localStorage.getItem("products");

        // console.log("products....")
        // console.log(JSON.parse(products));

        var products2 = JSON.parse(products);
        setProductId([]);
        e.map((item) => {

            setSelectedCategory(p => [...p, item.value]);


            let xxx = products2.filter(element => element.L0_GroupID === item.value);
            // console.log("xxx")
            // console.log(xxx);

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

                setProductCategory([]);

                let p = productsTemp.filter((ele, ind) => ind === productsTemp.findIndex(elem => elem.L0_GroupID === ele.L0_GroupID && elem.L0_GroupName === ele.L0_GroupName));
                p.slice(0, 500).map((item) => {
                    setProductCategory(p => [...p, { label: item.L0_GroupName, value: item.L0_GroupID }]);
                });

                setIsLoadingCategory(false);

            }).catch(function (error) {

                // console.log("axois error: " + error);


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

                // console.log("axois error: " + error);
                setIsLoadingArea(false);


            });

    }

    const promotionPrediction = () => {


        setOptionQty({});
        setOptionRevenue({});
        setIsVisibleCharts(true);
        setIsLoading(true);
        const form = new FormData();
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

        form.append("sku_filter", selectedProduct);
        form.append("sku_category_filter", selectedCategory);
        form.append("customer_type_filter", selectedCustomer);
        form.append("area_filter", selectedArea);
        form.append("from_day_filter", selectedFromDay);
        form.append("to_day_filter", selectedToDay);
        form.append("dis1_filter", selectedDistinct1Day);
        form.append("dis2_filter", selectedDistinct2Day);
        form.append("dis3_filter", selectedDistinct3Day);
        form.append("dis4_filter", selectedDistinct4Day);

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

                const resultItems = response.data;
                const products = JSON.parse(resultItems.result);

                setQtyValue([]);
                setDaysValue([]);
                setRevenueValue([]);
                products.map((item) => {
                    setQtyValue(p => [...p, item.qty_pred]);
                    setRevenueValue(p => [...p, item.revenue_pred]);
                    setDaysValue(p => [...p, item.day]);
                });

                setIsLoading(false);

            }).catch(function (error) {
                Swal.fire(
                    'خطا',
                    error.message,
                    'error');

            });
    }

    useEffect(() => {

        setOptionQty({
            // title: {
            //     text: 'Stacked Line'
            //   },
            xAxis: {
                name: 'روز',
                type: 'category',
                data: daysValue
            },
            yAxis: {
                name: 'مقدار',
                type: 'value'
            },
            series: [
                {
                    data: qtyValue,
                    type: 'line'
                }
            ]
        });

    }, [daysValue, qtyValue])

    useEffect(() => {

        setOptionRevenue({
            xAxis: {
                name: 'روز',
                type: 'category',
                data: daysValue
            },
            yAxis: {
                name: 'حجم',
                type: 'value'
            },
            series: [
                {
                    data: revenueValue,
                    type: 'line'
                }
            ]
        });

    }, [daysValue, revenueValue])


    return (
        <div>
            <Container fluid className="main-content-container px-4 mt-2" dir="rtl" >
                <Card small className="h-100" >
                    <CardHeader>برنامه ریزی پروموشن</CardHeader>
                    <CardBody className="pt-2">
                        <Row>
                            <Col md="3" className="form-group">
                                <label>کد گروه محصول / نام گروه محصول</label>
                                <Select
                                    placeholder="انتخاب کنید"
                                    defaultValue={selectedOption}
                                    onChange={(e) => getProductKpis(e)}
                                    options={productCategory}
                                    isMulti={true}
                                    isLoading={isLoadingCategory}
                                />
                                {
                                    errorCategory ?
                                        <p className='error-message'>فیلد اجباری</p> : ""
                                }
                            </Col>
                            <Col md="3" className="form-group">
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
                            <Col>
                                <label >از تاریخ*:</label>
                                <div>
                                    <DatePicker inputClass='form-control'
                                        ref={calendarRef}
                                        calendar={persian}
                                        locale={persian_fa}
                                        format={"YYYY/MM/DD"}
                                        value={state}
                                        onChange={convertFrom}
                                        id="tarikh" name="tarikh"
                                        calendarPosition="bottom-right"
                                    />
                                </div>
                            </Col>
                            <Col>
                                <label >تا تاریخ*:</label>
                                <div>
                                    <DatePicker inputClass='form-control'
                                        ref={calendarRef}
                                        calendar={persian}
                                        locale={persian_fa}
                                        format={"YYYY/MM/DD"}
                                        value={state}
                                        onChange={convertTo}
                                        id="tarikh" name="tarikh"
                                        calendarPosition="bottom-right"
                                    />
                                </div>
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
                        <Row>
                            <Col>
                                <Button theme="primary" className="mb-2 ml-10" type="submit" onClick={promotionPrediction} >
                                    نمایش نمودار
                                </Button>
                            </Col>
                        </Row>
                        {isVisibleCharts ? <Row>
                            <Col>
                                {isLoading ? "" :

                                    <ReactECharts option={optionQty} />
                                }
                            </Col>
                            <Col>
                                {isLoading ? "" :
                                    <ReactECharts option={optionRevenue} />
                                }
                            </Col>
                        </Row> : ""}
                    </CardBody>
                </Card>
            </Container>
        </div >
    )

}