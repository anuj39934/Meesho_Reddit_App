import {GET_REDDIT, LOADING} from '../actionTypes';
import initialState from '../initialState';

export const redditReducer = (
    state = initialState.reddit,
    action = {}
) => {
    switch (action.type) {
        case GET_REDDIT:
            return action.payload;
        default:
            return state;
    }
}

export const loadingReducer = (
    state = initialState.loading,
    action = {}
) => {
    switch (action.type) {
        case LOADING:
            return action.payload;
        default:
            return state;
    }
}
