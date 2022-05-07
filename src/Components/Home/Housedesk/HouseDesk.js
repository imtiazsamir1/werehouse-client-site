import React from "react";
import img from "../Banner/img/img.jpg";
import "./HouseDesk.css";

const HouseDesk = () => {
  return (
    <div className="housedesk">
      <div>
        <img className="housedesk-img" src={img} alt="" />
      </div>
      <div>
        <p className="housedesk-p">
          There are five methods of storing vegetables and fruit: drying,
          canning, curing and salting, freezing and common storage. Which method
          is chosen depends upon the type of produce, the quality desired and
          the facilities available for storage.
        </p>
      </div>
    </div>
  );
};

export default HouseDesk;
