import React, { useState, useEffect } from 'react'
import "./assets/test.css"
import { NotFound } from "./NotFound"
import { Resiliency } from './Saham/Resiliency';
import { Profitability } from './Saham/Profitability';
import { NaghdinegiSal } from './Saham/NaghdinegiSal';
import { Productivity } from './Saham/Productivity';
import { TahlilGeymat } from './Saham/TahlilGeymat';
import { WordCloudPos } from './Saham/WordCloudPos';
import { WatifZanjire } from './Zanjire/WatifZanjire';
import { Dion } from './Saham/Dion';
import Dropdown from 'react-bootstrap/Dropdown';
import { WatifSaham } from './Saham/WatifSaham';
import { TabAvar } from './Saham/TabAvar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt } from '@fortawesome/free-solid-svg-icons'

export const MainSaham2 = () => {

    const [tabs, setTabs] = useState([]);
    const [contents, setContents] = useState([]);
    const [active, setActive] = useState(0);
    const [i, setI] = useState([0, 1, 2, 3]);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("LoginTocken"))
        setFirstName(user.userFirstName);
        setLastName(user.userLastName);
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

    const handleBack = () => {
        window.history.back()
    }
    return (
        <section className="tabs">
            <menu>
                <ul>
                    <li
                        className={active === i[0] ? "tab active" : "tab"}
                        key={"تاب آوری"}
                        tabIndex={i[0]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[0] ? i.length : i.length - i[0] - 1 }}>
                        <a href={"#" + "تاب آوری"}>تاب آوری
                            <img src={require("./images/menu/9.png")} className='m1'></img>
                        </a>
                    </li>
                    <li
                        className={active === i[1] ? "tab active" : "tab"}
                        key={"تحلیل قیمت"}
                        tabIndex={i[1]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[1] ? i.length : i.length - i[1] - 1 }}>
                        <a href={"#" + "تحلیل قیمت"}>تحلیل قیمت
                            <img src={require("./images/menu/10.png")} className='m1'></img>
                        </a>
                    </li>
                    <li
                        className={active === i[2] ? "tab active" : "tab"}
                        key={"واتیف"}
                        tabIndex={i[2]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[2] ? i.length : i.length - i[2] - 1 }}>
                        <a href={"#" + "واتیف"}>
                            تحلیل رفتار سهامداران
                            <img src={require("./images/menu/6.png")} className='m1'></img>
                        </a>
                    </li>
                    <li
                        className={active === i[3] ? "tab active" : "tab"}
                        key={"واتیف"}
                        tabIndex={i[3]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[3] ? i.length : i.length - i[3] - 1 }}>
                        <a href={"#" + "   تحلیل احساسات"}>
                            تحلیل احساسات
                            <img src={require("./images/menu/6.png")} className='m1'></img>
                        </a>
                    </li>
                    <li>

                        {/* <FontAwesomeIcon icon={faHomeAlt} style={{ fontSize: "16pt", color: "#530c8e", marginTop: "7px" }} title="خانه" onClick={this.handleBack} /> */}

                        <Dropdown size="sm">

                            <Dropdown.Toggle style={{ backgroundColor: "rgb(86, 15, 125)" }} id="dropdown-basic">
                                <img
                                    className="user-avatar rounded-circle mr-2" style={{ width: "20px", height: "20px" }}
                                    src={require("./images/navbar/images3.png")}
                                    alt="User Avatar"
                                />
                                <span>{firstName}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ zIdex: 1002 }}>
                                <Dropdown.Item href="#">تغییر رمز عبور</Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout}>خروج از سیستم</Dropdown.Item>
                            </Dropdown.Menu>
                            <a style={{ marginLeft: "10px" }} href="/home" > <FontAwesomeIcon icon={faHomeAlt} style={{ fontSize: "16pt", color: "white" }} title="خانه" ></FontAwesomeIcon></a>
                        </Dropdown>
                    </li>
                </ul>
            </menu>
            <div className='content'>
                {
                    i[0] == active ? <div style={{ zIndex: 8 }} className={active === i[0] ? "active" : ""} key={"تاب آوری"}><div style={{ minHeight: "800px" }} ><TabAvar></TabAvar></div></div> :
                        i[1] == active ? <div style={{ zIndex: 8 }} className={active === i[1] ? "active" : ""} key={"تحلیل قیمت"}><div style={{ minHeight: "800px" }} ><TahlilGeymat></TahlilGeymat></div></div> :
                            i[2] == active ? <div style={{ zIndex: 8 }} className={active === i[2] ? "active" : ""} key={"واتیف"}><div style={{ minHeight: "800px" }} ><WatifSaham></WatifSaham></div></div> :
                                i[3] == active ? <div style={{ zIndex: 8 }} className={active === i[3] ? "active" : ""} key={"تحلیل احساسات"}><div style={{ minHeight: "800px" }} ><WordCloudPos></WordCloudPos></div></div> : ""

                    //<WordCloudPos></WordCloudPos>

                }
            </div>
        </section>
    )
}
