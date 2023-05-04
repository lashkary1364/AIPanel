import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Field, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
    Container, Row, Col, Card, CardHeader, ListGroup,
    ListGroupItem, FormInput,
     FormSelect, Alert
  } from "shards-react";

export const Register = () => {

    const [show1, setShow1] = useState(false);

    const handleClose = () => setShow1(false);
    const handleShow = () => setShow1(true);


    const validationSchema = Yup.object().shape({
        tankhah: Yup.string().required('فیلد نام کاربری اجباری است'),
        //.oneOf(validProductValues),
        //tarikh: Yup.date().required('فیلد تاریخ اجباری است'),
        sharh: Yup.string().required('فیلد شرح اجباری است'),
      });

    const formik = useFormik({
        initialValues:
        {
            usename: '',
          password: '',
          email: '',
        
        },
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        isInitialValid: true,
        onSubmit: (data) => {
    
          
        }
    
      });
    

    return (
        < >
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show1} onHide={handleClose} dir="rtl">
                <Modal.Header closeButton>
                    <Modal.Title>ثبت نام</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Col lg="12" >
          {/* <Card small className="mb-2">
            <ListGroup flush>
              <ListGroupItem > */}
                <form onSubmit={formik.handleSubmit}>
                  {/* <Row> */}
                    <Col  className="form-group">
                      <label htmlFor="username">نام کاربری:</label>
                      <FormInput type="text" id="usename" name="username"  className={'form-control' + (formik.errors.username && formik.touched.username ? ' is-invalid' : '')}
                        onChange={formik.handleChange} value={formik.values.username} placeholder="نام کاربری" />
                      <div className="invalid-feedback">
                        {
                          formik.errors.username && formik.touched.username
                            ? formik.errors.username
                            : null
                        }
                      </div>
                    </Col>

                    <Col  className="form-group">
                      <label htmlFor="email" > پست الکترونیکی:</label>
                      <FormInput type="text" id="email" name="email"  className={'form-control' + (formik.errors.email && formik.touched.email ? ' is-invalid' : '')}
                        onChange={formik.handleChange} value={formik.values.email} placeholder="پست الکترونیکی" />
                    </Col>

                    <Col  className="form-group">
                      <label htmlFor="password">رمز عبور:</label>
                      <FormInput type="password" id="password" name="password" className={'form-control' + (formik.errors.password && formik.touched.password ? ' is-invalid' : '')}
                        onChange={formik.handleChange} value={formik.values.password} placeholder="رمزعبور" />
                    </Col>
                  {/* </Row>                  */}
                </form>
              {/* </ListGroupItem>
            </ListGroup>
          </Card> */}
        </Col>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        بستن
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        ذخیره
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}


