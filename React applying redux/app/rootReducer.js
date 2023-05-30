import { combineReducers } from "redux";
import userreducer from "../features/user/userReducer";

const rootreducer = combineReducers({
    user : userreducer,
})

export default rootreducer;

