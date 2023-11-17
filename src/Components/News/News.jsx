import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?county=in&apiKey=35df248b4570426284122fbc48f36c74&q=business";

    try {
      const response = await fetch(url);
      const result = await response.json();
      this.setState({ articles: result.articles, loading: false });
      console.log(result);
    } catch (error) {
      console.error(error);
      this.state({ loading: false });
    }
  }

  render() {
    return (
      <>
        <div id="BgColorNews">
          <div id="tagline">
            <h1>News</h1>
          </div>
          <div id="news-main">
            {this.state.articles.map((item , index) => {
              return (
                <>
                  <NewsItem
                    key={item.source.id + index}
                    imgUrl={
                      !item.urlToImage
                        ? "https://imgs.search.brave.com/DoEXdXsQOLPS9duD9VeMKyQ9ICdzO_q-ylAH6ViU0yg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9nbG9iYWwtYnVz/aW5lc3MtdGVjaG5v/bG9neS1uZXdzLWNv/bmNlcHQtd2l0aC10/ZW1wbGF0ZS1icmVh/a2luZy1uZXdzLXR2/LXBvZGNhc3QtM2Qt/cmVuZGVyaW5nXzY3/MDE0Ny03MC5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw"
                        : item.urlToImage
                    }
                    title={item.title}
                    description={item.description}
                    url={item.url}
                  />
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
