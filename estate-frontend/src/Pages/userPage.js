import React from "react";
import HomeServices from "../HomeServices/HomeServices";


class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };

    this.userService = new HomeServices();
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    this.userService.getUser(id).then(response => {
      this.setState({ user: response });
    });
  }

  render() {
    const user = this.state.user;

    return (
      <div>
        <h2>Name: {user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    );
  }
}

export default UserPage;