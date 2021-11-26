import React from "react";
import NavBar from "../../common/nav";
import Header from "../../common/header";
import BarText from "./components/BarText";

const View: React.FC = () => {
  return (
    <div className="home-view">
      <Header title="首页" />
      <img
        src="https://img0.baidu.com/it/u=4250129360,3196677315&fm=26&fmt=auto"
        alt=""
      />
      {/* 文章列表 */}
      <BarText />
      {/* 底部导航 */}
      <NavBar />
    </div>
  );
};

export default View;
