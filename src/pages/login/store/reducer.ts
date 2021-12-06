import { Action } from "redux";
import { constants } from "./";
import { constants as myConstants } from "../../my/store";
export interface StateProps {
  user: string;
  pass: string;
  LoginStatus: boolean;
}

const defaultState: StateProps = {
  user: "",
  pass: "",
  LoginStatus: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action: Action | any) => {
  if (action.type === constants.CHANGE_USER) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.user = action.user;
    return newState;
  } else if (action.type === constants.CHANGE_PASS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.pass = action.pass;
    return newState;
  } else if (action.type === constants.LOGIN) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.LoginStatus = action.LoginStatus;
    return newState;
  } else if (action.type === myConstants.EXIT_LOGIN) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.LoginStatus = action.LoginStatus;
    return newState;
  }
  return state;
};
