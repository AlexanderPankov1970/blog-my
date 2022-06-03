import React from "react";
import { connect } from "react-redux";
//import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  //   componentDidMount() {
  //     this.props.fetchUser(this.props.userId);
  //   }

  render() {
    const user = this.props.users.find((user) => user.id === this.props.userId);

    if (!user) {
      return null; //VAR 1
      //return <div>Loading...</div>//VAR 2
    }

    return <div className="header">{user.name}</div>;
  }
}
const mapStateToProps = (state) => {
  return { users: state.users };
};
// export default connect(mapStateToProps, { fetchUser })(UserHeader);
export default connect(mapStateToProps)(UserHeader);
