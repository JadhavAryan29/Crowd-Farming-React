import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3 style={{ color: "#132743" }}>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7 mt-4">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/d/embed?mid=1Vwv8mo-Uwgunyx90rNm6pOvGA39R_8I&ehbc=2E312F"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0",
                }}
              ></iframe>
            </div>
            <div className="col-md-5">
              <h4 style={{ color: "#132743" }}>
                <strong>Contact Us</strong>
              </h4>
              <form action="">
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  className="form-control mt-2"
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Message"
                ></textarea>
                <Link
                  to="/"
                  className="btn btn-outline-secondary text-uppercase mt-2"
                >
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
