import React, { Component } from "react";
import NewsCard from "../../NewsCard";
import { InfoConsumer } from "../context";

class News extends Component {
  render() {
    return (
      <InfoConsumer>
        {/* <h2>News Page</h2> */}
        {(value) => {
          return value.news.map((item) => {
            return <NewsCard key={item.id} item={item} />;
          });
        }}
      </InfoConsumer>
    );
  }
}

export default News;
