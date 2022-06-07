import React from "react";
import { connect } from "react-redux";
//import { fetchPosts } from "../actions";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHesder";

class PostList extends React.Component {
  componentDidMount() {
    //this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderlist() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle algned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    //console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderlist()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, {
  fetchPostsAndUsers: fetchPostsAndUsers,
})(PostList);
//Пока устанавливаем null вместо mapStateToProps
//export default connect(null, {
//   //fetchPosts:FetchPosts
//     fetchPostsAndUsers: fetchPostsAndUsers,
//   })(PostList);
