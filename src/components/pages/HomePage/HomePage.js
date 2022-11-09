import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../../NavBar/NavBar";
import ImageCarousel from "../../ImageCarousel/ImageCarousel";

import "./HomePage.css";


class HomePage extends Component {
    render(){
        return (
            <>
                <NavBar/>
                <ImageCarousel/>
                <div className="HomePage">
                Hello
                </div>
            </>
        )
    }
}

export default HomePage