import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hugo ChunHo Lin </span>
            from <span className="purple"> Taipei, Taiwan.</span>
            <br /> I am a final year student who possesses a true passion for
            the CS field 💻 at National Central University.
            <br />
            <br />
            Additionally, I am currently preparing my admission for a
            Master's Degree while also working as a
            <span className="purple"> 23" Summer SWE Intern at PEGATROON </span>
            and <span className="purple">AWS Educate Cloud Ambassador </span>.
            <br />
            <br />
            As part of my preparations, I am focusing on enhancing my
            programming skills in languages such as
            <span className="purple"> <code>GO</code>, Flutter, and JavaScript. </span>
            Additionally, I am actively studying
            <span className="purple"> Data structures and Algorithms </span>
            to further strengthen my technical expertise.
            {/* <br /> */}
            {/* <br /> */}
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Coffee Hopping
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
