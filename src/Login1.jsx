import React ,{ useState } from 'react'
import "./assets/login1.css"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useEffect } from 'react';


export const Login1 = () => {

  const serverAddress = process.env.REACT_APP_SERVER_ADRESS;

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
    console.log("env variable")
    console.log(serverAddress + "auth/token")
  }, [])


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
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (data) => {

      const form = new FormData();
      form.append("username", data.userName);
      form.append("password", data.password);

      axios(
        {
          // http://sentisense.xyz:8500/
          url: serverAddress + "auth/token",
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
            console.log("access tocken")
            console.log(response.data.access_token)
            localStorage.setItem("access-tocken", response.data.access_token);
            window.location.replace('/home')

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
  }


  return (
    <div class="wrapper">
      <div class="inner">
        <img src={require("./images/login/img-b1.png")} alt="" class="image-1" />
        <form action="#" method="post" dir="rtl" onSubmit={formik.handleSubmit}>
          <img src={require("./images/login/3.png")} alt="" class="image-2" />
          <div style={{ fontFamily: "cinema", fontSize: "25px" }}>ورود به سامانه</div>
          <div>
            <input type="text" id="userName" name="userName" value={formik.values.userName} onChange={formik.handleChange} placeholder='نام کاربری' />
          </div>
          <div>
            <input type="text" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} placeholder='پسورد' />
          </div>
          <div className='form-inline'>

            <button className="login100-form-btn" type='submit' style={{ marginLeft: "20px" }}>ورود</button>
            <button className="login100-form-btn" type='submit'  onClick={handleRegister} >ثبت نام</button>
          </div>
          {
            ErrorFlag == true ?
              <div className='error-message'><i className='fa fa-warning pr-2'></i><span>نام کاربری یا رمز عبور اشتباه میباشد</span></div>
              :
              ''
          }
          <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "cinema", }}>
            <a style={{ color: "#8c11c5", textDecoration: "bottom", fontSize: "12pt" }} href="#" >فراموشی رمز عبور</a>
          </div>
        </form>
      </div>
    </div>
  )
}
