import React, { useState, useEffect } from 'react'
import "./assets/test.css"
import { TransactionKpI } from './Omde/TransactionKpI'
import { CustomerDashboard } from './Omde/CustomerDashboard'
import { ProductDashboard } from './Omde/ProductDashboard'
import { CustomerInfo } from './Omde/CustomerInfo'
import { WatifCustomer } from './Saham/WatifCustomer'
import { CustomerPredicted } from './Omde/CustomerPredicted'
import Dropdown from 'react-bootstrap/Dropdown';
import { BasketAnalysis } from './Omde/BasketAnalysis'
import { BasketProduct } from './Omde/BasketProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt } from '@fortawesome/free-solid-svg-icons'

export const Omde = () => {

    const [tabs, setTabs] = useState([]);
    const [contents, setContents] = useState([]);
    const [active, setActive] = useState(0);
    const [i, setI] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("LoginTocken"))
        setFirstName(user.userFirstName);
    }, [])



    const handleLogout = () => {

        console.log("log out")
        const user = JSON.parse(sessionStorage.getItem("LoginTocken"))

        console.log("user:");
        console.log(JSON.parse(sessionStorage.getItem("LoginTocken")))


        console.log(user.userFirstName);
        console.log(user.userLastName);
        sessionStorage.clear();
        localStorage.clear();
        console.log("user")
        console.log(sessionStorage.getItem("LoginTocken"))


        window.location.replace('/')
        window.location.clear()

        //  window.location.href='http://localhost:3000/'
        //  window.location.assign('http://localhost:3000/')
        //window.open('http://localhost:3000/blog-overview')
    }
    const clickHandler = (e) => {
        e.preventDefault();
        setActive(parseInt(e.currentTarget.attributes.tabIndex.value));
    }
    return (
        <section className="tabs">
            <menu>
                <ul>
                    <li
                        className={active === i[0] ? "tab active" : "tab"}
                        key={"شاخص کلیدی عملکرد تراکنش ها"}
                        tabIndex={i[0]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[0] ? i.length : i.length - i[0] - 1 }}>
                        <a href={"#" + "شاخص کلیدی عملکرد تراکنش ها"}>
                            <span>شاخص کلیدی عملکرد تراکنش ها</span>
                            <img src={require("./images/menu/1.png")} className='m1'></img>
                        </a>
                    </li>
                    <li
                        className={active === i[1] ? "tab active" : "tab"}
                        key={"شاخص کلیدی عملکرد مشتریان"}
                        tabIndex={i[1]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[1] ? i.length : i.length - i[1] - 1 }}>
                        <a href={"#" + "شاخص کلیدی عملکرد مشتریان"}>{"شاخص کلیدی عملکرد مشتریان"}
                            <img src={require("./images/menu/2.png")} className='m1'></img>
                        </a>
                    </li>
                    <li
                        className={active === i[2] ? "tab active" : "tab"}
                        key={"شاخص کلیدی عملکرد محصول"}
                        tabIndex={i[2]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[2] ? i.length : i.length - i[2] - 1 }}>
                        <a href={"#" + "شاخص کلیدی عملکرد محصول"}>شاخص کلیدی عملکرد محصول
                            <img src={require("./images/menu/3.png")} className='m1'></img>
                        </a>
                    </li>
                    <li
                        className={active === i[3] ? "tab active" : "tab"}
                        key={"تحلیل RFM"}
                        tabIndex={i[3]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[3] ? i.length : i.length - i[3] - 1 }}>
                        <a href={"#" + "تحلیل RFM"}>
                            RFM تحلیل
                            <img src={require("./images/menu/4.png")} className='m1'></img>
                        </a>
                    </li>
                    <li
                        className={active === i[4] ? "tab active" : "tab"}
                        key={"پیش بینی مشتریان"}
                        tabIndex={i[4]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[4] ? i.length : i.length - i[4] - 1 }}>
                        <a href={"#" + "پیش بینی مشتریان"}>
                            تحلیل مشتریان
                            <img src={require("./images/menu/5.png")} className='m1'></img>
                        </a>
                    </li>
                    <li
                        className={active === i[5] ? "tab active" : "tab"}
                        key={"واتیف"}
                        tabIndex={i[5]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[5] ? i.length : i.length - i[5] - 1 }}>
                        <a href={"#" + "واتیف"}>
                            برنامه ریزی پروموشن
                            <img src={require("./images/menu/6.png")} className='m1'></img>
                        </a>
                    </li>
                    <li
                        className={active === i[6] ? "tab active" : "tab"}
                        key={"تحلیل سبد خرید"}
                        tabIndex={i[6]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[6] ? i.length : i.length - i[6] - 1 }}>
                        <a href={"#" + "تحلیل سبد خرید"}>{"تحلیل سبد خرید"}
                            <img src={require("./images/menu/7.png")} className='m1'></img>
                        </a>
                    </li>
                    {/* <li
                        className={active === i[7] ? "tab active" : "tab"}
                        key={"سیستم توصیه گر محصول"}
                        tabIndex={i[7]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[7] ? i.length : i.length - i[7] - 1 }}>
                        <a href={"#" + "سیستم توصیه گر محصول"}>
                            سیستم توصیه گر محصول
                            <img src={require("./images/menu/8.png")} className='m1'></img>
                        </a>
                    </li> */}
                    <li>
                        <Dropdown size="sm">
                            <Dropdown.Toggle style={{ backgroundColor: "rgb(86, 15, 125)" }} id="dropdown-basic">
                                <img
                                    className="user-avatar rounded-circle mr-2" style={{ width: "20px", height: "20px" }}
                                    src={require("./images/navbar/images3.png")}
                                    alt="User Avatar"
                                />
                                <span> {firstName}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ zIdex: 1002 }}>
                                <Dropdown.Item href="#">تغییر رمز عبور</Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout}>خروج از سیستم</Dropdown.Item>
                            </Dropdown.Menu>
                            <a style={{ marginLeft: "10px" }} href="/home" > <FontAwesomeIcon icon={faHomeAlt} style={{ fontSize: "16pt", color: "white" }} title="خانه" ></FontAwesomeIcon></a>
                        </Dropdown>
                    </li>
                </ul>

            </menu >
            <div className='content'>
                {
                    i[0] == active ? <div style={{ zIndex: 8 }} className={active === i[0] ? "active" : ""} key={"شاخص کلیدی عملکرد تراکنش ها"}><div style={{ minHeight: "800px" }} ><TransactionKpI></TransactionKpI></div></div> :
                        i[1] == active ? <div style={{ zIndex: 8 }} className={active === i[1] ? "active" : ""} key={"شاخص کلیدی عملکرد مشتریان"}><div style={{ minHeight: "800px" }} ><CustomerDashboard></CustomerDashboard></div></div> :
                            i[2] == active ? <div style={{ zIndex: 8 }} className={active === i[2] ? "active" : ""} key={"شاخص کلیدی عملکرد محصول"}><div style={{ minHeight: "800px" }} ><ProductDashboard></ProductDashboard></div></div> :
                                i[3] == active ? <div style={{ zIndex: 8 }} className={active === i[3] ? "active" : ""} key={"تحلیل RFM"}><div style={{ minHeight: "800px" }} ><CustomerPredicted></CustomerPredicted></div></div> :
                                    i[4] == active ? <div style={{ zIndex: 8 }} className={active === i[4] ? "active" : ""} key={"پیش بینی مشتریان"}><div style={{ minHeight: "800px" }} ><CustomerInfo></CustomerInfo></div></div> :
                                        i[5] == active ? <div style={{ zIndex: 8 }} className={active === i[5] ? "active" : ""} key={"واتیف"}><div style={{ minHeight: "800px" }} ><WatifCustomer></WatifCustomer></div></div> :
                                            i[6] == active ? <div style={{ zIndex: 8 }} className={active === i[6] ? "active" : ""} key={"واتیف"}><div style={{ minHeight: "800px" }} ><BasketProduct></BasketProduct></div></div> :
                                                i[7] == active ? <div style={{ zIndex: 8 }} className={active === i[7] ? "active" : ""} key={"واتیف"}><div style={{ minHeight: "800px" }} ><WatifCustomer></WatifCustomer></div></div> :
                                                    ""

                }



            </div>
        </section >
    )
}
