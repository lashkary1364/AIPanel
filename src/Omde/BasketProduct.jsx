import React from 'react'
import {
    Card,
    CardHeader,
    CardBody, Container, FormSelect, Col
} from "shards-react";
import axios from 'axios'
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import ReactECharts from 'echarts-for-react';
import Select from 'react-select';
import Table from 'react-bootstrap/Table';

export const BasketProduct = () => {

    const [isLoading, setIsLoading] = useState(false);
    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const accessToken = localStorage.getItem("access-tocken");
    const [productItems, setProductItems] = useState([]);
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [productCategory, setProductCategory] = useState([]);
    const [isLoadingProduct, setIsLoadingProduct] = useState(true);
    const [option, setOption] = useState({});
    const [basketList, setBasketList] = useState([]);
    const [isVisibleChart, setIsVisibleChart] = useState(false);
    const [consequents, setConsequents] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])



    useEffect(() => {
        console.log("product items ...");
        console.log(productItems);
    }, [productItems])

    const changeProducts = (e) => {
        console.log(e.value);
        console.log(e.label);
        setConsequents([]);
        const temp = basketList.filter(m => m.zhangs_metric == e.value);
        console.log(temp);
        temp.map((item) => setConsequents(p => [...p, { consequents: item.consequents, zhangs_metric: item.zhangs_metric }]));
        setIsVisibleChart(true);
    }

    const getProducts = () => {
        axios(
            {
                url: serverAddress + "basket_analysis",
                method: "get",
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(function (response) {

                const resultItems = response.data;
                const itemsArray = resultItems.result;
                const arr = JSON.parse(itemsArray).slice(0, 100);
                // arr.map((item) => setBasketList(p => [...p, { zhangs_metric: item.zhangs_metric, antecedents: item.antecedents, consequents: item.consequents }]))
                setProductItems([]);

                arr.map((item) => setBasketList(m => [...m, { antecedents: item.antecedents, zhangs_metric: item.zhangs_metric, consequents: item.consequents }]));
                arr.map((item) => setProductItems(m => [...m, { label: item.antecedents, value: item.zhangs_metric }]));
                // setProductItems(arr.map(m => [...m, { lable: m.antecedents, value: m.zhangs_metric }]));
                setIsLoadingProduct(false);
                setIsLoading(false);

            }).catch(function (error) {
                setIsLoading(false);
            });
    }



    return (
        <Container fluid className="main-content-container px-4" dir="rtl" >
            <Card small className="h-100" >
                <CardHeader>تحلیل سبد خرید</CardHeader>
                <CardBody className="pt-0">
                    {isLoading ? <Loading></Loading> :
                        <>

                            <Col md="6" className="form-group mt-3">
                                <label className='mr-3 ml-3'>محصول</label>
                                <Select className='mr-3'
                                    placeholder="انتخاب کنید"
                                    defaultValue={selectedOption}
                                    onChange={(e) => changeProducts(e)}
                                    options={productItems}
                                    isLoading={isLoadingProduct}
                                />

                                {/* <label htmlFor="customer" > فیلتر مشتری</label>
                                <FormSelect className="form-control"  >
                                    <option value={""}>یک موردانتخاب کنید</option>
                                    {
                                        productItems.map((item, index) => (
                                            <option key={index}
                                                value={item.value}>
                                                {item.label}
                                            </option>
                                        ))
                                    }
                                </FormSelect> */}

                            </Col>
                            {isVisibleChart ?

                                <table className='table table-bordered table-hover' responsive="sm">

                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">ردیف</th>
                                            <th scope="col">محصول</th>
                                            <th scope="col">شاخص ارزیابی</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            consequents.map((item, index) => <tr key={index}><td >{index + 1}</td><td>{item.consequents}</td><td><span>{(item.zhangs_metric * 100).toFixed(2)}</span><span>%</span></td></tr>)
                                        }
                                    </tbody>
                                </table>
                                : ""}

                        </>



                    }


                </CardBody>
            </Card>
        </Container >
    )
}
