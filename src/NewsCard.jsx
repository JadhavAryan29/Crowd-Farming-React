import React, { Component } from "react";
import { Link } from "react-router-dom";
import { InfoConsumer } from "./Components/context";

class NewsCard extends Component {
  render() {
    const { id, newsTitle, newsText } = this.props.item;
    return (
      <InfoConsumer>
        {(value) => (
          <div className="card container mt-5 mb-3 p-5">
            <div className="card-body">
              <h5 key={id} className="card-title" style={{ color: "#132743" }}>
                {newsTitle}
              </h5>
              <p className="card-text" style={{ color: "#497285" }}>
                {newsText}
              </p>
              <Link to="/" className="card-link" style={{ color: "#233142" }}>
                Read More
              </Link>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}

export default NewsCard;
