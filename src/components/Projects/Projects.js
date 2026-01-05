import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaMobileAlt, FaVideo } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few real-world projects I’m currently working on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* PROJECT 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaMobileAlt size={60} color="#c770f0" />}
              isBlog={false}
              title="I Love My Beauty"
              description="A Salon Booking & Management mobile application that allows users to book appointments, manage services, and track bookings in real time. The app includes customer and admin features and is live on the Google Play Store."
              ghLink="https://github.com/anjali1234456"
              demoLink="https://play.google.com/store/apps/details?id=com.beautysalon.app"
            />
          </Col>
          {/* PROJECT 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaVideo size={60} color="#c770f0" />}
              isBlog={false}
              title="Real-Time Video & Chat Application"
              description="A real-time video and chat application that connects users randomly using WebRTC, focusing on performance, real-time communication, and seamless user experience."
              ghLink="https://github.com/anjali1234456"
              demoLink="https://beautysaloncare.com/omegle/
"

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
