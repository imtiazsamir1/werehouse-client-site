import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Home/Footer/Footer";
import Inventory from "./Components/Inventory/Inventory";
import ManageInv from "./Components/Inventory/ManageInv/ManageInv";
import ManageItem from "./Components/Inventory/ManageItem/ManageItem";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/manageItem" element={<ManageItem></ManageItem>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={<Inventory></Inventory>}
        ></Route>
        <Route path="/manageInv" element={<ManageInv></ManageInv>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
