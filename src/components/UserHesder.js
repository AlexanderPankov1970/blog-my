import React from "react";
import { connect } from "react-redux";
//import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  //VAR 3 for fetchPostsAndUsers() этот к  componentDidMount() не нужен
  //   componentDidMount() {
  //     this.props.fetchUser(this.props.userId);
  //   }

  render() {
    //const {user}=this.props//VAR 2
    const user = this.props.users.find((user) => user.id === this.props.userId);

    if (!user) {
      return null; //VAR 1
      //return <div>Loading...</div>//VAR 2
    }

    return <div className="header">{user.name}</div>;
  }
}
const mapStateToProps = (state) => {
  //console.log(state.users);
  return { users: state.users };
};
// export default connect(mapStateToProps, { fetchUser })(UserHeader);
export default connect(mapStateToProps)(UserHeader);

//VAR 2
// const mapStateToProps = (state,ownProps) => {
//     //console.log(state.users);
//     return { user: state.users.find((user) => user.id === ownProps.userId) };
//   };//gg279
