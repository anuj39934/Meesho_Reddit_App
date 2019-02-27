import { GET_REDDIT, LOADING } from "../actionTypes";

export const getRedditAsync = redditName => ({
  type: GET_REDDIT,
  payload: {
    redditName
  }
});

export const setLoading = val => ({
  type: LOADING,
  payload: val
});

export function getReddit(redditName) {
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(getRedditAsync(redditName));
  };
}
