import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class NotFoundPage extends Component {
  render() {
    return (
      <ComponentNotFound className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1 style={{ color: "#132743" }}>Whoops!</h1>
              <h2 style={{ color: "#132743" }}>Error 404 - Page Not Found</h2>
              <div className="error-details" style={{ color: "#497285" }}>
                Sorry, nothing exists at this URL.
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-outline-secondary  btn-lg">
                  <i className="fa fa-home" />
                  &nbsp;Back to Main
                </Link>
                <Link to="/contact" className="btn btn-outline-danger btn-lg">
                  <i className="fa fa-envelope" />
                  &nbsp;Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ComponentNotFound>
    );
  }
}

export default NotFoundPage;

const ComponentNotFound = styled.div`
  .error-template {
    padding: 40px 15px;
    text-align: center;
  }

  .error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .btn {
    margin-right: 10px;
  }
`;
