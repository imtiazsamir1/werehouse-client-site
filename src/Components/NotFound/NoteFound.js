import React from "react";
import notfound from "../NotFound/notfound-img/download.png";
import "./Notefound.css";

const NoteFound = () => {
  return (
    <div>
      <img className="notfound-img" src={notfound} alt="" />
    </div>
  );
};

export default NoteFound;
