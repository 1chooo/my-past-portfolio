import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import uncleWets from "../../Assets/Projects/uncle_wets.png";
import featherFeast from "../../Assets/Projects/feather_feast.jpg";
import tank from "../../Assets/Projects/tank.png";
import bearBear from "../../Assets/Projects/bear_bear.jpeg";
import evolvingBeasts from "../../Assets/Projects/evolving_beasts.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few selected projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uncleWets}
              isBlog={false}
              title="Uncle Wet's Get Moving!"
              description="Using the JavaFx framework, develop a workout tracking application that allows users to monitor their exercise performance."
              ghLink="https://github.com/1chooo/gym-route"
              // demoLink="https://github.com/1chooo/gym-route"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={featherFeast}
              isBlog={false}
              title="Feather Feast"
              description="A real time ordering system with the Line Bot."
              ghLink="https://github.com/1chooo/feather-feast"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tank}
              isBlog={false}
              title="Hua Tank V.S. Bogy"
              description="A small and entertaining game that pays homage to old-school coding style."
              ghLink="https://github.com/1chooo/Tank"
              demoLink="https://www.youtube.com/watch?v=LDo21oNI0Ws"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bearBear}
              isBlog={false}
              title="Bear Bear You"
              description="Develop a Line BOT utilizing S3 and Amazon Recognition services to enhance familiarity with NCU Campus."
              ghLink="https://github.com/1chooo/bear-bear"
              demoLink="https://www.youtube.com/watch?v=S0HZJIqVThI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evolvingBeasts}
              isBlog={false}
              title="Evolving Beasts"
              description="Developing..."
              ghLink="https://github.com/1chooo/monster-bot"
              demoLink="https://1chooo.github.io/monster-bot/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
