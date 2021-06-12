import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

const HeaderLoggedIn = () => {
  return (
    <header>
      <Navbar style={{backgroundColor: 'darkGreen'}} variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              {' '}
              <i className='fas fa-home'></i>Fuubër
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {/* the icons are from font-awesome in cdnjs.com */}

              <LinkContainer to='/signout'>
                <Nav.Link>
                  <i className='fas fa-sign-out-alt'></i>Sign Out
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default HeaderLoggedIn


