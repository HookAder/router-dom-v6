import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../common/header";
import NavBar from "../../common/nav";
import "./style.scss";

const My: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header title="我的" />
      <h1>My View</h1>
      <button onClick={() => navigate("/login", { replace: true })}>
        退出登录
      </button>
      <NavBar />
    </div>
  );
};

export default My;
