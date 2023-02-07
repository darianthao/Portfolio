import React from "react";
import './AboutMe.css'
import {Divider} from "@mui/material";

function AboutMe() {
    return (
<div className="aboutMe">
    <Divider variant="middle" className="divider"></Divider>
    <section>
        <h1>About Me</h1>
        <p>I am a 1st generation Hmong American full stack engineer with a diverse tool kit.
        I also love dabbling with technologies outside of my scope to attain a more robust
            retrospective of cutting edge technologies used in all of today's applications.</p>
        <p>I embrace the grind and if you don't find me sitting behind my computer, you can
        find me at the gym, on the soccer field, or eating really good food.</p>
    </section>
    <Divider variant="middle" className="divider"/>

</div>
    );
}

export default AboutMe;