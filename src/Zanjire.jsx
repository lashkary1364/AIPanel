import React, { useState, useEffect } from 'react'
import "./assets/test.css"
import { WatifZanjire } from './Zanjire/WatifZanjire';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt } from '@fortawesome/free-solid-svg-icons'
export const Zanjire = () => {
    const [tabs, setTabs] = useState([]);
    const [contents, setContents] = useState([]);
    const [active, setActive] = useState(0);
    const [i, setI] = useState([0]);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("LoginTocken"))
        setFirstName(user.userFirstName);

    }, [])

    const clickHandler = (e) => {
        e.preventDefault();
        setActive(parseInt(e.currentTarget.attributes.tabIndex.value));
    }

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



    return (
        <section className="tabs">
            <menu>
                <ul>
                    <li
                        className={active === i[0] ? "tab active" : "tab"}
                        key={"واتیف"}
                        tabIndex={i[0]}
                        onClick={(e) => clickHandler(e)}
                        style={{ zIndex: active === i[0] ? i.length : i.length - i[0] - 1 }}>
                        <a href={"#" + "واتیف"}>{"واتیف"}
                            <img src={require("./images/menu/6.png")} className='m1'></img>
                        </a>
                    </li>
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
                                <Dropdown.Item href="#/action-1">تغییر رمز عبور</Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout}>خروج از سیستم</Dropdown.Item>
                            </Dropdown.Menu>

                            <a style={{ marginLeft: "10px" }} href="/home" > <FontAwesomeIcon icon={faHomeAlt} style={{ fontSize: "16pt", color: "white" }} title="خانه" ></FontAwesomeIcon></a>
                        </Dropdown>
                    </li>
                </ul>

            </menu >
            <div className='content'>
                {
                    i[0] == active ? <div style={{ zIndex: 8 }} className={active === i[0] ? "active" : ""} key={"واتیف"}><div style={{ minHeight: "800px" }} ><WatifZanjire></WatifZanjire></div></div> : ""
                }
            </div>
        </section >
    )
}
