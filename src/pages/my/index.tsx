import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../login/store";
import Header from "../../common/header";
import NavBar from "../../common/nav";
import "./style.scss";

const My: React.FC = (props: any) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.LoginStatus) {
      navigate("/login", { replace: true });
    }
  }, [navigate, props.LoginStatus]);
  return (
    <div>
      <Header title="我的" />
      <h1>My View</h1>
      <button onClick={() => props.onExitLogin(false)}>退出登录</button>
      <NavBar />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  LoginStatus: state.login.LoginStatus,
});

const mapDispatchToProps = (dispatch: any) => ({
  onExitLogin(loginStatus: boolean) {
    dispatch(actionCreators.exit_login(loginStatus));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(My);
