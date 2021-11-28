import React from "react";
import NavBar from "../../common/nav";
import Header from "../../common/header";
import BarText from "./components/BarText";
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  },
];

const View: React.FC = () => {
  return (
    <div className="home-view">
      <Header title="首页" />
      <Carousel autoPlay={true} showThumbs={false} showArrows={false}>
        {images.map((item, index) => (
          <div key={index}>
            <img src={item.original} alt="" />
          </div>
        ))}
      </Carousel>
      {/* 文章列表 */}
      <BarText />
      {/* 底部导航 */}
      <NavBar />
    </div>
  );
};

export default View;
