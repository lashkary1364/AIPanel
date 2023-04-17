import React from 'react'
import axios from 'axios';
import {
    Container, Row, Col, Card, CardHeader, ListGroup,
    ListGroupItem, 
    Button, 
  } from "shards-react";

export const test = () => {

    const getAll = (e) => {

        axios(
            {
                url: 'http://82.115.24.35:8000/bbn_query?asset_id=14447&var_name=bbn_sentiment&var_value=positive&target=rsi_change',
                method: "get",
                headers:
                {
                    Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaGFibmFtIiwiZXhwIjoxNjgxNzMzMTE0fQ.HpeMaUoXx2JgGjq2Zpf3Ty_PpE0AUfJGVU8uYJOvTlw is api token",
                    // 'Cache-Control': 'no-cache',
                    // 'Pragma': 'no-cache',
                    // 'Expires': '0',
                }
            }).then(function (response) {

                console.log("response:");
                console.log(response)

            }).catch(function (error) {
                // handle error
                console.log("axois error: ");
                console.log(error)
            })
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
