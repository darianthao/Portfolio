import "./TitleCard.css"
import {Button} from "react-bootstrap";

function TitleCard() {
    return (
        <div className="Banner">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            <h1 className="Title">
                Darian Thao
            </h1>
            <p className="Caption">
                Software Engineer | 1st Generation Hmong American
            </p>
            <Button style={{marginTop: "10em"}}>Welcome To My Portfolio</Button>

        </div>
    );
}

export default TitleCard;