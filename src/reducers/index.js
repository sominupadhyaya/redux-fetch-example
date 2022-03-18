import { combineReducers } from "redux";
import { dataReducer } from './datareducer'
export default combineReducers({
    mainData : dataReducer
})
