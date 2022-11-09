import "./MyTechStack.css"
import AzureIcon from './Icons/AzureIcon.png'
import JavaIcon from './Icons/JavaIcon.png'
import ReactIcon from './Icons/ReactIcon.png'

function MyTechStack() {
    return (
        <div className="MyTechStackComponent">
            <h1 className="TechStackTitle">
                Tech Stack
            </h1>
            <p className="TechStackCaption">
                technologies I love working with
            </p>
            <div id="img-wrapper">
                <div><img src={AzureIcon} id="img"/></div>
                <div><img src={JavaIcon} id="img"/></div>
                <div><img src={ReactIcon} id="img"/></div>
                <div><img src={AzureIcon} id="img"/></div>
                <div><img src={JavaIcon} id="img"/></div>
                <div><img src={ReactIcon} id="img"/></div>
            </div>
            <div id="img-wrapper">
                <div><img src={AzureIcon} id="img"/></div>
                <div><img src={JavaIcon} id="img"/></div>
                <div><img src={ReactIcon} id="img"/></div>
                <div><img src={AzureIcon} id="img"/></div>
                <div><img src={JavaIcon} id="img"/></div>
                <div><img src={ReactIcon} id="img"/></div>
            </div>
        </div>
    );
}

export default MyTechStack;