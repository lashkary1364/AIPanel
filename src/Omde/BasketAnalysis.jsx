import React from 'react'
import {
    Card,
    CardHeader,
    CardBody, Container, Col, FormSelect, Row
} from "shards-react";
import axios from 'axios'
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import ReactECharts from 'echarts-for-react';
import Select from 'react-select';

export const BasketAnalysis = () => {

    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const accessToken = localStorage.getItem("access-tocken");
    const [customerItems, setCustomerItems] = useState([]);
    const [basketList, setBasketList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    //const [option, setOption] = useState({});
    const [visiblePanel2, setVisiblePanel2] = useState(false);

    useEffect(() => {
        //  getCustomers();
    }, [])


    const option = {
        xAxis: {
            data: ['Animals', 'Fruits', 'Cars']
        },
        yAxis: {},
        dataGroupId: '',
        animationDurationUpdate: 500,
        series: {
            type: 'bar',
            id: 'sales',
            data: [
                {
                    value: 5,
                    groupId: 'animals'
                },
                {
                    value: 2,
                    groupId: 'fruits'
                },
                {
                    value: 4,
                    groupId: 'cars'
                }
            ],
            universalTransition: {
                enabled: true,
                divideShape: 'clone'
            }
        }
    };

    // const getCustomers = () => {

    //     axios(
    //         {
    //             url: serverAddress + "basket_analysis",
    //             method: "get",
    //             headers:
    //             {
    //                 Authorization: `Bearer ${accessToken}`,
    //             },
    //         }).then(function (response) {

    //             const resultItems = response.data;
    //             const itemsArray = resultItems.result;
    //             const arr = JSON.parse(itemsArray).slice(0, 100);
    //             setBasketList([]);
    //             arr.map((item) => setBasketList(p => [...p, { zhangs_metric: item.zhangs_metric, antecedents: item.antecedents, consequents: item.consequents }]))
    //             setCustomerItems([]);
    //             setCustomerItems(arr.map(m => m.antecedents));
    //             setIsLoading(false);
    //             setVisiblePanel2(true)
    //         }).catch(function (error) {
    //             setIsLoading(false);
    //         });
    // }

    // const changeCustomer = (value) => {

    //     console.log(value);

    //     const temp = basketList.filter(m => m.antecedents.includes(value));
    //     console.log("temp....")
    //     console.log(temp);
    //     setData([]);

    //     temp.map((item) => setData(p => [...p, { value: item.zhangs_metric, name: item.antecedents }]));

    //     // if (temp.length == 1) {
    //     //     setData([{ value: temp[0].zhangs_metric, name: temp[0].antecedents }])
    //     // } else if (temp.length > 1) {


    //     //     temp.map((item) => setData(p => [...p, { value: item.zhangs_metric, name: item.antecedents }]))
    //     // } else {
    //     //     setData([]);
    //     // }
    //     //"consequent support"
    //     //"zhangs_metric"
    //     // setSumPredictedPurchases(0);
    //     // setSumMonetory(0);
    //     // setCustomers(p => [...p, value]);
    //     // const customerList = array.filter(m => m.CustomerID == value);
    //     // if (customerList.length == 1) {
    //     //   setPred(p => [...p, customerList[0].predicted_90_days])
    //     //   setChurn(customerList[0].Churn);
    //     //   setClv(customerList[0].clv);
    //     //   const temp = data.filter(name => name.segmentclv.includes(customerList[0].segmentclv));
    //     //   setNewSegment(temp.slice(0, 10));
    //     //   setNewSegment(p => [...p, {
    //     //     "CustomerID": customerList[0].CustomerID,
    //     //     "frequency": customerList[0].frequency,
    //     //     "recency": customerList[0].recency,
    //     //     "monetary_value": customerList[0].monetary_value,
    //     //     "predicted_90_days": customerList[0].predicted_90_days,
    //     //     "Retention": customerList[0].Retention,
    //     //     "Churn": customerList[0].Churn,
    //     //     "clv": customerList[0].clv,
    //     //     "segmentclv": customerList[0].segmentclv
    //     //   }]);

    //     //   setA(temp.slice(0, 10).map(i => i.CustomerID))
    //     //   setA(p => [...p, customerList[0].CustomerID])
    //     //   setB(temp.slice(0, 10).map(i => i.monetary_value))
    //     //   setB(p => [...p, customerList[0].monetary_value])

    //     //   setVisiblePanel2(true);

    //     //   if (customerList[0].segmentclv == 'Medium') {
    //     //     setSegment("خوشه با ارزش متوسط")
    //     //     setProfile(0.5);
    //     //   } else if (customerList[0].segmentclv == "High") {
    //     //     setSegment("خوشه با ارزش بالا")
    //     //     setProfile(1);
    //     //   } else {
    //     //     setSegment("خوشه با ارزش پایین")
    //     //     setProfile(0);
    //     //   }

    //     //   setSumPredictedPurchases(customerList[0].predicted_90_days.toFixed(2));

    //     //   if (customerList[0].monetary_value == null) {
    //     //     setSumMonetory(0);
    //     //   } else {
    //     //     setSumMonetory(customerList[0].monetary_value);
    //     //   }
    //     // }

    // }

    return (
        <Container fluid className="main-content-container px-4" dir="rtl" >
            <Card small className="h-100" >
                <CardHeader>تحلیل سبد محصول </CardHeader>
                <CardBody>
                    {/* {isLoading == true ? <Loading></Loading>
                        :
                        <> */}
                    {/* <Row>
                        <Col md="4" className="form-group">
                            <div className="form-inline mt-3">
                                <label htmlFor="customer" > فیلتر مشتری</label> */}
                    {/* <FormSelect className="form-control" id="tankhah" name="tankhah" onChange={(e) => changeCustomer(e.target.value)}>
                                    <option value={""}>یک موردانتخاب کنید</option>
                                    {
                                        customerItems.map((item, index) => (
                                            <option key={index}
                                                value={item}>
                                                {item}
                                            </option>
                                        ))
                                    }
                                </FormSelect> */}
                    {/* </div>
                        </Col>
                    </Row> */}
                    {/* {visiblePanel2 == true ?
                                <> */}
                    {/* <Row > */}
                    <Row>
                        <ReactECharts option={option} />
                    </Row>

                    {/* </Row> */}
                    {/* </>
                                : ""} */}
                    {/* </>
                    } */}

                </CardBody>
            </Card>
        </Container>
    )
}

