import './App.css';
import {BrowserRouter, BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleCard from "./components/TitleCard/TitleCard";
import {MDBBtn} from "mdb-react-ui-kit";
import MyTechStack from "./components/MyTechStack/MyTechStack";
import ProjectsGrid from "./components/ProjectsGrid/ProjectsGrid";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import React from "react";


function App() {
  return (
      <div className="App">

        <NavBar/>
        <TitleCard/>

        <MyTechStack/>
        <ProjectsGrid/>
        <Footer/>

      </div>
  );
}

export default App;
