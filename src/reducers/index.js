import { combineReducers } from "redux";
import postReduser from "./postReduser";

export default combineReducers({
  posts: postReduser,
});
//bypass the error at the initial stage:
// export default combineReducers({
//   fishkaObxodaOshibki: () => "Hi there",
// });
