import {
  FETCH_TWEET_SUCCESS,
  FETCH_TWEET_FAILURE,
} from "../actions/tweets"

export const tweetReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TWEET_SUCCESS:
      return{
        ...state,
        tweets: action.payload
      }
    case FETCH_TWEET_FAILURE:
      return action.payload
    default:
      return{
        ...state
      }
  }
}