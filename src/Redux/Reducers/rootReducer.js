import {combineReducers} from "redux";
import {redditReducer,loadingReducer } from './reddit';

const combineReducersFn = combineReducers({
    reddit : redditReducer,
    loading : loadingReducer
});

export default combineReducersFn;