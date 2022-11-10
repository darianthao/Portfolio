import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../../NavBar/NavBar";
import ProjectsGrid from "../../ProjectsGrid/ProjectsGrid";

import "./HomePage.css";
import TitleCard from "../../TitleCard/TitleCard";
import MyTechStack from "../../MyTechStack/MyTechStack";


class HomePage extends Component {
    render(){
        return (
            <div className="HomePage">
                <TitleCard/>
                <div className="viewProjectsButton">
                    <MDBBtn outline color='warning' >
                        View Projects
                    </MDBBtn>
                </div>
                <MyTechStack/>
                <ProjectsGrid/>
            </div>
        )
    }
}

export default HomePage