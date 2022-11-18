import React from "react";
import './AboutMe.css'
import portfolioSelfie from './images/portfolioSelfie.png'
function AboutMe() {
    return (
<div className="AboutMe">
    <div className="header">
        About Me
    </div>
    <div className="body">
        <img className="image portfolioSelfie" src={portfolioSelfie}/>
        <div className="description">
            <p>Growing up, I've always been fascinated
        by technology. From the estatic flashing lights, to the progression of
        common necessities such as an mobile phone, to playing video games with my
        uncle, technology has always been a huge part of my life.</p>
            <p> I've took it
                upon myself to indulge in the technical capabilities that are necessary in
                becoming successful by attaining a degree in Computer Science at the University
                of Minnesota Duluth. Technology is an industry that is growing at an
                exponential rate, and I'm excited to see where my journey takes me
                in the next 10 years. </p>
            <p> In my free time you can find me at the gym, in discord playing video games,
                on the soccer field, or purchasing a venti iced matcha green tea latte with soy milk</p>
        </div>
    </div>
</div>
    );
}

export default AboutMe;