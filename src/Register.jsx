import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
    Container, Row, Col, Card, CardHeader, ListGroup,
    ListGroupItem, FormInput,
    Button,
} from "shards-react";
import "./assets/styles.css";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    LoadCanvasTemplateNoReload,
    validateCaptcha
} from "react-simple-captcha";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { debounce } from "lodash";
import './assets/styles.css'


export const Register = ({ showLogin, handleClick }) => {

    const [captchaError, setCaptchaError] = useState(false);

    // const handleClose = () => {

    //     setShow(false);
    //     console.log("handleClose")
    //     console.log(showLogin)
    // }

    // const handleShow = () => setShow(true);

    // useEffect(() => {
    //     console.log("useEffect")
    //     console.log(showLogin)
    //     setShow(showLogin);

    // }, [showLogin])

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('فیلد نام کاربری اجباری است'),
        email: Yup.string().email('فرمت پست الکترونیکی نادرست است').required('فیلد پست الکترونیکی اجباری است'),
        password: Yup.string()
            .required('فیلد رمز عبور اجباری است')
            .min(4, 'حداقل تعداد کاراکتر4 باشد')
            .max(40, 'حداکثر تعداد کاراکتر 40باشد'),
        confirmPassword: Yup.string()
            .required('فیلد تکرار رمز عبور اجباری است')
            .oneOf([Yup.ref('password'), null], 'فیلد پسورد یکسان نیست'),
    });

    const formik = useFormik({
        initialValues:
        {
            username: '',
            password: '',
            email: '',
            confirmPassword: ''
        },
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        isInitialValid: true,
        onSubmit: (data) => {
            console.log("data.....................")
            console.log(data);
            // event.preventDefault();
            console.log("validateCaptcha(input)")
            console.log(validateCaptcha(input));
            console.log(input);
            if (validateCaptcha(input) === true)
            {
                setValid(true);  
                regiter(data);
                setCaptchaError(false);
            }                
            else
                setCaptchaError(true);

            setInput("");    
            console.log("submit register")

        }
    });

    const regiter = (data) => {

        console.log("data.....................")
        console.log(data)

        const form = new FormData();

        form.append("username", data.username);
        form.append("email", data.email);
        form.append("password", data.password);


        console.log("form..............")
        console.log(form)
        axios(
            {
                url: "http://82.115.24.35:8000/auth/register",
                method: "post",
                data:JSON.stringify({ "username": "shabnam4",
                "email": "shabnam4@example.com",
                "password": "shabnam4"})
                //JSON.stringify(
                    //{"username":data.username , "email":data.email ,"password":data.password }
                  //  )
                    ,
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(function (response) {


                console.log("response: ");
                console.log(response);


            }).catch(function (error) {
                console.log("axois error: " + error);
            })
    }

    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");
    const [valid, setValid] = useState(false);
    
    useEffect(() => {
        console.log("useEffect")
        console.log(showLogin)
        setShow(showLogin);

    }, [showLogin]);

    useEffect(() => {
        loadCaptchaEnginge(6); //6 is tge number of characters
        console.log("loading captcha...");
    }, []);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(validateCaptcha(input));
    //     if (validateCaptcha(input) === true) {
    //         setValid(true);
    //         regiter()
    //     }

    //     else
    //         setCaptchaError(true)
    //     //alert("invalid captcha, regenerating new one...");

    //     setInput("");
    // };

    const handleChange = (event) => {
    console.log("handle change .... ");
    console.log(event.target.value);
        setInput(event.target.value);
    };

    const debounceHandler = useCallback((func, timeout) => {
        return debounce(func, timeout);
    }, []);

    return (
        <Container fluid className="main-content-container px-4" dir="rtl">
            <Row className="page-header mt-2 ">
                <Col lg="12" >
                    <nav className="breadcrumb" >
                        <a className="breadcrumb-item" href="http://localhost:3000/">ورود به سیستم</a>
                        <span className="breadcrumb-item active">ثبت نام</span>
                    </nav>
                </Col>
                <Col lg="12" >
                    <Card small className="mb-2">
                        <ListGroup flush>
                            <ListGroupItem >
                                <form onSubmit={formik.handleSubmit}>
                                    <Col lg="4" >
                                        <Col className="form-group">
                                            <label htmlFor="username">نام کاربری:</label>
                                            <FormInput type="text" id="usename" name="username" className={'form-control' + (formik.errors.username && formik.touched.username ? ' is-invalid' : '')}
                                                onChange={formik.handleChange} value={formik.values.username} placeholder="نام کاربری" />
                                            <div className="invalid-feedback">
                                                {
                                                    formik.errors.username && formik.touched.username
                                                        ? formik.errors.username
                                                        : null
                                                }
                                            </div>
                                        </Col>
                                        <Col className="form-group">
                                            <label htmlFor="email" > پست الکترونیکی:</label>
                                            <FormInput type="text" id="email" name="email" className={'form-control' + (formik.errors.email && formik.touched.email ? ' is-invalid' : '')}
                                                onChange={formik.handleChange} value={formik.values.email} placeholder="پست الکترونیکی" />
                                            <div className="invalid-feedback">
                                                {
                                                    formik.errors.email && formik.touched.email
                                                        ? formik.errors.email
                                                        : null
                                                }
                                            </div>
                                        </Col>
                                        <Col className="form-group">
                                            <label htmlFor="password">رمز عبور:</label>
                                            <FormInput type="password" id="password" name="password" className={'form-control' + (formik.errors.password && formik.touched.password ? ' is-invalid' : '')}
                                                onChange={formik.handleChange} value={formik.values.password} placeholder="رمزعبور" />
                                            <div className="invalid-feedback">
                                                {
                                                    formik.errors.password && formik.touched.password
                                                        ? formik.errors.password
                                                        : null
                                                }
                                            </div>
                                        </Col>
                                        <Col className="form-group">
                                            <label htmlFor="confirmPassword">تکرار رمز عبور:</label>
                                            <FormInput type="password" id="confirmPassword" name="confirmPassword" className={'form-control' + (formik.errors.confirmPassword && formik.touched.confirmPassword ? ' is-invalid' : '')}
                                                onChange={formik.handleChange} value={formik.values.confirmPassword} placeholder="رمزعبور" />
                                            <div className="invalid-feedback">
                                                {
                                                    formik.errors.confirmPassword && formik.touched.confirmPassword
                                                        ? formik.errors.confirmPassword
                                                        : null
                                                }
                                            </div>
                                        </Col>
                                        <Col className="form-group">
                                            <LoadCanvasTemplate reloadText="بازیابی" style={{ fontFamily: "IRANSans", fontSize: "20px" }} />
                                            <input className='form-control'
                                                onChange={(e)=>handleChange(e)}
                                                //{debounceHandler(handleChange, 300)}
                                                type="text"
                                                //val={input}
                                                placeholder="تصویر بالا را در اینجا تایپ کنید"
                                            />
                                            <div style={{ marginTop: "0.25rem", fontSize: "80%", color: "#c4183c", fontFamily: "IRANSans" }}>
                                                {captchaError == true ? 'تصویر نادرست است' : null}
                                            </div>
                                        </Col>
                                    </Col>
                                    <Row>
                                        <Col className="form-group">
                                            <Button  type="submit" variant="secondary" onClick={handleClick}>
                                                ثبت نام
                                            </Button>
                                            {/* <div className='form-inline'>
                        {
                        operation == "add" ?
                          <Button theme="primary" className="mb-2 mr-1" type="submit" disabled={isAction == true ? true : false} >
                            <span className='form-inline'>
                            khl  ثبت
                              {isAction == true ? <ReactLoading type="spin" color="red" height={20} width={20} className="ml-2" /> : ''}
                            </span>                         
                          </Button>
                          : operation == "edit" ?
                            <Button theme="warning" className="mb-2 mr-1" type="submit" disabled={isAction == true ? true : false}>
                              <span className='form-inline'>
                                ثبت
                                {isAction == true ? <ReactLoading type="spin" color="red" height={20} width={20} className="ml-2" /> : ''}
                              </span>                           
                            </Button>
                            : operation == "delete" ?
                              <Button theme="danger" className="mb-2 mr-1" type="submit" disabled={isAction == true ? true : false} >
                                <span className='form-inline'>
                                  حذف
                                  {isAction == true ? <ReactLoading type="spin" color="red" height={20} width={20} className="ml-2" /> : ''}
                                </span>
                              </Button>
                              : ""
                        }

                      </div> */}
                                        </Col>
                                    </Row>
                                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClick}>
                            بستن
                        </Button>
                        <Button variant="primary" type='submit'>
                            ذخیره
                        </Button> */}
                                    {/* </Modal.Footer> */}
                                </form>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
