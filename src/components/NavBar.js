import { NavBar, Container } from 'react-bootstrap'

export const NavBar = () => {
    return (
        <Navbar /*bg="light"*/ expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={} alt="Logo">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Link</Nav.Link>
            <Nav.Link href="#projects">Link</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            <a href="#"><img src={} alt="" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}