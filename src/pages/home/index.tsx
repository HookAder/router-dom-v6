import React from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";

const Home: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Home;
