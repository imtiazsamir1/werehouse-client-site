import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Home/Footer/Footer";
import Inventory from "./Components/Inventory/Inventory";

import ManageItem from "./Components/Inventory/ManageItem/ManageItem";

import AddItem from "./Components/Inventory/AddItem/AddItem";
import Blogs from "./Components/Blogs/Blogs";
import LogIn from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import GoogleLogin from "./Components/Login/GoogleLogin/GoogleLogin";
import NoteFound from "./Components/NotFound/NoteFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/*" element={<NoteFound></NoteFound>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/manageItem" element={<ManageItem></ManageItem>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={<Inventory></Inventory>}
        ></Route>
        <Route
          path="/googleLogin"
          element={<GoogleLogin></GoogleLogin>}
        ></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
