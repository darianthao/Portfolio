import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardLink, MDBIcon

} from 'mdb-react-ui-kit';
import './ProjectsGrid.css';
import shadyShackImage from './images/shadyShack.png'
import bestBuyCameraImage from './images/bestBuyCameraStore.png'

function ProjectsGrid() {
    return (
        <div className="projectsSection">
                <h1 className="projectsHeaderTitle">
                    Projects
                </h1>
        <div className="projectsGrid">
            <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                <MDBCol>
                    <MDBCard className="MBDCard h-100">
                        <MDBCardImage
                            src={shadyShackImage}
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>The Shady Shack</MDBCardTitle>
                            <MDBCardText>
                                With a team of developers, created a mock store that would sell the highly demanded products
                                at a not so shady price.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardBody>
                            <MDBIcon fab icon='github' /> &nbsp;
                            <MDBCardLink href='https://github.com/darianthao/YorkTeamProject'>Get Code</MDBCardLink>
                            <MDBCardLink href='#'>Deploy</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="MBDCard h-100">
                        <MDBCardImage
                            src={bestBuyCameraImage}
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Best Buy Camera Store</MDBCardTitle>
                            <MDBCardText>
                                I developed a mock camera store that would interact with Best Buy's API to query data
                                and pull it into my application using Java Spring
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardBody>
                            <MDBIcon fab icon='github' /> &nbsp;
                            <MDBCardLink href='https://github.com/darianthao/capstone'>Get Code</MDBCardLink>
                            <MDBCardLink href='#'>Deploy</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
        </div>
    );
}

export default ProjectsGrid;