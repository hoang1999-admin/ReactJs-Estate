import axios from "axios";
import React from "react";

const API_URL = "http://localhost:8080/api/v1/auth/";

class AuthService extends React.Component{
    
  login(username, password) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password,roles) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      roles
    });
  }
}

export default new AuthService();
