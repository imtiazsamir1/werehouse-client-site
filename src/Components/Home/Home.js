import React from "react";
import ManageInv from "../Inventory/ManageInv/ManageInv";
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
      <ManageInv></ManageInv>
    </div>
  );
};

export default Home;
