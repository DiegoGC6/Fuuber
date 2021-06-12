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
      <Nav.Link><h5 class="card-title">Tim Hortons</h5></Nav.Link>
    </LinkContainer>
    <LinkContainer to='/restaurant2'>
      <Nav.Link><h5 class="card-title">Peter's Drive-in</h5></Nav.Link>
    </LinkContainer>
    <LinkContainer to='/restaurant3'>
      <Nav.Link><h5 class="card-title">Hutch Cafe</h5></Nav.Link>
    </LinkContainer>
    <LinkContainer to='/restaurant4'>
      <Nav.Link><h5 class="card-title">Tokyo Station</h5></Nav.Link>
    </LinkContainer>
    <LinkContainer to='/restaurant5'>
      <Nav.Link><h5 class="card-title">Bennys Breakfast</h5></Nav.Link>
    </LinkContainer>  
    </div>
  </div>
  </div> 
  
  )
}
export default CardOne






