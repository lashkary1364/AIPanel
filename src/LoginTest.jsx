import React from 'react'
import "./assets/login.css"
export const LoginTest = () => {
    return (
        <div className="content " >
            <div className="container  "  >
                {/* <div class="row"> */}
                    {/* <div className='colmd6' >
                        <img style={{ zIndex:200,backgroundSize:"cover" ,backgroundRepeat:"no-repeat"}} src={require("./images/login/login.png")} alt="Image"  /> */}
                    {/* </div> */}
                    <div className='col-md-4'></div>
                    <div className='col-md-8'  dir="rtl" >
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h3 style={{fontFamily:"cinema", color:"#8c11c5"}} >ورود به سامانه</h3>
                                </div>
                                <form action="#" method="post">
                                    <div className="form-group first">
                                        <label for="username">نام کاربری</label>
                                        <input type="text"  />
                                    </div>
                                    <div className="form-group last mb-4">
                                        <label for="password">رمز عبور</label>
                                        <input type="password"  />
                                    </div>

                                    <div className="container-login100-form-btn form-inline" >
                                        <button className="login100-form-btn" type='submit'   >ثبت نام</button>
                                        <button className="login100-form-btn" type='submit' style={{  marginRight: "10px" }}>ورود</button>
                                    </div>
                                    <div style={{textAlign:"center", marginTop:"60px" ,fontFamily:"cinema",  }}>
                                          <a style={{color:"#8c11c5" , textDecoration:"bottom" , fontSize:"12pt"}} href="#" >فراموشی رمز عبور</a>
                                    </div>
                                                                   
                                </form>
                            </div>
                        </div>

                    </div>
{/* 
                </div> */}
            </div>
        </div>
    )
}
