import React from "react";

function About(props: any) {
  return (
    <div id="about%20me" className="">
      <h1 className="text-center m-5">About me</h1>
      <br />
      <section className="">
        <div className="container-fluid m-0 ">
          <div className="row d-md-flex-row  overflow-hidden">
            <div className="col-md-4  p-0 col-12 bg-light d-flex overflow-hidden ">
              <div className="card p-0   w-100 h-100 text-light   border-0 ">
                <img
                  className="card-img h-100 w-100"
                  src={props.data && props.data.about.image}
                  alt="Foto Profile"
                />
                <div className="card-img-overlay p-1 p-md-3    ">
                  <div className="position-relative  w-100 h-25  d-flex">
                    <div className="container-fluid align-self-start   mt-2 mb-2">
                      <div className="row">
                        <div className="col-5 col-md-3"></div>
                        <div className="col-md-9 col-7 text-right">
                          <div className="row align-items-center">
                            <div className="col-12 align-self-center"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative  w-100 h-50  d-flex">
                    <div className="container-fluid align-self-center   mt-5 mb-2">
                      <div className="row">
                        <div className="col-12"></div>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative  w-100  h-25 d-flex">
                    <div className="container-fluid align-self-end  mt-5 mb-2">
                      <div className="row">
                        <div className="col-md-6 col-7">
                          <div className=" pt-0 d-inline-block"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8  pt-5 pt-md-1 pb-5 overflow-hidden bg-light">
              <div className="container-fluid p-md-5 d-flex align-items-center h-100">
                <div className="row justify-content-md-center">
                  <div className="col-md-8">
                    <h3 className="small">
                      {props.data && props.data.about.name}
                    </h3>

                    <h1 className="  mb-5 pt-md-2 pt-sm-4">
                      {props.data && props.data.about.title}
                    </h1>
                    <p>{props.data && props.data.about.desc}</p>
                    <h5 className="">Technologies used:</h5>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <span className="badge badge-info badge-pill">
                          Angular
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span className="badge badge-success badge-pill">
                          Python
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span className="badge badge-warning badge-pill">
                          jQuery
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span className="badge badge-dark badge-pill">
                          React
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span className="badge badge-danger badge-pill">
                          HTML/SCSS
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span className="badge badge-primary badge-pill">
                          PostgresSQL
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-4 pt-md-5">
                    <h5 className="mt-md-4 mb-3 small text-uppercase">
                      Frontend
                    </h5>
                    <div className="progress mb-3 mt-2">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{
                          width: props.data && props.data.about.frontend.html,
                        }}
                      >
                        <span className="stacked-label">HTML</span>
                      </div>
                    </div>
                    <div className="progress mb-3 mt-2">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{
                          width: props.data && props.data.about.frontend.css,
                        }}
                      >
                        <span className="stacked-label">CSS</span>
                      </div>
                    </div>
                    <div className="progress mb-3 mt-2">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{
                          width: props.data && props.data.about.frontend.js,
                        }}
                      >
                        <span className="stacked-label">JavaScript</span>
                      </div>
                    </div>
                    <h5 className="mt-md-5 mb-3 small text-uppercase">
                      Backend
                    </h5>
                    <div className="progress mb-3 mt-2">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{
                          width: props.data && props.data.about.backend.asp_net,
                        }}
                      >
                        <span className="stacked-label">ASP.NET</span>
                      </div>
                    </div>
                    <div className="progress mb-3 mt-2">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{
                          width: props.data && props.data.about.backend.node_js,
                        }}
                      >
                        <span className="stacked-label">NodeJs</span>
                      </div>
                    </div>
                    <div className="progress mb-3 mt-2">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{
                          width: props.data && props.data.about.backend.python,
                        }}
                      >
                        <span className="stacked-label">Python</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
