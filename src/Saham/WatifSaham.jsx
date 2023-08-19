import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
  Container, Row, Col, ListGroup, ListGroupItem, Card, Button, CardHeader, CardBody
} from "shards-react";
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import ReactECharts from 'echarts-for-react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import '../assets/slider.css'
import { Spinner } from 'react-bootstrap';
import MainNavbar from '../components/layout/MainNavbar/MainNavbar';
import Swal from 'sweetalert2';
import Loading from '../Loading';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const WatifSaham = () => {

  const accessToken = localStorage.getItem("access-tocken");
  const [shakhes, setShakhes] = React.useState('rsi_change');
  const [chartName, setChartName] = React.useState("");

  const [neutral, setNeutral] = useState(0);
  const [newNeutral, setNewNeutral] = useState(0);

  const [overbought, setOverbought] = useState(0);
  const [newOverbought, setNewOverbought] = useState(0);

  const [oversold, setOversold] = useState(0);
  const [newOversold, setNewOversold] = useState(0);

  const [negative, setNegative] = useState(0);
  const [newNegative, setNewNegative] = useState(0);

  const [positive, setPositive] = useState(0);
  const [newPositive, setNewPositive] = useState(0);

  const [option, setOption] = useState({});

  const serverAddress = process.env.REACT_APP_SERVER_ADRESS;

  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [isChartVisible, setIsChartVisible] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState("hidden");

  // const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setShakhes(event.target.value);
    console.log(event.target.value)
  };

  useEffect(() => {

    setOption({});
    setOption({
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', 'قبل', 'بعد'],
          ['neutral', neutral, newNeutral],
          ['overbought', overbought, newOverbought],
          ['oversold', oversold, newOversold],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }]
    });
  }, [newOversold, overbought, oversold, newOversold, neutral, newNeutral]);


  useEffect(() => {

    setOption({});
    setOption({
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', 'قبل', 'بعد'],
          ['neutral', neutral, newNeutral],
          ['negative', negative, newNegative],
          ['positive', positive, newPositive],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }]
    });


  }, [newNegative, negative, positive, newPositive, neutral, newNeutral]);


  const handleRsiChange = () => {
    setShakhes("rsi_change");
  }

  // const handleChange = () => {
  //   setShakhes("change");
  // }


  const bbn_brandwagen = [

    {
      value: 0,
      label: 'خیر',
    },
    {
      value: 100,
      label: 'بلی',
    },
  ];

  const bbn_total_index = [
    {
      value: 0,
      label: 'مثبت',
    },
   
    {
      value: 50,
      label: 'خنثی',
    },
    {
      value: 100,
      label: 'منفی',
    },
  ]

  const bbn_attitude = [
    {
      value: 0,
      label: 'مثبت',
    },
    {
      value: 50,
      label: 'خنثی',
    },
    {
      value: 100,
      label: 'منفی',
    }]

  const bbn_news = [{
    value: 0,
    label: 'مثبت',
  },
  {
    value: 50,
    label: 'خنثی',
  },
  {
    value: 100,
    label: 'منفی',
  }]

  const bbn_mood = [{
    value: 0,
    label: 'پشیمان',
  },
  {
    value: 25,
    label: 'صبر',
  },
  {
    value: 50,
    label: 'خسته',
  },
  {
    value: 100,
    label: 'خنثی',
  }]

  const bbn_decision = [{
    value: 0,
    label: 'خرید',
  },
  {
    value: 50,
    label: 'فروش',
  },
  {
    value: 100,
    label: 'خنثی',
  },]

  const bbn_sentiment = [{
    value: 0,
    label: 'مثبت',
  },
  {
    value: 50,
    label: 'خنثی',
  },
  {
    value: 100,
    label: 'منفی',
  },]

  const setChart = (form) => {

    if (accessToken == null)
      window.location.replace('/');

    setIsLoadingVisible(true);
    setIsDivVisible("visible");

    axios(
      {
        url: serverAddress + 'bbn_query',
        method: "post",
        headers:
        {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data"
        },
        data: form
      }).then(function (response) {

        const resultItems = response.data;
        const itemsArray = resultItems.result;
        const arr = JSON.parse(itemsArray);

        if (shakhes == "rsi_change") {
          arr.map(function (item, index) {

            if (item.rsi_change == "neutral") {

              setNeutral(newNeutral);
              setNewNeutral(item.p);

            } else if (item.rsi_change == "overbought") {

              setOverbought(newOverbought);
              setNewOverbought(item.p);

            } else if (item.rsi_change == "oversold") {

              setOversold(newOversold);
              setNewOversold(item.p);

            }
          });


          // setOption({});
          // setOption({
          //   legend: {},
          //   tooltip: {},
          //   dataset: {
          //     source: [
          //       ['product', 'قبل', 'بعد'],
          //       ['neutral', neutral, newNeutral],
          //       ['overbought', overbought, newOverbought],
          //       ['oversold', oversold, newOversold],
          //     ]
          //   },
          //   xAxis: { type: 'category' },
          //   yAxis: {},
          //   series: [{ type: 'bar' }, { type: 'bar' }]
          // });

          // setIsLoadingVisible(false);
          // setIsChartVisible(true);
          // setIsDivVisible("visible");

          // return 0;
        }

        if (shakhes == "change") {

          arr.map(function (item, index) {
            if (item.change == "neutral") {

              setNeutral(newNeutral);
              setNewNeutral(item.p);

            } else if (item.change == "negative") {

              setNegative(newNegative);
              setNewNegative(item.p);

            } else if (item.change == "positive") {

              setPositive(newPositive);
              setNewPositive(item.p);
            }

          });


          // setIsLoadingVisible(false);
          // setIsChartVisible(true);
          // setIsDivVisible("visible");
          // return 0;
        }

        setIsLoadingVisible(false);
        setIsChartVisible(true);
        setIsDivVisible("visible");

      }).catch(function (error) {
        if (error.response) {

          if (error.response.status == 401)
            window.location.replace('/');

        }

        setIsLoadingVisible(false);
        setIsChartVisible(false);
        setIsDivVisible("hidden");

      });
  }

  const bbn_brandwagenText = (value) => {
    return value;
  }

  const bbn_total_index_Text = (value) => {
    return value;
  }

  const bbn_attitude_Text = (value) => {
    return value;
  }

  const bbn_news_Text = (value) => {
    return value;
  }

  const bbn_mood_Text = (value) => {
    return value;
  }

  const bbn_decision_Text = (value) => {
    return value;
  }

  const bbn_sentiment_Text = (value) => {
    return value;
  }

  const bbn_brandwagen_Format = (value) => {
    return bbn_brandwagen.findIndex((mark) => mark.value === value) + 1;
  }

  const bbn_total_index_Format = (value) => {
    return bbn_total_index.findIndex((mark) => mark.value === value) + 1;
  }

  const bbn_attitude_Format = (value) => {
    return bbn_attitude.findIndex((mark) => mark.value === value) + 1;
  }

  const bbn_news_Format = (value) => {
    return bbn_news.findIndex((mark) => mark.value === value) + 1;
  }

  const bbn_mood_Format = (value) => {
    return bbn_mood.findIndex((mark) => mark.value === value) + 1;
  }

  const bbn_decision_Format = (value) => {
    return bbn_decision.findIndex((mark) => mark.value === value) + 1;
  }

  const bbn_sentiment_Format = (value) => {
    return bbn_sentiment.findIndex((mark) => mark.value === value) + 1;
  }

  const bbn_brandwagen_handleChange = (event, newValue, activeThumb) => {

    setIsChartVisible(false);
    setChartName("نمودار رفتار توده ای");
    setOption({});
    const form = new FormData();
    form.append("asset_id", "14447");
    form.append("var_name", "bbn_bandwagen");

    switch (newValue) {
      case 0:
        form.append("var_value", "negative");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 100:
        form.append("var_value", "positive");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      default:
        form.append("var_value", "negative");
        form.append("target", shakhes);
        setChart(form);
        return newValue;
    }
  }

  const bbn_total_index_handleChange = (event, newValue, activeThumb) => {

    setIsChartVisible(false);
    setChartName("نمودار شاخص کل")
    setOption({});
    const form = new FormData();
    form.append("asset_id", "14447");
    form.append("var_name", "bbn_total_index");

    switch (newValue) {
      case 0:
        form.append("var_value", "positive");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 50:
        form.append("var_value", "negative");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 100:
        form.append("var_value", "neutral");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      default:
        form.append("var_value", "positive");
        form.append("target", shakhes);
        setChart(form);
        return newValue;
    }

  }

  const bbn_attitude_handleChange = (event, newValue, activeThumb) => {

    setIsChartVisible(false)
    setChartName("نمودار نگرش")
    setOption({});
    const form = new FormData();
    form.append("asset_id", "14447");
    form.append("var_name", "bbn_attitude");

    switch (newValue) {      
      case 0:
        form.append("var_value", "positive");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 50:
         form.append("var_value", "neutral");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 100:
      
      form.append("var_value", "negative");
      form.append("target", shakhes);
      setChart(form);
      return newValue;

      default:
        form.append("var_value", "positive");
        form.append("target", shakhes);
        setChart(form);
        return newValue;
    }

  }

  const bbn_news_handleChange = (event, newValue, activeThumb) => {

    setIsChartVisible(false)
    setChartName("نمودار اخبار");
    setOption({});

    const form = new FormData();
    form.append("asset_id", "14447");
    form.append("var_name", "bbn_news");


    switch (newValue) {
      case 0:
        form.append("var_value", "positive");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 50:
        form.append("var_value", "negative");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 100:
        form.append("var_value", "neutral");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      default:
        form.append("var_value", "positive");
        form.append("target", shakhes);
        setChart(form);
        return newValue;
    }
  }

  const bbn_mood_handleChange = (event, newValue, activeThumb) => {

    setIsChartVisible(false)
    setChartName("نمودار حالت");
    const form = new FormData();
    form.append("asset_id", "14447");
    form.append("var_name", "bbn_mood");

    switch (newValue) {
      case 0:
        form.append("var_value", "regret");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 25:
        form.append("var_value", "patient");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 50:
        form.append("var_value", "bored");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 100:
        form.append("var_value", "neutral");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      default:
        form.append("var_value", "neutral");
        setChart(form);
        return newValue;

    }

  }

  const bbn_decision_handleChange = (event, newValue, activeThumb) => {

    setIsChartVisible(false)
    setChartName("نمودار تصمیم");
    setOption({});
    const form = new FormData();
    form.append("asset_id", "14447");
    form.append("var_name", "bbn_mood");

    switch (newValue) {
      case 0:
        form.append("var_value", "buy");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 50:
        form.append("var_value", "sale");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 100:
        form.append("var_value", "neutral");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      default:
        form.append("var_value", "neutral");
        form.append("target", shakhes);
        setChart(form);
        return newValue;
    }
  }

  const bbn_sentiment_handleChange = (event, newValue, activeThumb) => {

    setIsChartVisible(false);
    setChartName("نمودار احساسات");
    setOption({});
    const form = new FormData();
    form.append("asset_id", "14447");
    form.append("var_name", "bbn_sentiment");


    switch (newValue) {
      case 0:
        form.append("var_value", "positive");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 50:
        form.append("var_value", "negative");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      case 100:
        form.append("var_value", "neutral");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      default:
        form.append("var_value", "positive");
        form.append("target", shakhes);
        setChart(form);
        return newValue;
    }

  }



  return (
    <div>
      {/* <MainNavbar ></MainNavbar> */}
      <Container fluid className="main-content-container px-4 mt-3" dir="rtl" >
        <Card small className="h-100" >
          <CardHeader>واتیف سهام</CardHeader>
          <CardBody className="pt-0">
            {/* <ListGroup flush>
            <ListGroupItem > */}
            <Row>
              <Col md="4" >
                <Col>
                  <FormControl>
                    {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
                    <RadioGroup  row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group" onChange={(e)=>handleChange(e)} value={shakhes} >
                     
                      <FormControlLabel value="rsi_change" control={<Radio />} label="شاخص rsi" color="#540d7b" />
                      <FormControlLabel value="change" control={<Radio />} label="قیمت" color="#540d7b" />
                    </RadioGroup>
                  </FormControl>
                </Col>
                {/* <Col>                   
                    <button className='btn-watif'    value="rsi_change" onClick={handleRsiChange}>شاخص rsi</button>
                    <button className="btn-watif" onClick={handleChange}>قیمت</button>
                  </Col> */}
                <Col>
                  <label className='lable-watif'>رفتار توده ای</label>
                  <Box>
                    <Slider style={{ fontFamily: "iransans", fontSize: "11px" }}
                      aria-label="Restricted values"
                      defaultValue={0}
                      valueLabelFormat={bbn_brandwagen_Format}
                      getAriaValueText={bbn_brandwagenText}
                      step={null}
                      onChange={bbn_brandwagen_handleChange}
                      marks={bbn_brandwagen}
                    />
                  </Box>
                </Col>

                <Col >
                  <label className='lable-watif'>شاخص کل</label>
                  <Box >
                    <Slider
                      defaultValue={0}
                      valueLabelFormat={bbn_total_index_Format}
                      getAriaValueText={bbn_total_index_Text}
                      onChange={bbn_total_index_handleChange}
                      step={null}
                      marks={bbn_total_index}
                    />
                  </Box>
                </Col>

                <Col >
                  <label className='lable-watif'>نگرش</label>
                  <Box >
                    <Slider
                      defaultValue={0}
                      valueLabelFormat={bbn_attitude_Format}
                      getAriaValueText={bbn_attitude_Text}
                      onChange={bbn_attitude_handleChange}
                      step={null}
                      marks={bbn_attitude}
                    />
                  </Box>
                </Col>

                <Col >
                  <label className='lable-watif'>اخبار</label>
                  <Box >
                    <Slider
                      defaultValue={0}
                      valueLabelFormat={bbn_news_Format}
                      getAriaValueText={bbn_news_Text}
                      onChange={bbn_news_handleChange}
                      step={null}
                      marks={bbn_news}
                    />
                  </Box>
                </Col>

                <Col >
                  <label className='lable-watif'>حالت</label>
                  <Box >
                    <Slider
                      defaultValue={0}
                      valueLabelFormat={bbn_mood_Format}
                      getAriaValueText={bbn_mood_Text}
                      onChange={bbn_mood_handleChange}
                      step={null}
                      marks={bbn_mood}
                    />
                  </Box>
                </Col>

                <Col >
                  <label className='lable-watif'>تصمیم</label>
                  <Box >
                    <Slider
                      defaultValue={0}
                      valueLabelFormat={bbn_decision_Format}
                      getAriaValueText={bbn_decision_Text}
                      onChange={bbn_decision_handleChange}
                      step={null}
                      marks={bbn_decision}
                    />
                  </Box>
                </Col>

                <Col>
                  <label className='lable-watif'>احساسات</label>
                  <Box >
                    <Slider
                      defaultValue={0}
                      valueLabelFormat={bbn_sentiment_Format}
                      getAriaValueText={bbn_sentiment_Text}
                      onChange={bbn_sentiment_handleChange}
                      step={null}
                      marks={bbn_sentiment}
                    />
                  </Box>
                </Col>

              </Col>
              <Col md="8" >

                <div style={{ width: "90%", height: "80%", position: "absolute", top: "50%", transform: "translateY(-50%)", borderRadius: "5px", border: "2px solid #dbd7d9", margin: "20px", visibility: isDivVisible }}>
                  {isLoadingVisible && <Loading></Loading>}
                  {isChartVisible ? <label className='text-center d-flex justify-content-center chart-title' >{chartName}</label>
                    : ''
                  }
                  {isChartVisible ? <ReactECharts style={{ margin: "50px" }} option={option} /> : ""}
                </div>
              </Col>
            </Row>
            {/* </ListGroupItem>
          </ListGroup> */}
          </CardBody>
        </Card>
        <br/>
      </Container>
    </div>
  )
}

