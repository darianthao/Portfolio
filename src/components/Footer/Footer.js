import "./Footer.css"
import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div className="footerSection">
        <MDBFooter className='text-center mt-lg-5'>
            <MDBContainer className='p-4 pb-0'>
                <p className="text-bg-dark"> Socials </p>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='https://leetcode.com/dariankthao/' role='button'>
                        <MDBIcon fab icon='fab fa-java' data-mdb-toggle="tooltip" title="LeetCode" />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/darian-thao/' role='button'>
                        <MDBIcon fab icon='linkedin-in' data-mdb-toggle="tooltip" title="LinkedIn" />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://github.com/darianthao' role='button'>
                        <MDBIcon fab icon='github' data-mdb-toggle="tooltip" title="GitHub" />
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: "#0d1d31",
            color: "white"}}>
                <div>© 2022 Copyright: Darian Thao</div>
            </div>
        </MDBFooter>
        </div>
    );
}

export default Footer;