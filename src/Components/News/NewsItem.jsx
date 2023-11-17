import React, { Component } from "react";
import "./News.css";

class NewsItem extends Component {
  render() {
    let handleReadMore = () => {
      const { url } = this.props;
      window.location.href = url;
    };

    let { title, imgUrl, description } = this.props;

    return (
      <>
        <div id="news-container">
          <div id="card-main">
            <img src={imgUrl} alt={title} />
            <div id="content">
              <h4>{title}</h4>
              <p>{description}</p>
              <button onClick={handleReadMore}> Read More ...</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default NewsItem;
