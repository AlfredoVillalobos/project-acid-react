import  { RSAA } from 'redux-api-middleware';
export const FETCH_TWEET = "@@tweet/GET"
export const FETCH_TWEET_SUCCESS ="@@tweet/GET_SUCCESS"
export const FETCH_TWEET_FAILURE = "@@tweet/GET_FAILURE"
export const CREATE_TWEET = "@@tweet/POST"
export const CREATE_TWEET_SUCCESS = "@@tweet/POST_SUCCESS"
export const CREATE_TWEET_FAILURE = "@@tweet/POST_ERROR"

export const fetchTweet = () => ({
  [RSAA]: {
    endpoint: `/tweets`,
    method: 'GET',
    types: [
      FETCH_TWEET,
      FETCH_TWEET_SUCCESS,
      FETCH_TWEET_FAILURE
    ]
  }
});

export const createTweet = (data, callback = null) => {
  return dispatch => {
    dispatch({
      [RSAA]: {
        enpoint: `/tweets`,
        method: 'POST',
        body: data, 
        type:[
          CREATE_TWEET,
          {
            type: CREATE_TWEET_SUCCESS,
            payload: (state, action, response) => {
              console.log("sucess", response.message)
              return response.json().then(json => {
                dispatch(alert("success", json.message));
                if (callback) callback(json);
                return json;
              });
            }
          },
          {
            type: CREATE_TWEET_FAILURE,
            payload: (state, action, response) => {
              console.log("error", response.error)
              return response.json().then(json => {
                dispatch(alert("error"));
                if (callback) callback(json);
                return json;
              });
            }
          }
        ]
      }
    });
  }
};