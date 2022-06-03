//VAR 1
// export default (state = [], action) => {
//   if (action.type === "FETCH_POST") {
//     return action.payload;
//   }
//   return state;
// };

//VAR 2
const postReduser = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    default:
      return state;
  }
};

export default postReduser;
