import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Home/Footer/Footer";
import Inventory from "./Components/Inventory/Inventory";

import ManageItem from "./Components/Inventory/ManageItem/ManageItem";

import AddItem from "./Components/Inventory/AddItem/AddItem";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/manageItem" element={<ManageItem></ManageItem>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={<Inventory></Inventory>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
