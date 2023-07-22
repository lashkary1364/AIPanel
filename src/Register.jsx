import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
    Container, Row, Col, Card, CardHeader, ListGroup,
    ListGroupItem, FormInput,
    Button, CardBody
} from "shards-react";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    LoadCanvasTemplateNoReload,
    validateCaptcha
} from "react-simple-captcha";
import { debounce } from "lodash";
import Swal from 'sweetalert2';


export const Register = () => {

    const serverAddress = process.env.REACT_APP_SERVER_ADRESS;
    const [captchaError, setCaptchaError] = useState(false);

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
            console.log("validateCaptcha(input)")
            console.log(validateCaptcha(input));
            console.log(input);
           
            if (validateCaptcha(input) === true) {
                //setValid(true);
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

        console.log("data.....................");
        console.log(data);
        const form = new FormData();
        form.append("username", data.username);
        form.append("email", data.email);
        form.append("password", data.password);
        console.log("form..............");
        console.log(form);

        axios(
            {
                url: serverAddress + "auth/register",
                method: "post",
                data: 
                JSON.stringify({
                    "username":data.username,
                    "email": data.email,
                    "password": data.password
                }) ,               
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(function (response) {
                console.log("response: ");
                console.log(response);
                if(response.status==200){
                    // Swal.fire(
                    //     'موفقیت آمیز',
                    //     'کاربر جدید با موفقیت ثبت شد',
                    //     'success');
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'کاربر جدید با موفقیت ثبت شد',
                        showConfirmButton: false,
                        timer: 1000
                      })
                    window.setTimeout(()=>{
                         window.location.replace("/");
                    },1000);
                   
                }

            }).catch(function (error) {
                Swal.fire(
                    'خطا',
                    error.message,
                    'error');
            })
    }

    const [input, setInput] = useState("");
    
    useEffect(() => {
        loadCaptchaEnginge(6); //6 is tge number of characters
        console.log("loading captcha...");
    }, []);

    const handleChange = (event) => {
        console.log("handle change .... ");
        console.log(event.target.value);
        setInput(event.target.value);
    };

    const debounceHandler = useCallback((func, timeout) => {
        return debounce(func, timeout);
    }, []);

    return (

        <Container fluid className="main-content-container px-4" dir="rtl"  >


            <Card small className="h-100 mb-2 " style={{ width: "40%", marginTop: "30px", marginRight: "auto", marginLeft: "auto" }}>
                <CardHeader>ثبت تام کاربر جدید</CardHeader>
                <CardBody className="pt-0">
                    <form onSubmit={formik.handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="username">نام کاربری:</label>
                            <input type="text" id="usename" name="username" className={(formik.errors.username && formik.touched.username ? ' is-invalid' : '')}
                                onChange={formik.handleChange} value={formik.values.username} placeholder="نام کاربری" />
                            <div className="invalid-feedback">
                                {
                                    formik.errors.username && formik.touched.username
                                        ? formik.errors.username
                                        : null
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" > پست الکترونیکی:</label>
                            <input type="text" id="email" name="email" className={(formik.errors.email && formik.touched.email ? ' is-invalid' : '')}
                                onChange={formik.handleChange} value={formik.values.email} placeholder="پست الکترونیکی" />
                            <div className="invalid-feedback">
                                {
                                    formik.errors.email && formik.touched.email
                                        ? formik.errors.email
                                        : null
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">رمز عبور:</label>
                            <input type="password" id="password" name="password" className={(formik.errors.password && formik.touched.password ? ' is-invalid' : '')}
                                onChange={formik.handleChange} value={formik.values.password} placeholder="رمزعبور" />
                            <div className="invalid-feedback">
                                {
                                    formik.errors.password && formik.touched.password
                                        ? formik.errors.password
                                        : null
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">تکرار رمز عبور:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className={(formik.errors.confirmPassword && formik.touched.confirmPassword ? ' is-invalid' : '')}
                                onChange={formik.handleChange} value={formik.values.confirmPassword} placeholder="رمزعبور" />
                            <div className="invalid-feedback">
                                {
                                    formik.errors.confirmPassword && formik.touched.confirmPassword
                                        ? formik.errors.confirmPassword
                                        : null
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <LoadCanvasTemplate reloadText="بازیابی" style={{ fontFamily: "IRANSans", fontSize: "20px" }} />
                            <input
                                onChange={(e) => handleChange(e)}
                                //{debounceHandler(handleChange, 300)}
                                type="text"
                                //val={input}
                                placeholder="تصویر بالا را در اینجا تایپ کنید"
                            />
                            <div style={{ marginTop: "0.25rem", fontSize: "80%", color: "#c4183c", fontFamily: "IRANSans" }}>
                                {captchaError == true ? 'تصویر نادرست است' : null}
                            </div>
                        </div>

                        <Row>
                            <Col className="form-group">
                                <Button type="submit" variant="secondary">
                                    ثبت نام
                                </Button>
                            </Col>
                        </Row>
                    </form>


                </CardBody>
            </Card>



        </Container>
    );
}
