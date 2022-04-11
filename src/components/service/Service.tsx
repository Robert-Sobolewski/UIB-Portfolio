import React from "react";

function Service(props: any) {
  return (
    <div id="services" className="p-5">
      <h1 className="text-center m-4">Services</h1>
      <br />
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-6   mt-4 mt-md-0 order-md-1 order-2">
              <img
                alt=""
                className="img-fluid"
                width="650"
                height="450"
                src={props.data && props.data[3].services[0].image}
              />
            </div>
            <div className="col-12 col-md-4 order-1 order-md-2">
              <h2>{props.data && props.data[3].services[0].title}</h2>
              <p className="text-h3 mt-3">
                {props.data && props.data[3].services[0].desc}
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-center pt-5 pb-5">
            <div className="col-12 col-md-4 offset-md-1  ">
              <h2>{props.data && props.data[3].services[1].title}</h2>
              <p className="text-h3 mt-3">
                {props.data && props.data[3].services[1].desc}
              </p>
            </div>
            <div className="col-12 col-md-6   mt-4 mt-md-0">
              <img
                alt=""
                className="img-fluid"
                width="650"
                height="450"
                src={props.data && props.data[3].services[1].image}
              />
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-6   mt-4 mt-md-0 order-md-1 order-2">
              <img
                alt=""
                className="img-fluid"
                width="650"
                height="450"
                src={props.data && props.data[3].services[2].image}
              />
            </div>
            <div className="col-12 col-md-4 order-1 order-md-2">
              <h2>{props.data && props.data[3].services[2].title}</h2>
              <p className="text-h3 mt-3">
                {props.data && props.data[3].services[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
