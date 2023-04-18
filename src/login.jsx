import '../src/login/fonts/font-awesome-4.7.0/css/font-awesome.css'
import '../src/login/css/main.css'
import '../src/login/css/fontiran.css'
import React, { useState } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {
    FormSelect
} from "shards-react";
import { useEffect } from 'react';
import { useCallback } from 'react';
import persian from "react-date-object/calendars/persian"
//import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker, { DateObject } from "react-multi-date-picker";
import {
   useHistory
  } from 'react-router-dom';

const Login = () => {

    //  test shabnam lashkary 
    const history = useHistory();  
    const [ErrorFlag, setErrorFlag] = useState(false);
    const [mohitItems, setMohitItems] = useState([]);
    const serverAdress = process.env.REACT_APP_SERVER_ADRESS;
    const [resultItems] = [];
    
    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('فیلد نام کاربری اجباری است'),       
        password: Yup.string()
            .required('فیلد پسورد الزامی است')
            .min(1, 'Password must be at least 6 characters'),
       
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
             window.location.replace('/home2')
            
             // axios(
            //     {
            //         url:serverAdress+ 'login',
            //         method: "post",
            //         data:
            //         {
            //             "UserName": data.userName,
            //             "UserPasss": data.password,
            //             "Imei": "1"
            //         },
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //     }).then(function (response) {
                   
            //         console.log("response: ")
            //         console.log(response);
            //         console.log(response.data.access_token)

            //         sessionStorage.setItem("LoginTocken", JSON.stringify({
            //             userFirstName: response.data.userFName,
            //             userLastName: response.data.userLName,
            //             UserId: response.data.userId,
            //             userTocken: response.data.access_token,
            //             lastMohitID: response.data.lastMohitID
            //         }));

            //         console.log("login token")
            //         console.log(sessionStorage.getItem("LoginTocken"))


            //         const date = new DateObject({ calendar: persian })
            //         console.log(date.year)
            //         sessionStorage.setItem("SalMali",date.year);

                  

                    

            //         if (response.data.access_token != null) {
            //             //  window.location = '/blog-overview'
            //             //  this.props.history.replace('/blog-overview')
            //             console.log("acess tocken")
            //             console.log(response.data.access_token)
            //             localStorage.setItem("access-tocken", response.data.access_token);
            //            window.location.replace('/home2')
                   

            //         } else {
            //             setErrorFlag(true);
            //         }

                  

            //     }).catch(function (error) {
            //         // handle error
            //         setErrorFlag(true);
            //         console.log("axois error: " + error);
            //         console.log(ErrorFlag);
            //         localStorage.clear();
            //     })
       
        }
    });

    // useEffect(() => {

    //     getWorkEnvironment();

    // }, []);


    // useEffect(
    //     () => {
    //         console.log("gggggggggggggggg11111111111")
    //         mohitItems.map(data => {
    //             console.log(data.Id);
    //             console.log(data.Name)
    //         })
    //     },
    //     [mohitItems],
    // )


    const getWorkEnvironment = () => {

        axios(
            {
                url: serverAdress + `GetAllWorkEnvironment`,
                method: "get",
                headers:
                {
                    //Authorization: `Bearer ${localStorage.getItem("access-tocken")}`,
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            }).then(function (response) {

                console.log("response : ");
                console.log(response.data);
                const resultItems = response.data;

                resultItems.map((data) => {
                    setMohitItems(mohitItems => [...mohitItems, { Id: data.mohitID, Name: data.fullMohitOnvan }]);
                });

            }).catch(function (error) {
                setErrorFlag(true);
                // handle error
                console.log("axois error: ");
                console.log(error)
            })
    }


    const handleChangeMohit = (value) => {

        sessionStorage.setItem("MohitKaryId", value)
        console.log("MohitKaryId88888888888888888")
        console.log(value)

    }

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
                        <div className="container-login100-form-btn" style={{ fontFamily: "IRANSans" }}>
                            <button className="login100-form-btn" type='submit' style={{ height: "40px", width: "150px", fontFamily: "IRANSans" }}>ورود</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
