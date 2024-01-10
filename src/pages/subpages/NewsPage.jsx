import React from "react";
import News_Component from "../components/NewsComponent";

const NewsPage = () => {
  return (
    <div>
      <h1>News</h1>
      <div className="wrapper">
        <News_Component />
      </div>
    </div>
  );
};

export default NewsPage;
