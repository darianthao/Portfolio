import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardLink

} from 'mdb-react-ui-kit';
import './ProjectsGrid.css';

function ProjectsGrid() {
    return (
        <div className="projectsSection">
            <div className="projectsHeader">
                <h1 className="TechStackTitle">
                    Projects
                </h1>
                <p className="TechStackCaption">
                    projects I've been working on
                </p>
            </div>
        <div className="projectsGrid">
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <MDBCol>
                    <MDBCard className='h-100'>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This
                                card has even longer content than the first to show that equal height action.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardBody>
                            <MDBCardLink href='#'>Card link</MDBCardLink>
                            <MDBCardLink href='#'>Card link</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className='h-100'>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This
                                card has even longer content than the first to show that equal height action.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardBody>
                            <MDBCardLink href='#'>Card link</MDBCardLink>
                            <MDBCardLink href='#'>Card link</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className='h-100 a'>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This
                                card has even longer content than the first to show that equal height action.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardBody>
                            <MDBCardLink href='#'>Card link</MDBCardLink>
                            <MDBCardLink href='#'>Card link</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
        </div>
    );
}

export default ProjectsGrid;