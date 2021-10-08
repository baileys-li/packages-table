import { combineReducers } from "redux";
import formShowerReducer from "./formShowerReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
	formShower: formShowerReducer,
	filter: filterReducer,
});
