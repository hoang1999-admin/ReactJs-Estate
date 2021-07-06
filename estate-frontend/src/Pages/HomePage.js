/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Container1 from "./Container/Container1";
import Container2 from "./Container/Container2";
import DealContainer from "./Container/DealContainer";
import Image_backgroundcontainer from "./Container/Image_backgroundcontainer";
import ItemContainer from "./Container/ItemContainer";
import MainContainer from "./Container/MainContainer";
import RegionContainer from "./Container/RegionContainer";
import RequestContainer from "./Container/RequestContainer";
import ServiceContainer from "./Container/ServiceContainer";
import NewController from "./Container/NewController/NewController";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Subcribe from '../Components/Subcribe/Subcribe';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <MainContainer />
          <DealContainer />
          <NewController/>
          <Container1 />
          <Container2 />
          <RequestContainer />
          <ItemContainer />
          <ServiceContainer />
          <RegionContainer />
          <Image_backgroundcontainer />
        </div>
        <Subcribe />
        <Footer />
      </div>
    );
  }
}

export default HomePage;