import "./Carousel.css";

import React, { useEffect, useState } from "react";

function Carousel(props: any) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(props.data);
    console.log("data.carousel", data);
  }, [props.data]);

  return (
    <div id="demo" className="carousel" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      <div className="carousel-inner">
        {props.data?.carousel.map((item: any, index: number) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              className="d-block"
              width="1100"
              height="500"
              src={item.img}
              alt="First slide"
            />
            <div className="p-4 carousel-caption p-3 d-none d-md-block">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
}

export default Carousel;
