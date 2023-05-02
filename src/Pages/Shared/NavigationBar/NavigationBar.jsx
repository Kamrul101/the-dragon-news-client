import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error => console.log(error))
      navigate('/login');
    }
    return (
        <Container>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/category/0">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/career">Career</Nav.Link>

            </Nav>
            <Nav>
              {user && <FaUserCircle className='fs-1'/>}
              
                {
                  user ? 
                  
                  <Button onClick={handleLogOut} variant="dark">Logout</Button>:
                  <Link to='/login'>
                  <Button variant="dark">Login</Button>
                  </Link>
                  
                }
              
            </Nav>
          </Navbar.Collapse>
          

      </Navbar>
        </Container>
    );
};

export default NavigationBar;