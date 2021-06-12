import React from 'react'
import { LinkContainer, Link } from 'react-router-bootstrap'
//import { Card, Image, Button, Nav } from 'react-bootstrap'
import { Card, Container, Navbar, Nav } from 'react-bootstrap'
//import image from '../images/Restaurant 1.png'
import '../components/containers.css'


function CardOne() {
  return (
    
    <div class="Img">
    <div class={{Card}} style={{width: "18rem"}}>
    <div class="card-body">
    <LinkContainer to='/restaurant1'>
      <Nav.Link><h5 class="card-title">Restaurant 1</h5></Nav.Link>
    </LinkContainer>
    <LinkContainer to='/logged'>
      <Nav.Link><h5 class="card-title">Restaurant 1</h5></Nav.Link>
    </LinkContainer>
    <LinkContainer to='/logged'>
      <Nav.Link><h5 class="card-title">Restaurant 1</h5></Nav.Link>
    </LinkContainer>
    <LinkContainer to='/logged'>
      <Nav.Link><h5 class="card-title">Restaurant 1</h5></Nav.Link>
    </LinkContainer>
    <LinkContainer to='/logged'>
      <Nav.Link><h5 class="card-title">Restaurant 1</h5></Nav.Link>
    </LinkContainer>  
    </div>
  </div>
  </div> 
  
  )
}
export default CardOne






