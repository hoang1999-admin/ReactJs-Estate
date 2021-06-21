import axios from "axios";
import React from "react";
import authHeader from "../Author/Auth-Header";

const API_URL = "http://localhost:8080/api/v1/cart/";

class UserService extends React.Component{
  
  postCart() {
    return axios.get(API_URL + "addProduct", { headers: authHeader() });
  }

  putCart() {
    return axios.get(API_URL + "updateProduct", { headers: authHeader() });
  }

  DeleteCart() {
    return axios.get(API_URL + "deleteProduct", { headers: authHeader() });
  }
  getCartToUser() {
    return axios.get(API_URL + "getCartsByUserId", { headers: authHeader() });
  }
}

export default new UserService();
