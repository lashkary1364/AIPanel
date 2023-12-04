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
import GaugeChart from 'react-gauge-chart'

export const CustomerInfo = () => {

  const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
  const accessToken = localStorage.getItem("access-tocken");
  const [customerItems, setCustomerItems] = useState([]);
  const [sumPredictedPurchases, setSumPredictedPurchases] = useState(0);
  const [sumMonetory, setSumMonetory] = useState(0);
  const [array, setArray] = useState([]);
  const [profile, setProfile] = useState(0);
  const [churn, setChurn] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [option, setOption] = useState({});
  const [option1, setOption1] = useState({});
  const [clv, setClv] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [pred, setPred] = useState([]);
  const [newPred, setNewPred] = useState([]);
  const [segment, setSegment] = useState("خوشه با ارزش پایین");
  const [data, setData] = useState([]);
  const [newSegment, setNewSegment] = useState([]);
  const [a, setA] = useState([]);
  const [b, setB] = useState([]);
  const [visiblePanel2, setVisiblePanel2] = useState(false);
  const [newCustomer, setNewCustomer] = useState([]);

  useEffect(() => {
    getCustomers();
  }, [])

  useEffect(() => {

    setOption1({
      textStyle: {
        fontFamily: "cinema",
      },
      title: {
        text: 'ارزش خرید مشتریان هم خوشه',
        textStyle: {
          color: "rgb(140, 17, 197)"
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundarbyGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: a
      },
      series: [
        {
          name: segment,
          type: 'bar',
          data: b,
        }
      ]
    });
  }, [a, b]);

  useEffect(() => {

    console.log("new customer ...");
    console.log(newCustomer);

    setOption({
      textStyle: {
        fontFamily: "cinema",
      },
      title: {
        text: 'مشتریان با بیشترین میزان خرید',
        textStyle: {
          color: "rgb(140, 17, 197)"
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: newCustomer
      },
      series: [
        {
          // name: '2011',
          type: 'bar',
          data: pred,
        }
      ]
    });

  }, [newCustomer])

  const getCustomers = () => {

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
        const arr = JSON.parse(itemsArray).slice(0, 100);
        setArray(arr);
        setCustomerItems([]);
        setData([]);
        setPred([]);
        setCustomers([]);
        setCustomerItems(arr.map(m => m.CustomerID));
        const copyArray = [...arr];
        copyArray.sort((a, b) => {
          return b.predicted_90_days - a.predicted_90_days;
        });

        setCustomers(copyArray.slice(0, 10).map(p => p.CustomerID));
        setPred(copyArray.slice(0, 10).map(p => p.predicted_90_days));

        arr.map(item => {
          setData(p => [...p, {
            "CustomerID": item.CustomerID,
            "frequency": item.frequency,
            "recency": item.recency,
            "monetary_value": item.monetary_value,
            "predicted_90_days": item.predicted_90_days,
            "Retention": item.Retention,
            "Churn": item.Churn,
            "clv": item.clv,
            "segmentclv": item.segmentclv
          }])
        });

        setIsLoading(false);

      }).catch(function (error) {
        setIsLoading(false);
      });
  }

  const changeCustomer = (value) => {

    setSumPredictedPurchases(0);
    setSumMonetory(0);
    setNewCustomer([]);
    setNewCustomer([...customers, value]);
    const customerList = array.filter(m => m.CustomerID == value);
    if (customerList.length == 1) {
      setPred(p => [...p, customerList[0].predicted_90_days]);

      setChurn(customerList[0].Churn);
      setClv(customerList[0].clv);
      const temp = data.filter(name => name.segmentclv.includes(customerList[0].segmentclv));

      setNewSegment(temp.slice(0, 10));
      setNewSegment(p => [...p, {
        "CustomerID": customerList[0].CustomerID,
        "frequency": customerList[0].frequency,
        "recency": customerList[0].recency,
        "monetary_value": customerList[0].monetary_value,
        "predicted_90_days": customerList[0].predicted_90_days,
        "Retention": customerList[0].Retention,
        "Churn": customerList[0].Churn,
        "clv": customerList[0].clv,
        "segmentclv": customerList[0].segmentclv
      }]);

      setA(temp.slice(0, 10).map(i => i.CustomerID))
      setA(p => [...p, customerList[0].CustomerID])
      setB(temp.slice(0, 10).map(i => i.monetary_value))
      setB(p => [...p, customerList[0].monetary_value])

      setVisiblePanel2(true);

      if (customerList[0].segmentclv == 'Medium') {
        setSegment("خوشه با ارزش متوسط")
        setProfile(0.5);
      } else if (customerList[0].segmentclv == "High") {
        setSegment("خوشه با ارزش بالا")
        setProfile(1);
      } else {
        setSegment("خوشه با ارزش پایین")
        setProfile(0);
      }

      setSumPredictedPurchases(customerList[0].predicted_90_days.toFixed(2));

      if (customerList[0].monetary_value == null) {
        setSumMonetory(0);
      } else {
        setSumMonetory(customerList[0].monetary_value);
      }
    }
  }

  return (
    <Container fluid className="main-content-container px-4" dir="rtl" >
      <Card small className="h-100" >
        <CardHeader> اطلاعات مشتری</CardHeader>
        <CardBody className="pt-0">
          {isLoading == true ? <Loading></Loading>
            :
            <>
              <Row>
                <Col md="4" className="form-group">
                  <div className="form-inline mt-3">
                    <label>فیلتر مشتری</label>
                    <FormSelect className="form-control" onChange={(e) => changeCustomer(e.target.value)}>
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
              {visiblePanel2 == true ?
                <>
                  <Row >
                    <Col md="6" className="center-align bold">
                      <h3 className="center-align bold">احتمال ریزش </h3>
                      <GaugeChart id="gauge-chart2"
                        nrOfLevels={10}
                        percent={churn}
                        colors={["#099657", "#bd0829"]}
                        textColor="black" className="center-align bold"
                        style={{ heigh: "100px", width: "500px" }}
                      />
                    </Col>
                    <Col md="6" className="center-align bold">
                      <h3 className="center-align bold">خوشه بندی</h3>
                      <GaugeChart id="gauge-chart2" className="center-align bold"
                        colors={["red", "orange", "green"]}
                        nrOfLevels={3}
                        percent={profile}
                        textColor="black"
                        style={{ heigh: "100px", width: "500px" }}
                        formatTextValue={value => segment}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col><ReactECharts option={option} /></Col>
                    <Col><ReactECharts option={option1} /></Col>
                  </Row>
                </>
                : ""}
            </>
          }

        </CardBody>
      </Card>
    </Container>
  )
}
