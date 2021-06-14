import React from "react";
import { LinkContainer, Link } from "react-router-bootstrap";
import { Row, Container, Button, NavBar, Nav } from "react-bootstrap";
//import kinhhypicture from "../images/KinhHyChau.jpg";
//import diegopicture from "../images/diegotwo.jpeg";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
//import markpicture from "../images/Mark_Peterson.jpeg";
//import marcpicture from "../images/Marc_Ranger.jpg";
import '../components/containers.css'
import SimpleMap6 from '../components/Map6'

function Restaurant5() {
  return (
    <>
      <HeaderLoggedIn />
      <Container style={{paddingTop: "20px"}}>
        {/* <main role="main"> */}

        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Bennys Breakfast</h1>
            <p class="lead text-muted">
              Not a better place to get your breakfast than Bennys
            </p>
            <p>
            <LinkContainer to='/logged'>
      <Nav.Link class="btn btn-primary my-2"><h5 class="card-title">Scan code</h5></Nav.Link>
    </LinkContainer>
    <LinkContainer to='/claim-reward'>
      <Nav.Link class="btn btn-secondary my-2"><h5 class="card-title">Claim Reward</h5></Nav.Link>
    </LinkContainer>
              {/* <a href="#" class="btn btn-primary my-2">
                Scan Code
              </a>
              <a href="#" class="btn btn-secondary my-2">
                Claim Reward
              </a> */}
            </p>
          </div>
        </section>
      <div style= {{background: "#f7f7f9"}}>
        <div class="album py-5">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              {/* <div class="col-md-4">
                <div>
                  
                  <div class="card-body">
                    <h3>Description of Restaurant</h3>
                    <p class="card-text">
                    DIRECTOR OF TALENT DEVELOPMENT

                    </p>
                    <div class="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div> */}
              <div class="col-md-4">
                <div>
                  
                  {/* <div class="card-body">
                    <h3>Description of Restaurant</h3>
                    <p class="card-text">CO-FOUNDER AND PRESIDENT</p>
                    <div class="d-flex justify-content-between align-items-center"></div>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              {/* <div class="col-md-4">
                <div>
                  
                  <div class="card-body">
                    <h3>Display Marker Here</h3>
                    <p class="card-text">
                    CO-FOUNDER AND CEO
                    </p>
                  </div>
                </div>
              </div> */}
              <div class="col-md-4">
                <div>
                  
                  {/* <div class="card-body">
                    <h3>Display Marker Here</h3>
                    <p class="card-text">DIRECTOR OF OFFICE SUPPLIES REPLENISHMENT
                    </p>
                  </div> */}
                </div>
              </div>
              <SimpleMap6 />
              </div>
          </div>
        </div>

        <footer class="text-muted">
          <div class="container">
            <p class="float-right">
              <a href="#">Back to top</a>
            </p>
            <p>
              <a href="../../">Visit the homepage</a>
            </p>
            {/* <p>
              Technologies used to build this site{" "}
              <a href="../../technologies">Learn More</a>.
            </p> */}

            <p class="float-right">
              <LinkContainer to="/technologies">
                <Nav.Link>Technologies used to build</Nav.Link>
              </LinkContainer>
            </p>
          </div>
        </footer>
        </div>

      </Container>
    </>
  );
}
export default Restaurant5;