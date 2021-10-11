import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
import { Navbar, Nav} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    return (
        <>
            <Navbar className="justify-content-center nav nav-tabs" variant="pills">
                        <Nav className="justify-content-center">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/SongForm'>Add New Song</Nav.Link>
                        </Nav>
            </Navbar>
        </>
        
    );
}

export default Menu;