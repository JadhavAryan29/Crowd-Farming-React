import React, { Component } from "react";
import { InfoConsumer } from "../context";
import styled from "styled-components";
import Reviews from "../Reviews";

class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const {
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            title,
            maps,
            description,
          } = data.detailInfo;

          return (
            <>
              <HeaderDetails className="container-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                <h4 className="display-5">{headerSubTitle}</h4>
                <p>{headerText}</p>
                {/* Social Icons */}
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2 text-center">
                      <i className="fa fa-facebook-f" />
                    </div>
                    <div className="col-2 text-center">
                      <i className="fa fa-twitter" />
                    </div>
                    <div className="col-2 text-center">
                      <i className="fa fa-google-plus" />
                    </div>
                    <div className="col-2 text-center">
                      <i className="fa fa-reddit" />
                    </div>
                    <div className="col-2 text-center">
                      <i className="fa fa-whatsapp" />
                    </div>
                    <div className="col-2 text-center">
                      <i className="fa fa-phone-square" />
                    </div>
                  </div>
                </div>
              </HeaderDetails>
              {/* Tabbed Display */}
              <div className="container">
                {/* Tabs */}
                <ul className="nav nav-tabs">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="about-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#about"
                      type="button"
                      role="tab"
                      aria-controls="about"
                      aria-selected="true"
                    >
                      About
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="review-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#review"
                      type="button"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                    >
                      Review
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="map-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#map"
                      type="button"
                      role="tab"
                      aria-controls="map"
                      aria-selected="false"
                    >
                      Map
                    </button>
                  </li>
                </ul>
                {/* Tab Pane */}
                <div className="tab-content mb-5">
                  {/* About */}
                  <div
                    class="tab-pane active text-center mt-5"
                    id="about"
                    role="tabpanel"
                    aria-labelledby="about-tab"
                  >
                    <h2 className="mb-3" style={{ color: "#132743" }}>
                      {title}
                    </h2>
                    <p style={{ color: "#497285" }}>{description}</p>
                    <img
                      src={img}
                      width={"30%"}
                      height={"30%"}
                      alt={title}
                      className="img-thumbnail img-fluid"
                    />
                  </div>
                  {/* Reviews */}
                  <div
                    class="tab-pane"
                    id="review"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                  >
                    <Reviews />
                  </div>
                  {/* Map */}
                  <div
                    id="map"
                    className="tab-pane "
                    role="tabpanel"
                    aria-labelledby="map-tab"
                  >
                    <iframe
                      src={maps}
                      title={title}
                      style={{
                        border: "0",
                        height: "28.125rem",
                        width: "100%",
                        frameBorder: "0",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Details;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
  }

  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }

  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }

  .nav-item {
    height: 18.75rem;
  }

  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
