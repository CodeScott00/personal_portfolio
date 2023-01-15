import { Container, Row, Form, Col } from "react-bootstrap";
import contactLogo from '../assets/img/SD_contact.png';
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={10}>
                        <a href="mailto:dougal_00@hotmail.com"><img  src={contactLogo} alt="Email Me Here"></img></a>
                    </Col>
                </Row>

                
            </Container>
        </footer>
    )

}