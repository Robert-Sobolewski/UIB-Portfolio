import "./Card.css";

import React from "react";

function Card(props: any) {
  console.log(props);
  return (
    <div id="portfolio">
      <h1 className="text-center m-4">Portfolio</h1>
      <div className="container">
        <div className="row d-flex justify-content-around">
          {props.data &&
            props.data[2].cards.map((c: any) => (
              <div
                key="{c}"
                className="card mb-5"
                style={{ width: 18 + "rem" }}
              >
                <i
                  id="i2"
                  className={`fab ${c.icon} card-img-top text-center m-2 fa-5x`}
                ></i>
                <div className="card-body d-flex justify-content-center flex-column">
                  <h5 className="card-title text-center">{c.title}</h5>
                  <p className="card-text">{c.desc}</p>
                  <a href={c.href} className="btn text-center btn-primary">
                    {c.btn_text}
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
