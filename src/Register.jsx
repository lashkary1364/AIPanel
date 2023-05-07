import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Field, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
    Col, FormInput,
} from "shards-react";
import { useEffect } from 'react';

export const Register = ({ showLogin, handleClick }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => {

        setShow(false);
        console.log("handleClose")
        console.log(showLogin)
    }

    const handleShow = () => setShow(true);



    useEffect(() => {
        console.log("useEffect")
        console.log(showLogin)
        setShow(showLogin);

    }, [showLogin])

    const validationSchema = Yup.object().shape({
        user: Yup.string().required('فیلد نام کاربری اجباری است'),
        email: Yup.string().email('فرمت پست الکترونیکی نادرست است').required('فیلد پست الکترونیکی اجباری است'),
        password: Yup.string().required('فیلد رمز عبور اجباری است'),
    });

    const formik = useFormik({
        initialValues:
        {
            user: '',
            password: '',
            email: '',
        },
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        isInitialValid: true,
        onSubmit: (data) => {


            regiter(data);


            console.log("submit register")

        }
    });

    const regiter = (data) => {

        console.log("data.....................")
        console.log(data)

        const form = new FormData();

        form.append("username", data.user);
        form.append("email", data.email);
        form.append("password", data.password);


        console.log("form..............")
        console.log(form)
        axios(
            {
                url: "http://82.115.24.35:8000/auth/register",
                method: "post",
                data: form,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            }).then(function (response) {


                console.log("response: ");
                console.log(response);


            }).catch(function (error) {
                console.log("axois error: " + error);
            })
    }


    return (
        <>
            <Modal show={show} onHide={handleClick} dir="rtl">
                <form onSubmit={formik.handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>ثبت نام</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col lg="12" >
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
                        </Col>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClick}>
                            بستن
                        </Button>
                        <Button variant="primary" type='submit'>
                            ذخیره
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>

    );
}


