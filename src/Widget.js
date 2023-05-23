import { FiberManualRecord, Info } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Widget.css";

function Widget() {
  const [articles, setArticles] = useState([]);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=10&apiKey=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        const { articles } = data;
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
