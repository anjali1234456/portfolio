import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a Software Developer who enjoys turning ideas into practical,
              user-friendly applications. I focus on building clean, reliable,
              and scalable solutions for real-world use.
              <br />
              <br />
              I have hands-on experience working with{" "}
              <b className="purple">
                JavaScript, React.js, React Native, HTML, CSS, Bootstrap, PHP,
                MySQL, Firebase, Python, and MongoDB
              </b>
              , and I’m comfortable developing both{" "}
              <b className="purple">web</b> and{" "}
              <b className="purple">mobile applications</b>.
              <br />
              <br />
              I’ve worked on live projects like a{" "}
              <b className="purple">
                Salon Booking & Management mobile application
              </b>{" "}
              available on the Google Play Store, and a{" "}
              <b className="purple">real-time video chat application</b>. These
              projects helped me gain practical experience in application
              architecture, API integration, performance optimization, and
              deployment.
              <br />
              <br />
              Whenever possible, I love building projects using{" "}
              <b className="purple">React</b>,{" "}
              <b className="purple">React Native</b>, and{" "}
              <b className="purple">Node.js</b>, focusing on clean UI, smooth
              user experience, and maintainable code.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
