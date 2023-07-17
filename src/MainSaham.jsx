import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Badge,
    Button
} from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faTriangleExclamation, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import MainNavbar from './components/layout/MainNavbar/MainNavbar';

export const MainSaham = () => {
   
    return (
        <div>
            <MainNavbar></MainNavbar>
            <Container fluid className="main-content-container" >
                <div
                    id="carouselMultiItemExample"
                    style={{ fontWeight: "500", fontSize: "18", fontFamily: "IRANSans" }}
                    className="carousel slide carousel-dark text-center "
                    data-mdb-ride="carousel">
                    <div className="d-flex justify-content-center mb-4">
                    </div>
                    <div className="carousel-inner py-4">
                        <div className="carousel-item active ">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <img
                                                src={require("../src/images/avatars/dashboard.jpg")}
                                                className="card-img-top" style={{ minHeight: "400px" }}
                                                alt="Waterfall"
                                            />
                                            <div className="card-body">
                                                <a className="card-title text-primarry" href="/dashboardsaham">داشبورد</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src={require("../src/images/avatars/Whatif.jpg")}
                                                className="card-img-top" style={{ minHeight: "400px" }}
                                                alt="Sunset Over the Sea"
                                            />
                                            <div className="card-body">
                                                <a className="card-title text-primary" href="/watifsaham">واتیف</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    )
}
