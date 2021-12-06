import { constants } from "./";

export const exit_login = (LoginStatus: boolean) => ({
  type: constants.EXIT_LOGIN,
  LoginStatus,
});