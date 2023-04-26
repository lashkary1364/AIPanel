import React from 'react'
import axios from 'axios';
import {
    Container, Row, Col, Card, ListGroup,
    ListGroupItem,
    Button,
} from "shards-react";



export  const test = () => {

    const  getAll = () => {
          
        const form = new FormData();

        form.append("asset_id", "14447");
        form.append("var_name", "bbn_sentiment");
        form.append("var_value", "positive");
        form.append("target", "rsi_change");
        axios(
            {
                url:  'http://82.115.24.35:8000/bbn_query',
                method: "post",
                headers:
                {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaGFibmFtIiwiZXhwIjoxNjgyNTE1MDg1fQ.0YsjVvnSsl1hVa_34-UvDHnI4_Sp6E03IIqXgDa5z54",
                    "Content-Type": "multipart/form-data" 
                    // 'Content-Type': 'application/json',
                   // 'accept': 'application/json',
                   // 'Content-Type': 'application/x-www-form-urlencoded'
                },
                data:form
                //JSON.stringify(
                // {
                //     "asset_id ": "14447",
                //     "var_name": "bbn_sentiment",
                //     "var_value": "positive",
                //     "target": "rsi_change",
                // }
                //)
            }).then(function (response) {

                console.log("response:");
                console.log(response)

            }).catch(function (error) {
                // handle error
                console.log("axois error: ");
                console.log(error)
            })

    //     var response = await FetchData({
    //       requestType: "withData",
    //       method: "POST",
    //       url: 'http://82.115.24.35:8000/bbn_query',
    //       data: form,
    //       headers: { "Content-Type": "multipart/form-data" },
    //     });
    
    //     console.log("response.status")
    //     console.log(response.status)
        
    //     if (response.status) {
    //       setLoginStatus(true);
    //       var payload = {
    //         isUserLogged: true,
    //         accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaGFibmFtIiwiZXhwIjoxNjgyNTEyODA5fQ.AWRpLVSb6vvx9TjxUQ1ydlastzyj64ZcDtXbHtg_3N0",
    //         tokenType: "bearer",
    //       };
    //       props.userAuthentication(payload);
       
    //     } else {
    //         console.log("error:")
    //         console.log(response.data.detail)
    //      // setLoginError(true);
    //       //setServerErrorMessage(response.data.detail);
    //     }
     }
      


        
   


    return (

        <Container fluid className="main-content-container px-4">
            <Row className="page-header mt-2 ">
                <Col lg="12" >
                    <nav className="breadcrumb">
                        <a className="breadcrumb-item" href="#">خانه</a>
                        <span className="breadcrumb-item active">مدیریت صورت هزینه ها</span>
                    </nav>
                </Col>

                <Col lg="12" >
                    <Card small className="mb-2">
                        <ListGroup flush>
                            <ListGroupItem >
                                <form >
                                    <Row>
                                        <Col md="4" className="form-group">
                                            <Button theme="primary" className="mb-2 mr-1" type="button" onClick={getAll} >
                                                ثبت
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>


    )
}
