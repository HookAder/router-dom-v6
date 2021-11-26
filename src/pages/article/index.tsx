import React from "react";

interface ArticleProps {
  title: string;
  text: string;
}

const Article: React.FC<ArticleProps> = ({ title, text }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{text}</h3>
    </div>
  );
};

export default Article;
