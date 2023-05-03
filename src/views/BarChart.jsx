import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
  Container, Row, Col,
} from "shards-react";
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import ReactECharts from 'echarts-for-react';
import ReactLoading from 'react-loading';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import '../assets/slider.css'

export const BarChart = () => {

  const accessToken = localStorage.getItem("access-tocken");
  const [shakhes, setShakhes] = React.useState('rsi_change');
  const [chartName, setChartName] = React.useState("");
  const handleChange = (event, newShakhes) => {
    setShakhes(newShakhes);
  };

  const [option, setOption] = useState({});
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);

  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    
    setOption({
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
  }, [x,y,setX,setY]);

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

  const rsi_change = [{
    value: 0,
    label: 'اشباع خرید',
  },
  {
    value: 50,
    label: 'اشباع فروش',
  },
  {
    value: 100,
    label: 'خنثی',
  },]

  const change = [{
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

    console.log("form:")
    console.log(form)

    axios(
      {
        url: 'http://82.115.24.35:8000/bbn_query',
        method: "post",
        headers:
        {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data"
        },
        data: form
      }).then(function (response) {

        console.log("response:");
        console.log(response.data);

        const resultItems = response.data;
        console.log(resultItems.result);
        const itemsArray = resultItems.result;
        const arr = JSON.parse(itemsArray)
        console.log(arr)

         setX([]);
         setY([]);

        if (shakhes == "rsi_change") {
          arr.map((item, index) => {
            console.log(index)
            console.log(item)
            // setChartData(chartData => [...chartData, { "rsi_change": item.rsi_change, "p": item.p }])
            setX(x => [...x, item.rsi_change])
            setY(y => [...y, item.p])
          });




        } else {
          arr.map((item, index) => {
            console.log(index)
            console.log(item)
            //  setChartData(chartData => [...chartData, { "change": item.rsi_change, "p": item.p }])
            setX(x => [...x, item.rsi_change])
            setY(y => [...y, item.p])
          });
        }

        setIsLoadingVisible(false);
        setIsChartVisible(true);

       

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
        setIsChartVisible(true)
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

  const rsi_change_Text = (value) => {
    return value;
  }

  const change_Text = (value) => {
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

  const rsi_change_Format = (value) => {
    return rsi_change.findIndex((mark) => mark.value === value) + 1;
  }

  const change_Format = (value) => {
    return change.findIndex((mark) => mark.value === value) + 1;
  }


  const bbn_brandwagen_handleChange = (event, newValue, activeThumb) => {
    
    setIsChartVisible(false)
    setChartName("نمودار رفتار توده ای")
    setX([])
    setY([])
    setOption({})
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
    setOption({})
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
    setOption({})
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
    setOption({})
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
    setX([])
    setY([])
    setOption({})
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
    setChartName("نمودار تصمیم")
    setX([])
    setY([])
    setOption({})
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
    setOption({})
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

  const rsi_change_handleChange = (event, newValue, activeThumb) => {
  
    setIsChartVisible(false)
    setChartName("نمودار شاخص rsi")
    setX([])
    setY([])
    setOption({})
    console.log("bbn_decision_handleChange")
    console.log(newValue);

    const form = new FormData();
    form.append("asset_id", "14447");
    form.append("var_name", "rsi_change");
    switch (newValue) {
      case 0:
        form.append("var_value", "overbuy");
        form.append("target", shakhes);
        setChart(form);
        return newValue;
      case 50:
        form.append("var_value", "oversale");
        form.append("target", shakhes);
        setChart(form);
        return newValue;
      case 100:
        form.append("var_value", "neutral");
        form.append("target", shakhes);
        setChart(form);
        return newValue;

      default:
        form.append("var_value", "overbuy");
        form.append("target", shakhes);
        setChart(form);
        return newValue;
    }
  }

  const change_handleChange = (event, newValue, activeThumb) => {
    
    setIsChartVisible(false)
    setChartName("نمودار قیمت")
    setX([])
    setY([])
    setOption({})
    console.log(newValue);

    const form = new FormData();
    form.append("asset_id", "14447");
    form.append("var_name", "change");


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

    <Container fluid className="main-content-container px-4">
      <div style={{ borderRadius: "8px", border: "2px solid #dbd7d9", padding: "5px", marginTop: "20px" }}>
        <Row>

          <Col md="6" >

            <Col>
              <ToggleButtonGroup className='d-flex justify-content-center'
                color="primary"
                value={shakhes}
                exclusive
                onChange={handleChange}
                aria-label="Platform">
                <ToggleButton value="rsi_change" style={{ fontFamily: "iransans", fontSize: "11px" }}>شاخص rsi</ToggleButton>
                <ToggleButton value="change" style={{ fontFamily: "iransans", fontSize: "11px" }}>قیمت</ToggleButton>
              </ToggleButtonGroup>
            </Col>

            <Col className="form-inline">
              <label style={{ marginRight: "10px", width: 200 }}>رفتار توده ای</label>
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

            <Col className="form-inline">
              <label style={{ marginRight: "10px", width: 200 }}>شاخص کل</label>
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

            <Col className="form-inline">
              <label style={{ marginRight: "10px", width: 200 }}>نگرش</label>
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

            <Col className="form-inline">
              <label style={{ marginRight: "10px", width: 200 }}>اخبار</label>
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

            <Col className="form-inline">
              <label style={{ marginRight: "10px", width: 200 }}>حالت</label>
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

            <Col className="form-inline">
              <label style={{ marginRight: "10px", width: 200 }}>تصمیم</label>
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

            <Col className="form-inline">
              <label style={{ marginRight: "10px", width: 200 }}>احساسات</label>
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

            <Col className="form-inline">
              <label style={{ marginRight: "10px", width: 200 }}>شاخص rsi</label>
              <Box sx={{ width: 400, padding: '5px', marginRight: "10px" }}>
                <Slider
                  // aria-label="Restricted values"
                  defaultValue={0}
                  valueLabelFormat={rsi_change_Format}
                  getAriaValueText={rsi_change_Text}
                  onChange={rsi_change_handleChange}
                  step={null}
                  // valueLabelDisplay="auto"
                  marks={rsi_change}
                />
              </Box>
            </Col>

            <Col className="form-inline">
              <label style={{ marginRight: "10px", width: 200 }}>قیمت </label>
              <Box sx={{ width: 400, padding: '5px', marginRight: "10px" }}>
                <Slider
                  // aria-label="Restricted values"
                  defaultValue={0}
                  valueLabelFormat={change_Format}
                  getAriaValueText={change_Text}
                  onChange={change_handleChange}
                  step={null}
                  // valueLabelDisplay="auto"
                  marks={change}
                />
              </Box>
            </Col>
          </Col>

          <Col md="6">
            {isLoadingVisible ? <ReactLoading type="bars" color="black" height={100} width={100} className="d-flex justify-content-center" /> : ''}
            {isChartVisible ? <label className='text-center d-flex justify-content-center' style={{ color: "rgb(63, 81, 181)", paddingTop: "10px", textDecoration: "underline" }}>{chartName}</label>
              : ''}
            {isChartVisible ? <ReactECharts option={option} /> : ""}
          </Col>
        </Row>
      </div>
    </Container>

  )
}
