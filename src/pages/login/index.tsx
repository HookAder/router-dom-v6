import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import "./style.scss";

interface FormProps {
  type: string;
  value: string;
  onChange: any;
}

// 表格组件
const FormTable: React.FC<FormProps> = ({ onChange, value, type }) => {
  return (
    <input type={type} onChange={(event) => onChange(event)} value={value} />
  );
};

const Login: React.FC = (props: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.LoginStatus) {
      navigate("/", { replace: true });
    }
  }, [props.LoginStatus, navigate]);
  return (
    <div className="login-wrapper">
      <div className="top-header">
        <h2>测试项目</h2>
      </div>
      <h3>登录</h3>
      <div className="form-wrapper">
        <FormTable
          type="text"
          value={props.user}
          onChange={(e: any) => props.onChangeUser(e.target.value)}
        />
        <br />
        <FormTable
          type="password"
          value={props.pass}
          onChange={(e: any) => props.onChangePass(e.target.value)}
        />
        <br />
        <button
          className="login-btn"
          onClick={() => props.onLogin(props.user, props.pass)}>
          登陆
        </button>
      </div>
    </div>
  );
};

const mapStateProps = (state: any) => ({
  user: state.login.user,
  pass: state.login.pass,
  LoginStatus: state.login.LoginStatus,
});

const mapDispatchProps = (dispatch: any) => ({
  onChangeUser(user: string) {
    dispatch(actionCreators.change_user(user));
  },
  onChangePass(pass: string) {
    dispatch(actionCreators.change_pass(pass));
  },
  onLogin(user: string, pass: string) {
    dispatch(actionCreators.login(user, pass));
  },
});

export default connect(mapStateProps, mapDispatchProps)(Login);
