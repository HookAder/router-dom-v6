import { constants } from "./";
import { constants as myConstants } from '../../my/store';
import * as Api from "../../../api";

export const change_user = (user: string) => ({
  type: constants.CHANGE_USER,
  user,
});

export const change_pass = (pass: string) => ({
  type: constants.CHANGE_PASS,
  pass,
});

const change_login = (LoginStatus: boolean) => ({
  type: constants.LOGIN,
  LoginStatus,
});

// 退出登录
export const exit_login = (LoginStatus: boolean) => ({
  type: myConstants.EXIT_LOGIN,
  LoginStatus,
});

export const login = (user: string, pass: string) => {
  return async (dispatch: any) => {
    const { data } = await Api.login();
    if (user === data.data.username && pass === data.data.password) {
      console.log(data);
      dispatch(change_login(true));
    } else {
      console.log({ status: 0, msg: "账号或密码错误" });
    }
  };
};
