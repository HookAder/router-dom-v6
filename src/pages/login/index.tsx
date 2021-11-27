import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";
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

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUser] = useState<string>("");
  const [password, setPass] = useState<string>("");

  const onChangeUser = (user: string) => {
    setUser(user);
  };
  const onChangePass = (pass: string) => {
    setPass(pass);
  };
  const onLogin = async (user: string, pass: string) => {
    const {
      data: { data },
    } = await login({ username: user, password: pass });
    if (user !== data.username && pass !== data.password) {
      console.log({
        msg: "账号或密码错误",
        status: 0,
      });
      return;
    }
    console.log({
      msg: "登录成功",
      status: 200,
    });
    navigate("/", { replace: true });
  };
  return (
    <div className="login-wrapper">
      <div className="top-header">
        <h2>测试项目</h2>
      </div>
      <h3>登录</h3>
      <div className="form-wrapper">
        <FormTable
          type="text"
          value={username}
          onChange={(e: any) => onChangeUser(e.target.value)}
        />
        <br />
        <FormTable
          type="password"
          value={password}
          onChange={(e: any) => onChangePass(e.target.value)}
        />
        <br />
        <button
          className="login-btn"
          onClick={() => onLogin(username, password)}>
          登陆
        </button>
      </div>
    </div>
  );
};

export default Login;
