import { combineReducers } from "redux";
import { reducer as LoginReducer } from "../pages/login/store";
import { reducer as MyReducer } from "../pages/my/store";

export default combineReducers({
  login: LoginReducer,
  my: MyReducer,
});
