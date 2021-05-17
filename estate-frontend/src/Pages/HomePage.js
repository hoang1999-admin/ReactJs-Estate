import React from "react";
import { Link } from "react-router-dom";
import HomeServices from "../HomeServices/HomeServices";
import Container1 from "./Container/Container1";
import Container2 from "./Container/Container2";
import DealContainer from "./Container/DealContainer";
import Image_backgroundContainer from "./Container/Image_backgroundContainer";
import ItemContainer from "./Container/ItemContainer";
import MainContainer from "./Container/MainContainer";
import RegionContainer from "./Container/RegionContainer";
import RequestContainer from "./Container/RequestContainer";
import ServiceContainer from "./Container/ServiceContainer";


class HomePage extends React.Component {
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
       <Image_backgroundContainer/>
      </div>
    );
  }
}

export default HomePage;