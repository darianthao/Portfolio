import './NavBar.css'
import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';

export default function NavBar() {
    const [showNavExternal, setShowNavExternal] = useState(false);
    return (
        <div className="sticky-top">
            <MDBCollapse show={showNavExternal}>
                <div className='bg-dark p-4'>
                    <h5 className='text-white h4'>Collapsed content</h5>
                    <span className='text-muted'>Toggleable via the navbar brand.</span>
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