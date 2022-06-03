import { combineReducers } from "redux";
import postReduser from "./postReduser";
import usersReduser from "./usersReduser";

export default combineReducers({
  posts: postReduser,
  users: usersReduser,
});
//bypass the error at the initial stage:
// export default combineReducers({
//   fishkaObxodaOshibki: () => "Hi there",
// });
