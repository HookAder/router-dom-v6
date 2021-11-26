import React from "react";
import Header from '../../common/header';
import NavBar from '../../common/nav';
import "./style.scss";

const My: React.FC = () => {
  return (
    <div>
      <Header title="我的" />
      <h1>My View</h1>
      <NavBar />
    </div>
  );
};

export default My;
