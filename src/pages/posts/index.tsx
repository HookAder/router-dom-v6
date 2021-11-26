import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../common/header";
import Article from "../article/index";

const Posts: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      <Header title={location.state.title} />
      <Article title={location.state.title} text={location.state.text} />
    </div>
  );
};

export default Posts;
