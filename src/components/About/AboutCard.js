import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Anjali S</span> from{" "}
            <span className="purple">India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Flyxone Business Pvt. Ltd.</span>.
            <br />
            <br />
            I have hands-on experience in building{" "}
            <span className="purple">web and mobile applications</span> using{" "}
            <span className="purple">
              React JS, React Native, JavaScript, HTML, CSS, Bootstrap, PHP,
              MySQL, Firebase, Python, and MongoDB
            </span>
            .
            <br />
            <br />
            Outside of coding, I enjoy engaging in activities that keep me
            motivated and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Improving my development skills 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I strive to build meaningful applications that solve real-world
            problems and create impact."
          </p>

          <footer className="blockquote-footer">Anjali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
