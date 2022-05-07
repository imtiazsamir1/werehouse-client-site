import React from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Fruits from "./Fruits/Fruits";
import HouseDesk from "./Housedesk/HouseDesk";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Fruits></Fruits>
      <HouseDesk></HouseDesk>
      <Footer></Footer>
    </div>
  );
};

export default Home;
