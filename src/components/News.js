import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "", name: "" },
      author: "",
      title: "",
      description: "",
      url: "",
      urlToImage: "",
      publishedAt: "",
      content: "",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  //One of the react lifecycle
    async componentDidMount() {
        let url =
          "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b6aebbc4274040ada1ccf8a86760fa0e";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
  }
    
  render() {
    return (
      <>
        <h4 className="ptb-5">Fetching Articles from News API</h4>
        <div className="row">
          {this.state.articles.map((item) => (
            <div className="col-md-3 my-2" key={item.url}>
              <NewsItem
                title={item.title ? item.title : "Title does not exist"}
                description={
                  item.description
                    ? item.description.slice(0, 80)
                    : "Description does not exist"
                }
                url={item.url}
                imgUrl={
                  !item.urlToImage
                    ? "https://ambcrypto.com/wp-content/uploads/2024/05/Bitcoin_liquidation_2-1000x600.webp"
                    : item.urlToImage
                }
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default News;
