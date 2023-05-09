import '../src/login/fonts/font-awesome-4.7.0/css/font-awesome.css'
import '../src/login/css/main.css'
import '../src/login/css/fontiran.css'
import React, { useState } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Register } from './Register';



const Login = () => {

    const [showModal, setShowModal] = useState(false)
    const [ErrorFlag, setErrorFlag] = useState(false);

    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('فیلد نام کاربری اجباری است'),
        password: Yup.string().required('فیلد پسورد الزامی است')

    });

    const formik = useFormik({
        initialValues:
        {
            userName: '',
            password: '',
        },
        validationSchema,
        // validateOnChange: false,
        // validateOnBlur: false,
        onSubmit: (data) => {

            const form = new FormData();

            form.append("username", data.userName);
            form.append("password", data.password);

            axios(
                {
                    url: "http://82.115.24.35:8000/auth/token",
                    method: "post",
                    data: form,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                }).then(function (response) {


                    console.log("response: ");
                    console.log(response);
                    console.log(response.data.access_token);

                    sessionStorage.setItem("LoginTocken", JSON.stringify({
                        userFirstName: data.userName,
                        userLastName: data.password,
                        userTocken: response.data.access_token,
                    }));

                    if (response.data.access_token != null) {
                        //  window.location = '/blog-overview'
                        //  this.props.history.replace('/blog-overview')
                        console.log("access tocken")
                        console.log(response.data.access_token)
                        localStorage.setItem("access-tocken", response.data.access_token);
                        window.location.replace('/home2')

                    } else {
                        setErrorFlag(true);
                    }

                }).catch(function (error) {
                    // handle error
                    setErrorFlag(true);
                    console.log("axois error: " + error);
                    console.log(ErrorFlag);
                    localStorage.clear();
                })
        }
    });

    const handleRegister = () => {
        window.location.replace('/register')
        // setShowModal(true);
    }

    const handleClick = () => {
        setShowModal(false);
    };


    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100" style={{ padding: "0px", paddingBottom: "60px" }}>
                    <form className="login100-form validate-form" style={{ margin: "auto", marginTop: "40px" }} onSubmit={formik.handleSubmit} >
                        <span className="login100-form-title" style={{ color: "white", fontFamily: "IRANSans", fontSize: "20px" }}>
                            ورود به سامانه
                        </span>
                        <div className={formik.errors.userName && formik.touched.userName ? 'wrap-input100 validate-input alert-validate' : ' wrap-input100 validate-input'} style={{ direction: "rtl", fontSize: "20px", fontFamily: "IRANSans" }} data-validate="نام کاربری ضروری می باشد">
                            <input name="userName" className="input100" onChange={formik.handleChange} value={formik.values.userName} id="userName" type="text" placeholder="نام کاربری" style={{ direction: "rtl", height: "40px", fontFamily: "IRANSans" }} />
                            <span className="focus-input100" style={{ direction: "rtl" }}></span>
                            <span className="symbol-input100" style={{ direction: "rtl" }}>
                                <i className="fa fa-envelope" aria-hidden="true" style={{ direction: "rtl", marginRight: "10px" }}></i>
                            </span>
                        </div>
                        <div className={formik.errors.password && formik.touched.password ? 'wrap-input100 validate-input alert-validate' : ' wrap-input100 validate-input'} style={{ direction: "rtl", fontFamily: "IRANSans" }} data-validate="رمز عبور ضروری می باشد" >
                            <input name="password" type="password" className="input100" onChange={formik.handleChange} value={formik.values.password} id="password" placeholder="رمز عبور" style={{ direction: "rtl", height: "40px", fontFamily: "IRANSans" }} />
                            <span className="focus-input100" style={{ direction: "rtl" }}></span>
                            <span className="symbol-input100" style={{ direction: "rtl" }}>
                                <i className="fa fa-lock" aria-hidden="true" style={{ direction: "rtl", marginRight: "10px" }}></i>
                            </span>
                        </div>
                        {
                            ErrorFlag == true ?
                                <div style={{ direction: "rtl", color: "red", textAlign: "right" }}><i className='fa fa-warning pl-2'></i><span>نام کاربری یا رمز عبور اشتباه میباشد</span></div>
                                :
                                ''
                        }
                        <div className="container-login100-form-btn form-inline" style={{ fontFamily: "IRANSans" }}>
                            <button className="login100-form-btn" type='submit' style={{ height: "40px", width: "150px", fontFamily: "IRANSans" }} onClick={handleRegister} >ثبت نام</button>
                            <button className="login100-form-btn" type='submit' style={{ height: "40px", width: "150px", fontFamily: "IRANSans", marginLeft: "10px" }}>ورود</button>
                        </div>
                    </form>
                </div>
                {/* <Register showLogin={showModal} handleClick={handleClick} ></Register> */}
            </div>
        </div>


    )
}

export default Login;
