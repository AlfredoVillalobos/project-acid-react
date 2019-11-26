import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";
import { tweetReducer } from "./tweets"

export default combineReducers ({
  form: formReducer,
  router: routerReducer,
  tweets: tweetReducer
})


