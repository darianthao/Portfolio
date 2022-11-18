import './NavBar.css'
import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarToggler,
    MDBIcon,
    MDBCollapse, MDBBtn
} from 'mdb-react-ui-kit';
import Resume from './resume.pdf';

export default function NavBar() {
    const [showNavExternal, setShowNavExternal] = useState(false);
    return (
        <div className="sticky-top">
            <MDBCollapse show={showNavExternal}>
            <div className="socialsSection">
                <div className='bg-dark p-4'>
                    <h5 className='text-white h4'>Socials</h5>
                    <MDBBtn outline color="light" floating className='m-1' href='https://leetcode.com/dariankthao/' role='button'>
                        <MDBIcon fab icon='fab fa-java' data-mdb-toggle="tooltip" title="LeetCode" />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/darian-thao/' role='button'>
                        <MDBIcon fab icon='linkedin-in' data-mdb-toggle="tooltip" title="LinkedIn" />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://github.com/darianthao' role='button'>
                        <MDBIcon fab icon='github' data-mdb-toggle="tooltip" title="GitHub" />
                    </MDBBtn>
                </div>
            </div>
                <div className="navagationButtonsSection bg-dark">
                    <a href="#Home"><button className="navagationButton"> Home Button</button></a>
                    <a href="#Technologies"><button className="navagationButton"> Technologies </button></a>
                    <a href="#Projects"><button className="navagationButton"> Projects </button></a>
                    <a href="#AboutMe"><button className="navagationButton"> About Me </button></a>
                    <a href={Resume} download="DarianThaoResume"><button className="navagationButton"> Download My Resume</button></a>
                </div>

            </MDBCollapse>
            <MDBNavbar className="position-absolute top-0 end-0">
                <MDBContainer fluid >
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarToggleExternalContent'
                        aria-controls='navbarToggleExternalContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavExternal(!showNavExternal)}
                        className="bg-light"
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}