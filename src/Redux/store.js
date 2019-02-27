import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';
import appInitialState from './initialState';
import combineReducerFn from './Reducers/rootReducer';

export default function configureStore(initialState = appInitialState){
    return createStore(combineReducerFn, appInitialState, applyMiddleware(thunk));
}