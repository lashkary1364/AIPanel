import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button
} from "shards-react";
import axios from 'axios'
import "../src/shards-dashboard/styles/slider-style.css"
import { useEffect } from 'react';
import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Flag } from '@material-ui/icons';
import { Spinner } from 'react-bootstrap';

export const TransactionKpI = () => {

  const accessToken = localStorage.getItem("access-tocken");

  const [option, setOption] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [disabled,setDisabled]=useState("")


  const [revenueJun, setRevenueJun] = useState([]);
  const [revenueFeb, setRevenueFeb] = useState([]);
  const [revenueApr, setRevenueApr] = useState([]);
  const [revenueMay, setRevenueMay] = useState([]);
  const [revenueJune, setRevenueJune] = useState([]);
  const [revenueJuly, setRevenueJuly] = useState([]);
  const [revenueAugust, setRevenueAugust] = useState([]);
  const [revenueSept, setRevenueSept] = useState([]);
  const [revenueOct, setRevenueOct] = useState([]);
  const [revenueNov, setRevenueNov] = useState([]);
  const [revenueDec, setRevenueDec] = useState([]);
  const [revenueMarch, setRevenueMarch] = useState([]);

  const [revenueYear, setRevenueYear] = useState([]);
  const [revenueYearJun, setRevenueYearJun] = useState([]);
  const [revenueYearFeb, setRevenueYearFeb] = useState([]);
  const [revenueYearApr, setRevenueYearApr] = useState([]);
  const [revenueYearMay, setRevenueYearMay] = useState([]);
  const [revenueYearJune, setRevenueYearJune] = useState([]);
  const [revenueYearJuly, setRevenueYearJuly] = useState([]);
  const [revenueYearAugust, setRevenueYearAugust] = useState([]);
  const [revenueYearOct, setRevenueYearOct] = useState([]);
  const [revenueYearNov, setRevenueYearNov] = useState([]);
  const [revenueYearDec, setRevenueYearDec] = useState([]);
  const [revenueYearSept, setRevenueYearSept] = useState([]);

  const [year, setYear] = useState(["product"]);
  const [newY, setNewY] = useState([]);
  const [flag, setFlag] = useState(false);
  const [seri, setSeri] = useState([]);

  const [variableMarch, setVariableMarch] = useState({ product: "March" });
  const [variableJun, setVariableJun] = useState({ product: "Junuary" });
  const [variableFeb, setVariableFeb] = useState({ product: "Februray" });
  const [variableApr, setVariableApr] = useState({ product: "April" });
  const [variableMay, setVariableMay] = useState({ product: "May" });
  const [variableJune, setVariableJune] = useState({ product: "June" });
  const [variableJuly, setVariableJuly] = useState({ product: "July" });
  const [variableAugust, setVariableAugust] = useState({ product: "August" });
  const [variableSeptember, setVariableSeptember] = useState({ product: "September" });
  const [variableOctober, setVariableOctober] = useState({ product: "October" });
  const [variableDecember, setVariableDecember] = useState({ product: "December" });
  const [variableNovamber, setVariableNovamber] = useState({ product: "Novamber" });



  useEffect(() => {

    console.log(year);
    const y = year.filter((x, i, a) => a.indexOf(x) == i);
    console.log(y);
    setNewY(y)

  }, [year, setYear]);


  useEffect(() => {
    setSeri([]);
    for (let i = 1; i < newY.length; i++) {
      setSeri(seri => [...seri, { type: "bar" }])
    }
  }, [newY, setNewY])

  /// March month ...
  useEffect(() => {

    revenueYear.map((item, index) => {
      const updatedValue = { [revenueYear[index]]: revenueMarch[index] };

      setVariableMarch({
        ...variableMarch,
        ...updatedValue
      });

      console.log(variableMarch)
    })


    console.log("variable march ...")
    console.log(variableMarch)



    // setOption1({

    //   legend: {},
    //   tooltip: {},
    //   dataset: {
    //     dimensions: ['product', 2015, 2016, 2017],
    //     source: [
    //       //   variable
    //       { 2015: 43.3, 2016: 85.8, 2017: 93.7, product: 'Matcha Latte' },
    //      { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
    //       // { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
    //       // { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
    //     ]
    //   },
    //   xAxis: { type: 'category' },
    //   yAxis: {},
    //   // Declare several bar series, each will be mapped
    //   // to a column of dataset.source by default.
    //   series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]

    // })


    // console.log("option ....")
    // console.log(option)

    // console.log("option1 .....")
    // console.log(option1)

  }, [flag, setFlag, revenueMarch, setRevenueMarch, revenueYear, setRevenueYear])

  /// Jun month ...
  useEffect(() => {
    console.log("revenue year ...")
    console.log(revenueYear)
    revenueYearJun.map((item, index) => {
      const updatedValue = { [revenueYearJun[index]]: revenueJun[index] };

      setVariableJun({
        ...variableJun,
        ...updatedValue
      });
      console.log(variableJun)
    })

    console.log("variable jun ....")
    console.log(variableJun)
  }, [flag, setFlag, revenueJun, setRevenueJun, revenueYearJun, setRevenueYear])

  /// Feb month ...
  useEffect(() => {

    revenueYearFeb.map((item, index) => {
      const updatedValue = { [revenueYearFeb[index]]: revenueFeb[index] };

      setVariableFeb({
        ...variableFeb,
        ...updatedValue
      });

      console.log(variableFeb)
    })


    console.log("variable march ...")
    console.log(variableMarch)

  }, [flag, setFlag, revenueFeb, setRevenueFeb, revenueYearFeb, setRevenueYearFeb])

  /// Apr month ...
  useEffect(() => {

    revenueYearApr.map((item, index) => {
      const updatedValue = { [revenueYearApr[index]]: revenueApr[index] };

      setVariableApr({
        ...variableApr,
        ...updatedValue
      });

      console.log(variableApr)
    })


    console.log("variable march ...")
    console.log(variableApr)

  }, [flag, setFlag, revenueApr, setRevenueApr, revenueYearApr, setRevenueYearApr])

  /// May month ...
  useEffect(() => {

    revenueYearMay.map((item, index) => {
      const updatedValue = { [revenueYearMay[index]]: revenueMay[index] };

      setVariableMay({
        ...variableMay,
        ...updatedValue
      });

      console.log(variableMay)
    })


    console.log("variable march ...")
    console.log(variableMay)

  }, [flag, setFlag, revenueMay, setRevenueMay, revenueYearMay, setRevenueYearMay])

  /// June month ...
  useEffect(() => {

    revenueYearJune.map((item, index) => {
      const updatedValue = { [revenueYearJune[index]]: revenueJune[index] };

      setVariableJune({
        ...variableJune,
        ...updatedValue
      });

      console.log(variableJune)
    })


    console.log("variable June ...")
    console.log(variableJune)

  }, [flag, setFlag, revenueJune, setRevenueJune, revenueYearJune, setRevenueYearJune])

  /// July month ...
  useEffect(() => {

    revenueYearJuly.map((item, index) => {
      const updatedValue = { [revenueYearJuly[index]]: revenueJuly[index] };

      setVariableJuly({
        ...variableJuly,
        ...updatedValue
      });

      console.log(variableJuly)
    })


    console.log("variable June ...")
    console.log(variableJune)

  }, [flag, setFlag, revenueJuly, setRevenueJuly, revenueYearJuly, setRevenueYearJuly])

  ///  August month ...
  useEffect(() => {

    revenueYearAugust.map((item, index) => {
      const updatedValue = { [revenueYearAugust[index]]: revenueAugust[index] };

      setVariableAugust({
        ...variableAugust,
        ...updatedValue
      });

      console.log(variableAugust)
    })


    console.log("variable August ...")
    console.log(variableAugust)

  }, [flag, setFlag, revenueAugust, setRevenueAugust, revenueYearAugust, setRevenueYearAugust])

  ///  September month ...
  useEffect(() => {

    revenueYearSept.map((item, index) => {
      const updatedValue = { [revenueYearSept[index]]: revenueSept[index] };

      setVariableSeptember({
        ...variableSeptember,
        ...updatedValue
      });

      console.log(variableSeptember)
    })


    console.log("variable september ...")
    console.log(variableSeptember)

  }, [flag, setFlag, revenueSept, setRevenueSept, revenueYearSept, setRevenueYearSept])

  /// June month ...
  useEffect(() => {

    revenueYearJune.map((item, index) => {
      const updatedValue = { [revenueYearJune[index]]: revenueJune[index] };

      setVariableJune({
        ...variableJune,
        ...updatedValue
      });

      console.log(variableJune)
    })


    console.log("variable June ...")
    console.log(variableJune)

  }, [flag, setFlag, revenueJune, setRevenueJune, revenueYearJune, setRevenueYearJune])

  ///July month ...
  useEffect(() => {

    revenueYearJuly.map((item, index) => {
      const updatedValue = { [revenueYearJuly[index]]: revenueJuly[index] };

      setVariableJuly({
        ...variableJuly,
        ...updatedValue
      });

      console.log(variableJuly)
    })


    console.log("variable June ...")
    console.log(variableJuly)

  }, [flag, setFlag, revenueJuly, setRevenueJuly, revenueYearJuly, setRevenueYearJuly])

  ///October month ...
  useEffect(() => {

    revenueYearOct.map((item, index) => {
      const updatedValue = { [revenueYearOct[index]]: revenueOct[index] };

      setVariableOctober({
        ...variableOctober,
        ...updatedValue
      });

      console.log(variableOctober)
    })


    console.log("variable June ...")
    console.log(variableOctober)

  }, [flag, setFlag, revenueOct, setRevenueOct, revenueYearOct, setRevenueYearOct])

  //December month ...
  useEffect(() => {

    revenueYearDec.map((item, index) => {
      const updatedValue = { [revenueYearDec[index]]: revenueDec[index] };

      setVariableDecember({
        ...variableDecember,
        ...updatedValue
      });

      console.log(variableDecember)
    })


    console.log("variable June ...")
    console.log(variableDecember)

  }, [flag, setFlag, revenueDec, setRevenueDec, revenueYearDec, setRevenueYearDec])

  //Novamber month ...
  useEffect(() => {

    revenueYearNov.map((item, index) => {
      const updatedValue = { [revenueYearNov[index]]: revenueNov[index] };

      setVariableNovamber({
        ...variableNovamber,
        ...updatedValue
      });

      console.log(variableNovamber)
    })


    console.log("variable Novamber ...")
    console.log(variableNovamber)

  }, [flag, setFlag, revenueNov, setRevenueNov, revenueYearNov, setRevenueYearNov])

  useEffect(() => {
    setOption({
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: newY,// ['product', 2015, 2016, 2017],
        source: [

          variableJun,
          variableFeb,
          variableMarch,
          variableApr,
          variableMay,
          variableJune,
          variableJuly,
          variableAugust,
          variableSeptember,
          variableOctober,
          variableNovamber,
          variableDecember


        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: seri//[{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },{ type: 'bar' }, { type: 'bar' }] 
      //[{ type:'bar'}, { type:'bar'}, {type: 'bar'}]

    })

    setIsLoading(false)
    setDisabled("")
  }, [variableMarch, variableJun, variableFeb, variableApr, variableMay, variableJune, variableJuly, variableNovamber, variableAugust, variableDecember, variableSeptember, variableAugust])

  const getTransactionKPI = () => {
    setIsLoading(true)
    setDisabled("disabled")
    axios(
      {
        url: "http://82.115.24.35:8000/get_transaction_kpis",
        method: "get",
        headers:
        {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data"
        },
      }).then(function (response) {


        const resultItems = response.data;
        const itemsArray = resultItems.result;
        console.log("itemsArray")
        console.log(itemsArray)
        const arr = JSON.parse(itemsArray)

        console.log(arr)

        arr.map(item => {

          setYear(year => [...year, item.year])


          if (item.month == 1) {

            setRevenueYearJun(revenueYearJun => [...revenueYearJun, item.year])
            setRevenueJun(revenueJun => [...revenueJun, item.Revenue])

          } else if (item.month == 2) {

            setRevenueYearFeb(revenueYearFeb => [...revenueYearFeb, item.year])
            setRevenueFeb(revenueFeb => [...revenueFeb, item.Revenue])

          } else if (item.month == 3) {

            setRevenueYear(revenueYear => [...revenueYear, item.year])
            setRevenueMarch(revenueMarch => [...revenueMarch, item.Revenue])

          } else if (item.month == 4) {

            setRevenueYearApr(revenueYearApr => [...revenueYearApr, item.year])
            setRevenueApr(revenueApr => [...revenueApr, item.Revenue])

          } else if (item.month == 5) {

            setRevenueYearMay(revenueYearMay => [...revenueYearMay, item.year])
            setRevenueMay(revenueMay => [...revenueMay, item.Revenue])


          } else if (item.month == 6) {

            setRevenueYearJune(revenueYearJune => [...revenueYearJune, item.year])
            setRevenueJune(revenueJune => [...revenueJune, item.Revenue])

          } else if (item.month == 7) {

            setRevenueYearJuly(revenueYearJuly => [...revenueYearJuly, item.year])
            setRevenueJuly(revenueJuly => [...revenueJuly, item.Revenue])

          } else if (item.month == 8) {


            setRevenueYearAugust(revenueYearAugust => [...revenueYearAugust, item.year])
            setRevenueAugust(revenueAugust => [...revenueAugust, item.Revenue])

          } else if (item.month == 9) {

            setRevenueYearSept(revenueYearSept => [...revenueYearSept, item.year])
            setRevenueSept(revenueSept => [...revenueSept, item.Revenue])

          } else if (item.month == 10) {

            setRevenueYearOct(revenueYearOct => [...revenueYearOct, item.year])
            setRevenueOct(revenueOct => [...revenueOct, item.Revenue])

          } else if (item.month == 11) {

            setRevenueYearNov(revenueYearNov => [...revenueYearNov, item.year])
            setRevenueNov(revenueNov => [...revenueNov, item.Revenue])


          } else {

            setRevenueYearDec(revenueYearDec => [...revenueYearDec, item.year])
            setRevenueDec(revenueDec => [...revenueDec, item.Revenue])


          }


        });

        setFlag(true);


      }).catch(function (error) {
        console.log("axois error: " + error);
        setIsLoading(false);
        setDisabled("")
      })



  }



  return (

    <Container fluid className="main-content-container px-4" dir="rtl" >
      <Row className="page-header mt-2 ">
        <Col lg="12"  >
          <nav className="breadcrumb">
            <a className="breadcrumb-item" href="#">خانه</a>
            <span className="breadcrumb-item active">داشبورد شاخص های کلیدی عملکرد</span>
          </nav>
        </Col>
      </Row>
      <Card small className="h-100">
        <CardHeader>نمودار درآمد محصول  به تفکیک سال و ماه</CardHeader>
        <CardBody className="pt-0">
          <Button type="button"  className='btn btn-secondary'  disabled={disabled}   onClick={getTransactionKPI}>محاسبه</Button>

          {isLoading == true ? <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
            {/* <Spinner animation="border" role="status" ></Spinner> */}
            <Spinner animation="grow" size="sm" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <div className='text-primary text-center' dir="rtl">در حال بارگزاری...</div>
          </div> :
            <ReactECharts option={option} />
          }


        </CardBody>
      </Card>

    </Container>
  )
}
