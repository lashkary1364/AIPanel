import React from 'react'
import {
  Card,
  CardHeader,
  CardBody, Container, Col, FormSelect, Row
} from "shards-react";
import axios from 'axios'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from "@fortawesome/fontawesome-free-solid";
import { Spinner } from 'react-bootstrap';
import Loading from '../Loading';

export const CustomerInfo = () => {

  const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
  const accessToken = localStorage.getItem("access-tocken");
  const [customerItems, setCustomerItems] = useState([]);
  const [sumPredictedPurchases, setSumPredictedPurchases] = useState(0);
  const [sumMonetory, setSumMonetory] = useState(0);
  const [array, setArray] = useState([]);
  const [profile, setProfile] = useState("ارزش");
  const [churn, setChurn] = useState();
  const [clusterList, setClusterList] = useState([{ Id: 0, Name: "ارزش پایین" }, { Id: 1, Name: "ارزش متوسط" }, { Id: 2, Name: "ارزش بالا" }]);
  const [sumPredictedPurchases1, setSumPredictedPurchases1] = useState(0);
  const [sumMonetory1, setSumMonetory1] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getCustomers();
  }, [])

  const getCustomers = () => {

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
        setArray(arr);
        setCustomerItems(arr.slice(0, 100).map(m => m.CustomerID));
        setIsLoading(false);

      }).catch(function (error) {

        console.log("axois error: " + error);
        setIsLoading(false);
      });
  }


  const changeCustomer = (value) => {
    console.log(value);
    setProfile("ارزش");
    setSumPredictedPurchases(0);
    setSumMonetory(0);


    const customerList = array.filter(m => m.CustomerID == value);

    if (customerList.length == 1) {

      setChurn(customerList[0].churn);
      console.log(customerList[0].predicted_purchases);

      if (customerList[0].Profile == 'low value') {
        setProfile("ارزش پایین");
      } else if (customerList[0].Profile == "medium value") {
        setProfile("ارزش متوسط");
      } else {
        setProfile("ارزش بالا");
      }

      if (customerList[0].predicted_purchases == null) {
        setSumPredictedPurchases(0);
      } else {
        setSumPredictedPurchases(customerList[0].predicted_purchases);
      }

      if (customerList[0].monetary_value == null) {
        setSumMonetory(0);
      } else {
        setSumMonetory(customerList[0].monetary_value);
      }
    }


    //arr.map(item => item.predicted_purchases).reduce((prev, curr) => prev + curr, 0);

  }

  const changeCluster = (value) => {
    console.log(value);
    const customerList = array.filter(m => m.Cluster == value);
    console.log(customerList);
    var countPredictedPurchase = customerList.map(item => item.predicted_purchases).length;
    console.log("count predicted purchase");
    console.log(countPredictedPurchase);
    const sumPredictedPurchases = customerList.map(item => item.predicted_purchases).reduce((prev, curr) => prev + curr, 0);
    const sumMentoryValue = customerList.map(item => item.monetary_value).reduce((prev, curr) => prev + curr, 0);

    var avgPredictedPurchase = sumPredictedPurchases / countPredictedPurchase;
    console.log("avg predicted purchase ...");
    console.log(avgPredictedPurchase);

    var countMonetory = customerList.map(item => item.monetary_value).length;
    console.log("count monetory");
    console.log(countMonetory);
    var avgMonetory = sumMentoryValue / countMonetory;
    console.log("avg mnetory");
    console.log(avgMonetory);

    setSumPredictedPurchases1(avgPredictedPurchase.toLocaleString());
    setSumMonetory1(avgMonetory.toLocaleString());

    // const number = 123456.789;
    // console.log(number.toLocaleString("de-DE"));
    // // → 123.456,789    
    // // Arabic in most Arabic speaking countries uses Eastern Arabic digits
    // console.log(number.toLocaleString("ar-EG"));
    // // → ١٢٣٤٥٦٫٧٨٩    
    // // India uses thousands/lakh/crore separators
    // console.log(number.toLocaleString("en-IN"));
    // console.log(sumMentoryValue.toLocaleString());
    // → 1,23,456.789


  }




  return (
    <Container fluid className="main-content-container px-4 mt-3" dir="rtl"  >
      <Card small className="h-100" >
        <CardHeader> اطلاعات مشتری</CardHeader>
        <CardBody className="pt-0">
          {isLoading == true ? <Loading></Loading>
            // <div className="text-center " style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
            //   <Spinner animation="grow" size="sm" className='color-spinner' />
            //   <Spinner animation="grow" className='color-spinner' />
            //   <div className='text-center color-spinner loading-text' dir="rtl">در حال بارگزاری...</div>
            // </div> 
            :
            <>
              <Row>
                <Col md="6" className="form-group">
                  <div className="form-inline mt-3">
                    <label htmlFor="customer" > فیلتر مشتری</label>
                    <FormSelect className="form-control" id="tankhah" name="tankhah" onChange={(e) => changeCustomer(e.target.value)}>
                      <option value={""}>یک موردانتخاب کنید</option>
                      {
                        customerItems.map((item, index) => (
                          <option key={index}
                            value={item}>
                            {item}
                          </option>
                        ))
                      }
                    </FormSelect>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <label>ریزش مشتری</label>
                  <div className='div-box'>
                    {/* <FontAwesomeIcon icon={faSortAlphaDown} className="mr-2 ml-2" /> */}
                    <h5 className='box-font' >{churn == "yes" ? <><FontAwesomeIcon icon={faThumbsUp} className="yes" ></FontAwesomeIcon><span className='yes ml-2'  >بلی</span></> : <><FontAwesomeIcon icon={faThumbsDown} className="no" ></FontAwesomeIcon><span className='no ml-2' >خیر</span></>}</h5>
                    {/* //' <FontAwesomeIcon icon={faReply} style={{ fontSize: "16pt", color: "#6f0a9d" }} /> <span>بلی</span>:<FontAwesomeIcon icon={faReply} style={{ fontSize: "16pt", color: "#6f0a9d" }} /> <span>خیر</span>}</h5> */}
                  </div>
                </Col>
                <Col md="3">
                  <label>پیش بینی تعداد خرید </label>
                  <div className='div-box'>
                    {/* <FontAwesomeIcon icon={faDolly} className="mr-2 ml-2" /> */}
                    <h5 className='box-font'>{sumPredictedPurchases}</h5>
                  </div>
                </Col>
                <Col md="3">
                  <label>پیش بینی ارزش خرید </label>
                  <div className='div-box'>
                    {/* <FontAwesomeIcon icon={faObjectGroup} className="mr-2 ml-2" /> */}
                    <h5 className='box-font'>{sumMonetory}</h5>
                  </div>
                </Col>
                <Col md="3">
                  <label>خوشه بندی</label>
                  <div className='div-box'>
                    {/* <FontAwesomeIcon icon={faUserCog} className="mr-2 ml-2" /> */}
                    <h5 className='box-font'>{profile}</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="6" className="form-group">
                  <div className="form-inline mt-3 ">
                    <label htmlFor="customer" > فیلتر خوشه</label>
                    <FormSelect className="form-control" id="tankhah" name="tankhah" onChange={(e) => changeCluster(e.target.value)}>
                      <option value={""}>یک موردانتخاب کنید</option>
                      {
                        clusterList.map((item, index) => (
                          <option key={index}
                            value={item.Id}>
                            {item.Name}
                          </option>
                        ))
                      }
                    </FormSelect>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <label>پیش بینی تعداد خرید </label>
                  <div className='div-box'>
                    <h5 className='box-font' >{sumPredictedPurchases1}</h5>
                  </div>
                </Col>
                <Col md="3">
                  <label>پیش بینی ارزش خرید </label>
                  <div className='div-box'>
                    <h5 className='box-font' >
                      {sumMonetory1}
                    </h5>
                  </div>
                </Col>
              </Row>
            </>
          }

        </CardBody>
      </Card>
    </Container>
  )
}
