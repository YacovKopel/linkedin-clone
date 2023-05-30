import { FiberManualRecord, Info } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Widget.css";

function Widget() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const url =
        "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=technology&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_NEWS_API_KEY,
          "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        const { value: articles } = data;
        setArticles(articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  const newsArticles = articles.map((article, index) => (
    <div className="widgets_article" key={index}>
      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets_articleRight">
        <h4>{article.title}</h4>
        <p>{article.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticles}
    </div>
  );
}

export default Widget;
