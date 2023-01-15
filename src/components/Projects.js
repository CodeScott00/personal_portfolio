import { Container, Col, Tab, Row, Nav  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/colorSharp2.png";
import projImg1 from "../assets/img/jst.png";
import projImg2 from "../assets/img/reactt.png";
import projImg3 from "../assets/img/nodet.png";

export const Projects = () => {

const projects = [
        {
            title: "JavaScript",
            description: "",
            imgUrl : projImg1,
        },
        {
            title: "React",
            description: "",
            imgUrl : projImg2,
        },
        {
            title: "Node",
            description: "",
            imgUrl : projImg3,
        },
    ]



    return (
        <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                <h2>Key Competencies</h2>
                <p>These are the key technologies that I have been working with and that I would like to continue developing my knowledge and experience in.</p>
                <p>Check out my LinkedIn to see more and drop me a message with any questions.</p>
                {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item> */}
                {/* <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item> */}
                {/* <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item> */}
                {/* </Nav> */}
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                        projects.map((project, index) => {
                            return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                            )
                        })
                    }
                    </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane 
                    eventKey="second">
                    <Row>
                        {
                        projects.map((project, index) => {
                            return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                            )
                        })
                    }
                    </Row>
                    </Tab.Pane> */}
                    {/* <Tab.Pane 
                    eventKey="third">
                    <Row>
                        {
                        projects.map((project, index) => {
                            return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                            )
                        })
                    }
                    </Row>
                    </Tab.Pane> */}
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}