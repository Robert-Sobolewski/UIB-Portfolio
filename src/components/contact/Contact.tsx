import React from "react";

function Contact(props: any) {
  return (
    <div id="contact" className="p-5">
      <h1 className="text-center m-4">Contact</h1>
      <br />
      <section className="pb-5 pt-0">
        <div className="container-fluid p-0 pb-3">
          <iframe
            title="map"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4862.801329610763!2d9.071760376972374!3d49.78645739458172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1631676921011!5m2!1sen!2sde"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: 0 }}
            // allowFullScreen="undefined"
            loading="lazy"
          ></iframe>
        </div>
        <div className="container">
          <div className="row text-center justify-content-center pt-5">
            <div className="col-12 col-md-7">
              <h1>Contact me</h1>
            </div>
          </div>

          <div className="row justify-content-center pt-4">
            <div className="col-12 col-md-7">
              <form>
                <div className="row">
                  <div className="col">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <input
                      required
                      type="email"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <textarea
                      required
                      className="form-control"
                      name="message"
                      // rows="3"
                      placeholder="How can I help?"
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row-100"></div>
        </div>
        <div className="bg-dark mt-5 pt-5 pb-5 text-light">
          <div className="container">
            <div className="row-50"></div>
            <div className="row justify-content-center text-center">
              <div className="col-12 col-md mr-auto ml-auto">
                <img
                  alt=""
                  height="40"
                  className="mb-2 rounded-circle"
                  src="http://via.placeholder.com/80x80/5fa9f8/efefef"
                />

                <p className="text-h3">
                  {props.data && props.data[4].contact.phone}
                </p>
              </div>

              <div className="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">
                <img
                  alt=""
                  height="40"
                  className="rounded-circle mb-2"
                  src="http://via.placeholder.com/80x80/5fa9f8/efefef"
                />
                <p className="text-h3">
                  {props.data && props.data[4].contact.address}
                </p>
              </div>

              <div className="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">
                <img
                  alt=""
                  height="40"
                  className="rounded-circle mb-2"
                  src="http://via.placeholder.com/80x80/5fa9f8/efefef"
                />
                <p className="text-h3">
                  {props.data && props.data[4].contact.email}
                </p>
              </div>
            </div>
            <div className="row-50"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
