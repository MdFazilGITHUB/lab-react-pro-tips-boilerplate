import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Form from "./components/Form"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/form" element={<Form/>}/>
    </Routes>
  </>
  )
}

export default App;
