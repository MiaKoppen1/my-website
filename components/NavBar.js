import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

  export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect{() => {
    const onScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
  }

          return (
            <Navbar expand="lg" className={"scrolled ? "scrolled": ""}>
              <Container>
                <Navbar.Brand href="#home">
                    <img src ={} alt = "Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#Skills">Skills</Nav.Link>
                    <Nav.Link href="#Projects">Projects</Nav.Link>
                    <Nav.Link href="#Other">Other</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                  </Nav>
                  <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt="" /></a>
                        <a href="#"><img src={navIcon2} alt="" /></a>
                        <a href="#"><img src={navIcon3} alt="" /></a>
                    </div>
                    <button className="vvd" onClick={() => console.log("connect")}>
                      <span>Let's connect</span>
                    </button>
                    </span>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
   
    
