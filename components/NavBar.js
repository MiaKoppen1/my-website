import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../assets/images/logo.png';
import navIcon1 from '../assets/images/navIcon1.png';
import navIcon2 from '../assets/images/navIcon2.png';
import navIcon3 from '../assets/images/navIcon3.png';


    export const NavBar = () => 
    {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => 
    {
    const onScroll = () => 
      {
      if (window.scrollY > 50)
        {
        setScrolled(true);
        } else 
          {
        setScrolled(false);
        }
      }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => 
      {
      setActiveLink(value); 
      }
          return (
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
              <Container>
                <Navbar.Brand href="#home">
                    <img src ={logo} alt = "Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">

                  <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#about-me" className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-me')}>About Me</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                  <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                  <Nav.Link href="#other" className={activeLink === 'other' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('other')}></Nav.Link>
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
   
    
