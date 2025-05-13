import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import examseating from "../../Assets/Projects/examseating.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import diabetes from "../../Assets/Projects/diabetes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chatbot Song Recommender"
              description="The Chatbot Song Recommender is an innovative web application that utilizes a chatbot interface to suggest songs based on user preferences. Built with React and integrated with a machine learning model, it analyzes user input and recommends songs from a curated database. The application aims to enhance the music discovery experience by providing personalized song suggestions in an interactive manner."
              ghLink="https://github.com/srisowmya8/chatbot-song-recommender"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={examseating}
              isBlog={false}
              title="Exam Seating Automation System"
              description="The Exam Seating Automation System is a web application designed to streamline the process of assigning seating arrangements for examinations. Built using the MERN stack, it allows administrators to manage student data, exam schedules, and seating plans efficiently. The system automates the allocation of seats based on predefined criteria, ensuring a fair and organized examination environment."
              ghLink="https://github.com/srisowmya8/Exam-Seating-System"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetes}
              isBlog={false}
              title="Diabetes Prediction"
              description="The Diabetes Prediction System is a machine learning-based web application that predicts the likelihood of diabetes in individuals based on their health parameters. Developed using Flask and integrated with a machine learning model, it analyzes user input data and provides predictions along with insights. The application aims to raise awareness about diabetes risk factors and promote preventive healthcare measures."
              ghLink="https://github.com/srisowmya8/diabetes-prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
