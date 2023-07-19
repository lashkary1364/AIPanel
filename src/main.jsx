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
import MainNavbar from '../components/layout/MainNavbar/MainNavbar';

export const Main = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  // const signOut = () => {
  //   sessionStorage.clear();
  //   localStorage.clear();
  //   window.location.replace('/login');
  // }

  return (
    <div>
      <MainNavbar></MainNavbar>
      <Container fluid className="main-content-container" >
        {/* <div style={{ marginTop: "5px" }}>
          <Row>
            <Col lg="4" md="6" sm="12" className="mb-4" >
              <Button type="button" theme="secondary" onClick={signOut}  >
                <FontAwesomeIcon icon={faRightFromBracket} />
              </Button>
            </Col>
          </Row>
        </div> */}
        <div
          id="carouselMultiItemExample"
          style={{ fontWeight: "500", fontSize: "18", fontFamily: "IRANSans" }}
          className="carousel slide carousel-dark text-center "
          data-mdb-ride="carousel"
        >
          <div className="d-flex justify-content-center mb-4">
          </div>
          {/* <button
      className="carousel-control-prev position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button> */}
          {/* <button
      className="carousel-control-next position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> */}

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
                        <a className="card-title text-primarry" href="/kpi">داشبورد</a>
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
                        <a className="card-title text-primary" href="/barchart">واتیف</a>
                        {/* <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a> */}
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div> */}
                </div>
              </div>
            </div>


            {/* <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                className="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                className="card-img-top"
                alt="Storm Clouds"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                className="card-img-top"
                alt="Hot Air Balloons"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                className="card-img-top"
                alt="Peaks Against the Starry Sky"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                className="card-img-top"
                alt="Bridge Over Water"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                className="card-img-top"
                alt="Purbeck Heritage Coast"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
          </div>
        </div>
      </Container>
    </div>

  )
}
