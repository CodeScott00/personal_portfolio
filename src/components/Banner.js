import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Software Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{"Hi! I'm Scott =>  "} <span className="wrap">{text}</span></h1>
            <p>I am a multi-skilled Software Engineer with a curious approach to learning and an ambition to create.</p>
            <p> I am a passionate and skilled JavaScript/TypeScript/React/Node developer and I am looking for a role where I can contribute to a team of like-minded, innovative people. </p>
            <p>I am an advocate of good communication and making every voice heard within my team to help build a collaborative, productive & inclusive team.</p>
            <a href="https://www.linkedin.com/in/scott-dougal-software-developer/">
              <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
            </a>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header image" />
            </Col>
            </Row>
        </Container>

    </section>
)
}

