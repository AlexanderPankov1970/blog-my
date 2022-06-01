import jsonPlaceholder from "../apis/jsonPlaceholder";
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

  dispatch({ type: "FETCH_POST", payload: response });
};
