import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";




const App = () => {
  return (
<div>
  <Nav/>
<Footer></Footer>
</div>
  
  )
};

export default App;

