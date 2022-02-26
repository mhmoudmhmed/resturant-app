import { combineReducers } from "redux";
import resturantReducer from "./resturantReducer";

export const rootReducer = combineReducers({
  resturants: resturantReducer,
});
