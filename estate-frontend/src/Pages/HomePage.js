import React from "react";
import { Link } from "react-router-dom";
import HomeServices from "../HomeServices/HomeServices";
import Container1 from "./Container/Container1";
import Container2 from "./Container/Container2";
import DealContainer from "./Container/DealContainer";
import ItemContainer from "./Container/ItemContainer";
import MainContainer from "./Container/MainContainer";
import RegionContainer from "./Container/RegionContainer";
import RequestContainer from "./Container/RequestContainer";
import ServiceContainer from "./Container/ServiceContainer";


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };

    this.userService = new HomeServices();
  }

  componentDidMount() {
    this.userService.getAllUsers().then(response => {
      this.setState({ users: response });
    });
  }

  renderUsers = () => {
    return this.state.users.map((user, key) => {
      return (
        <li key={key}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      );
    });
  };

  render() {
    return (
      <div class="container">
     
        <MainContainer/>
        <DealContainer/>
        <Container1/>
        <Container2/>
        <RequestContainer/>
        <ItemContainer/>
        <ServiceContainer/>
        <RegionContainer/>
        <article class="my-4">
          <img src="/resources/images/banners/mau-cover-fb-bat-dong-san.jpg" class="w-100" style={{height:`250px`}} />
        </article>
      </div>
    );
  }
}

export default HomePage;