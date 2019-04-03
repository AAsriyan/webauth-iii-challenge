import React, { Component } from "react";
import axios from "axios";

export class Users extends Component {
  state = {};

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/api/users")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
      </div>
    );
  }
}

export default Users;
