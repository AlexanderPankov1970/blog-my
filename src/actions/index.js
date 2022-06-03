import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash"; //VAR 2 (_ это обозначение Lodash)

//VAR 1
// export const fetchPosts = () => {
//   return async (dispatch)=> {
//     const response = await jsonPlaceholder.get("/posts");
//     dispatch({type: "FETCH_POST", payload: response,
//     });
//   };
// };
//VAR 2
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POST", payload: response.data });
};
//VAR 1
// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

//VAR 2 Позволяет через кэш делать запрос только один раз!
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
//VAR 3
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  //console.log(getState().posts);
  //const userAllId = _.map(getState().posts, "userId");
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  //console.log(userAllId, userIds);
  userIds.forEach((id) => dispatch(fetchUser(id)));
  console.log(getState());
  //   await Promise.all(userIds.map((id) => dispatch(fetchUser(id)))).then(
  //     console.log(getState())
  //   );
  //console.log(getState().users);
};
