import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import classes from "./News.module.scss";

const News = () => {
  useDocumentTitle("News");
  return <div>News</div>;
};

export default News;
