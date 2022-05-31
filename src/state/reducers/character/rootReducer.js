import { combineReducers } from "redux";
import characterReducer from "./characterReducers";

const rootReducer = () =>
  combineReducers({
    character: characterReducer,
  });

export default rootReducer;
