import React from 'react'
import {
  Card,
  CardHeader,
  CardBody, Container, Col, FormSelect, Row
} from "shards-react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
import axios from 'axios'
import { useEffect, useState } from 'react';
import { BackHand } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly, faUserAlt, faObjectGroup, faUserCog, faSortAlphaDown } from "@fortawesome/fontawesome-free-solid";

export const CustomerInfo = () => {

  const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
  const accessToken = localStorage.getItem("access-tocken");
  const [customerItems, setCustomerItems] = useState([]);

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

        const resultItems = response.data;
        const itemsArray = resultItems.result;
        console.log(itemsArray);
        setCustomerItems(itemsArray.map(m => m.CustomerID));


      }).catch(function (error) {

        console.log("axois error: " + error);

      });
  }


  const getAllData = (value) => {
    console.log(value)
  }




  return (
    <Container fluid className="main-content-container px-4 mt-3" dir="rtl"  >
      {/* <Row className="page-header mt-2 ">
      <Col lg="12"  >
        <nav className="breadcrumb">
          <a className="breadcrumb-item" href="#">خانه</a>
          <span className="breadcrumb-item active">داشبورد شاخص های کلیدی عملکرد مشتریان</span>
        </nav>
      </Col>
    </Row> */}
      <Card small className="h-100" style={{width:"83%"}}>
        <CardHeader> اطلاعات مشتری</CardHeader>
        <CardBody className="pt-0">
          <Col md="6" className="form-group">
            <div className="form-inline mt-3 mr-3">
              <label htmlFor="customer" className="mr-2"> فیلتر مشتری</label>
              <FormSelect className="form-control" id="tankhah" name="tankhah" onChange={(e) => getAllData(e.target.value)}>
                <option value={""}>یک موردانتخاب کنید</option>
                {
                  customerItems.map((item, index) => (
                    <option key={index}
                      value={item.CustomerID}>
                      {item.CustomerID}
                    </option>
                  ))
                }
              </FormSelect>
            </div>
          </Col>
          <Row>
            <Col md="3">
              <label>ریزش مشتری</label>
              <div className='form-inline' style={{ width: "120px", height: "60px", backgroundColor: "#dfdcdc", borderRadius: "15px" }}>
                <FontAwesomeIcon icon={faSortAlphaDown} className="mr-2 ml-2" />
                <h5 className='ml-3' style={{ paddingTop: "15px" }}>2000</h5>
              </div>
            </Col>
            <Col md="3">
              <label>پیش بینی تعداد خرید </label>
              <div className='form-inline' style={{ width: "120px", height: "60px", backgroundColor: "#dfdcdc", borderRadius: "15px" }}>
                <FontAwesomeIcon icon={faDolly} className="mr-2 ml-2" />
                <h5 className='ml-3' style={{ paddingTop: "15px" }}>2000</h5>
              </div>
            </Col>
            <Col md="3">
              <label>پیش بینی ارزش خرید </label>
              <div className='form-inline' style={{ width: "120px", height: "60px", backgroundColor: "#dfdcdc", borderRadius: "15px" }}>
                <FontAwesomeIcon icon={faObjectGroup} className="mr-2 ml-2" />
                <h5 className='ml-3' style={{ paddingTop: "15px" }}>2000</h5>
              </div>
            </Col>
            <Col md="3">
              <label>خوشه بندی</label>
              <div className='form-inline' style={{ width: "120px", height: "60px", backgroundColor: "#dfdcdc", borderRadius: "15px" }}>
                <FontAwesomeIcon icon={faUserCog} className="mr-2 ml-2" />
                <h5 className='ml-3' style={{ paddingTop: "15px" }}>2000</h5>
              </div>
            </Col>
          </Row>
          <Row>
          <Col md="6" className="form-group">
            <div className="form-inline mt-3 mr-3">
              <label htmlFor="customer" className="mr-2"> فیلتر خوشه</label>
              <FormSelect className="form-control" id="tankhah" name="tankhah" onChange={(e) => getAllData(e.target.value)}>
                <option value={""}>یک موردانتخاب کنید</option>
                {
                  customerItems.map((item, index) => (
                    <option key={index}
                      value={item.CustomerID}>
                      {item.CustomerID}
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
              <div className='form-inline' style={{ width: "120px", height: "60px", backgroundColor: "#dfdcdc", borderRadius: "15px" }}>
                <FontAwesomeIcon icon={faDolly} className="mr-2 ml-2" />
                <h5 className='ml-3' style={{ paddingTop: "15px" }}>2000</h5>
              </div>
            </Col>
            <Col md="3">
              <label>پیش بینی ارزش خرید </label>
              <div className='form-inline' style={{ width: "120px", height: "60px", backgroundColor: "#dfdcdc", borderRadius: "15px" }}>
                <FontAwesomeIcon icon={faObjectGroup} className="mr-2 ml-2" />
                <h5 className='ml-3' style={{ paddingTop: "15px" }}>2000</h5>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  )
}
