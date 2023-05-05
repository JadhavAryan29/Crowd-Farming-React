import React, { Component } from "react";
import { InfoConsumer } from "./context";

class ReviewCard extends Component {
  render() {
    const { name, avatar, comment } = this.props.person;

    return (
      <InfoConsumer>
        {(data) => (
          <div className="media mt-4">
            <img
              src={avatar}
              alt={name}
              className="mr-3"
              style={{ width: "40px" }}
            />
            <div className="media-body">
              <h5 className="mt-0" style={{ color: "#132743" }}>
                {name}
              </h5>
              <p style={{ color: "#497285" }}>{comment}</p>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}

export default ReviewCard;
