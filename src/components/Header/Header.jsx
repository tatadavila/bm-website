import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

// @components
import { SubNavbar } from './SubNavbar';

// @assets
import Logo from '../../assets/LogoWhite.png';

// @styles
import './header.scss';
import { useDispatch } from 'react-redux';

// @app
import { setShowSubNavbar } from '../../app';

const Header = () => {
  const dispatch = useDispatch();

  const toggleSubNavbar = () => {
    dispatch(setShowSubNavbar());
  };

  return (
    <Navbar className="header__navbar bg-light" bg="transparent" expand="lg">
      <Container className="header__nav-container" fluid>
        <div className="d-flex flex-column align-items-center w-100">
          <Navbar.Brand href="/" className="header__navbar-brand my-lg-0">
            <img
              src={Logo}
              alt="Logo"
              style={{ maxWidth: '70%', maxHeight: '200px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{
              borderColor: 'white',
            }}
            onClick={toggleSubNavbar}
          />
        </div>
        <SubNavbar />
      </Container>
    </Navbar>
  );
};

export default Header;
