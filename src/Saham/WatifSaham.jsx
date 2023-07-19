import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
  Container, Row, Col, ListGroup, ListGroupItem, Card, Button
} from "shards-react";
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import ReactECharts from 'echarts-for-react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import '../assets/slider.css'
import { Spinner } from 'react-bootstrap';
import MainNavbar from '../components/layout/MainNavbar/MainNavbar';

 

export const WatifSaham = () => {

  const accessToken = localStorage.getItem("access-tocken");
  const [shakhes, setShakhes] = React.useState('rsi_change');
  const [chartName, setChartName] = React.useState("");

  const handleChange = (event, newShakhes) => {
    setShakhes(newShakhes);
  };

  const [option, setOption] = useState({});
  const [option1, setOption1] = useState({});
  const [dataChart, setDataChart] = useState([]);

  const [x, setX] = useState([]);
  const [y, setY] = useState([]);

  const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [isChartVisible, setIsChartVisible] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState("hidden")

  const signOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.replace('/login');
  }


  useEffect(() => {

    setOption({
      color:"rgb(182, 94, 223)",
      xAxis: {
        type: 'category',
        data: x
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: y,
          type: 'bar'
        }
      ]
    });

    setOption1({
      color:["rgb(107, 54, 132)" , "rgb(173, 15, 240)" , "rgb(213, 124, 251)" ],
      // title: {
      //  // text: chartName,
      //   //subtext: 'Fake Data',
      //   left: 'center'
      // },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: dataChart,
          // [
          //   data.map((item, index) => { { value = item.x, name = item.y } })
          // ],

          //{ value: 735, name: 'Direct' },
          // { value: 580, name: 'Email' },
          // { value: 484, name: 'Union Ads' },
          // { value: 300, name: 'Video Ads' }
          // ],

          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });

  }, [x, y, setX, setY, dataChart, setDataChart]);

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
      label: 'منفی',
    },
    {
      value: 100,
      label: 'خنثی',
    }
  ]

  const bbn_attitude = [
    {
      value: 0,
      label: 'مثبت',
    },
    {
      value: 50,
      label: 'منفی',
    },
    {
      value: 100,
      label: 'خنثی',
    }]

  const bbn_news = [{
    value: 0,
    label: 'مثبت',
  },
  {
    value: 50,
    label: 'منفی',
  },
  {
    value: 100,
    label: 'خنثی',
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
    label: 'منفی',
  },
  {
    value: 100,
    label: 'خنثی',
  },]

  const setChart = (form) => {

    if (accessToken == null)
      window.location.replace('/')

    setIsLoadingVisible(true)
    setIsDivVisible("visible")
    console.log("form:")
    console.log(form)

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

        console.log("bbn_query response:");
        console.log(response.data);

        const resultItems = response.data;
        console.log(resultItems.result);
        const itemsArray = resultItems.result;
        const arr = JSON.parse(itemsArray)
        console.log(arr)

        setX([]);
        setY([]);
        setDataChart([]);
        // setData([item]);

        if (shakhes == "rsi_change") {

          arr.map((item, index) => {
            console.log(index);
            console.log(item);
            // setChartData(chartData => [...chartData, { "rsi_change": item.rsi_change, "p": item.p }])
            setX(x => [...x, item.rsi_change]);
            setY(y => [...y, item.p]);
            setDataChart(dataChart => [...dataChart, { value: item.p, name: item.rsi_change }]);
          });

        } else {
          arr.map((item, index) => {
            console.log(index)
            console.log(item)
            //  setChartData(chartData => [...chartData, { "change": item.rsi_change, "p": item.p }])
            setX(x => [...x, item.change])
            setY(y => [...y, item.p])
            setDataChart(dataChart => [...dataChart, { value: item.p, name: item.change }]);

          });
        }

        console.log("data of charts ...")
        console.log(dataChart);
        setIsLoadingVisible(false);
        setIsChartVisible(true);
        setIsDivVisible("visible")

        console.log(x);
        console.log(y);

        // setIsLoadingVisible(false)
        // setIsChartVisible(true)
      }).catch(function (error) {
        if (error.response) {

          if (error.response.status == 401)
            window.location.replace('/')

          console.log(error.response.status);
          console.log(error.message);
          console.log(error.response.headers);
          console.log(error.response.data);
        }

        console.log("axois error: ");
        console.log(error)
        setIsLoadingVisible(false)
        setIsChartVisible(false)
        setIsDivVisible("hidden")
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
    setX([]);
    setY([]);
    setDataChart([]);
    setOption({});
    setOption1({});
    console.log("handleChange_bbn_brandwagen")
    console.log(newValue);
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

    setIsChartVisible(false)
    setChartName("نمودار شاخص کل")
    setX([])
    setY([])
    setDataChart([]);
    setOption({})
    setOption1({})
    console.log("bbn_total_index_handleChange")
    console.log(newValue);
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
    setX([])
    setY([])
    setDataChart([]);
    setOption({});
    setOption1({});

    console.log("bbn_total_index_handleChange")
    console.log(newValue);

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

  const bbn_news_handleChange = (event, newValue, activeThumb) => {

    setIsChartVisible(false)
    setChartName("نمودار اخبار")
    setX([])
    setY([])
    setDataChart([]);
    setOption({})
    setOption1({})
    console.log("bbn_total_index_handleChange")
    console.log(newValue);

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
    setChartName("نمودار حالت")
    setX([]);
    setY([]);
    setDataChart([]);

    setOption({})
    setOption1({})
    console.log("bbn_total_index_handleChange")
    console.log(newValue);

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
    setX([]);
    setY([]);
    setDataChart([]);

    setOption({});
    setOption1({});
    console.log("bbn_decision_handleChange")
    console.log(newValue);
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

    setIsChartVisible(false)
    setChartName("نمودار احساسات")
    setX([])
    setY([])
    setDataChart([]);
    setOption({})
    setOption1({})
    console.log("bbn_decision_handleChange")
    console.log(newValue);
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

  const option2 = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <div>
      {/* <NavbarWatif></NavbarWatif> */}
      <MainNavbar ></MainNavbar>
      <Container fluid className="main-content-container px-4" style={{marginTop:"50px"}}>
          <Card small className="mb-2">
          <ListGroup flush>
            <ListGroupItem >
              <Row>
                <Col md="4" >
                      <Col>
                        <ToggleButtonGroup className='d-flex justify-content-center'
                          color="primary"
                          value={shakhes}
                          exclusive
                          onChange={handleChange}
                          aria-label="Platform">
                          <ToggleButton  className="btn-watif" value="rsi_change btn-watif" >شاخص rsi</ToggleButton>
                          <ToggleButton value="change" className="btn-watif">قیمت</ToggleButton>
                        </ToggleButtonGroup>
                      </Col>
                      <Col >
                        <label className='lable-watif'>رفتار توده ای</label>
                        <Box sx={{ width: 400, padding: '5px', marginRight: "10px" }}>
                          <Slider style={{ fontFamily: "iransans", fontSize: "11px" }}
                            aria-label="Restricted values"
                            defaultValue={0}
                            valueLabelFormat={bbn_brandwagen_Format}
                            getAriaValueText={bbn_brandwagenText}
                            step={null}
                            onChange={bbn_brandwagen_handleChange}
                            // valueLabelDisplay="auto"
                            marks={bbn_brandwagen}
                          />
                        </Box>
                      </Col>

                      <Col >
                        <label className='lable-watif'>شاخص کل</label>
                        <Box sx={{ width: 400, padding: '5px', marginRight: "10px" }}>
                          <Slider
                            // aria-label="Restricted values"
                            defaultValue={0}
                            valueLabelFormat={bbn_total_index_Format}
                            getAriaValueText={bbn_total_index_Text}
                            onChange={bbn_total_index_handleChange}
                            step={null}
                            // valueLabelDisplay="auto"
                            marks={bbn_total_index}
                          />
                        </Box>
                      </Col>

                      <Col >
                        <label className='lable-watif'>نگرش</label>
                        <Box sx={{ width: 400, padding: '5px', marginRight: "10px" }}>
                          <Slider
                            // aria-label="Restricted values"
                            defaultValue={0}
                            valueLabelFormat={bbn_attitude_Format}
                            getAriaValueText={bbn_attitude_Text}
                            onChange={bbn_attitude_handleChange}
                            step={null}
                            // valueLabelDisplay="auto"
                            marks={bbn_attitude}
                          />
                        </Box>
                      </Col>

                      <Col >
                        <label className='lable-watif'>اخبار</label>
                        <Box sx={{ width: 400, padding: '5px', marginRight: "10px" }}>
                          <Slider
                            // aria-label="Restricted values"
                            defaultValue={0}
                            valueLabelFormat={bbn_news_Format}
                            getAriaValueText={bbn_news_Text}
                            onChange={bbn_news_handleChange}
                            step={null}
                            // valueLabelDisplay="auto"
                            marks={bbn_news}
                          />
                        </Box>
                      </Col>

                      <Col >
                        <label className='lable-watif'>حالت</label>
                        <Box sx={{ width: 400, padding: '5px', marginRight: "10px" }}>
                          <Slider
                            // aria-label="Restricted values"
                            defaultValue={0}
                            valueLabelFormat={bbn_mood_Format}
                            getAriaValueText={bbn_mood_Text}
                            onChange={bbn_mood_handleChange}
                            step={null}
                            // valueLabelDisplay="auto"
                            marks={bbn_mood}
                          />
                        </Box>
                      </Col>

                      <Col >
                        <label className='lable-watif'>تصمیم</label>
                        <Box sx={{ width: 400, padding: '5px', marginRight: "10px" }}>
                          <Slider
                            // aria-label="Restricted values"
                            defaultValue={0}
                            valueLabelFormat={bbn_decision_Format}
                            getAriaValueText={bbn_decision_Text}
                            onChange={bbn_decision_handleChange}
                            step={null}
                            // valueLabelDisplay="auto"
                            marks={bbn_decision}
                          />
                        </Box>
                      </Col>

                      <Col>
                        <label className='lable-watif'>احساسات</label>
                        <Box sx={{ width: 400, padding: '5px', marginRight: "10px" }}>
                          <Slider
                            // aria-label="Restricted values"
                            defaultValue={0}
                            valueLabelFormat={bbn_sentiment_Format}
                            getAriaValueText={bbn_sentiment_Text}
                            onChange={bbn_sentiment_handleChange}
                            step={null}
                            // valueLabelDisplay="auto"
                            marks={bbn_sentiment}
                          />
                        </Box>
                      </Col>
                 
                </Col>
                <Col md="8" >

                  <div style={{ borderRadius: "5px", border: "2px solid #dbd7d9", padding: "20px", visibility: isDivVisible }}>

                    {isLoadingVisible && <div className="text-center" style={{ paddingTop: "50px", margin: "auto", width: "50%" }} >
                      {/* <Spinner animation="border" role="status" ></Spinner> */}
                      <Spinner animation="grow" size="sm" variant="secondary" />
                      <Spinner animation="grow" variant="secondary" />
                      <div className='text-secondary text-center' dir="rtl">در حال بارگزاری...</div>
                    </div>
                    }
                    {/* // <ReactLoading type="bars" color="black" height={100} width={100} className="d-flex justify-content-center" /> : ''} */}
                    {isChartVisible ? <label className='text-center d-flex justify-content-center chart-title' >{chartName}</label>
                      : ''
                    }
                    {isChartVisible ? <ReactECharts option={option} /> : ""}
                  </div>
                  <div style={{ borderRadius: "5px", border: "2px solid #dbd7d9", padding: "20px", marginTop: "5px", visibility: isDivVisible }}>

                    {isLoadingVisible && <div className="text-center"  >
                      {/* <Spinner animation="border" role="status" ></Spinner> */}
                      <Spinner animation="grow" size="sm" variant="secondary" />
                      <Spinner animation="grow" variant="secondary" />
                      <div className='text-secondary text-center' dir="rtl">در حال بارگزاری...</div>
                    </div>
                    }
                    {/* // <ReactLoading type="bars" color="black" height={100} width={100} className="d-flex justify-content-center" /> : ''} */}
                    {isChartVisible ? <label className='text-center d-flex justify-content-center chart-title' >{chartName}</label>
                      : ''
                    }
                    {isChartVisible ? <ReactECharts option={option1} /> : ""}

                  </div>

                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Container>
    </div>
  )
}

