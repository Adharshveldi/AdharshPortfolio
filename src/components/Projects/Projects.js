import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import restoration from "C:/Users/LENOVO C2IN/port1/Portfolio/src/Assets/Projects/Enhance.jpg";
import chatbot from "C:/Users/LENOVO C2IN/port1/Portfolio/src/Assets/Projects/enhanced_image.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="justify-content-center">
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={restoration}
              isBlog={false}
              title="Image Restoration AI"
              description="Developed an advanced deep learning model to restore highly degraded aged photographs, addressing challenges in real-world image degradation. The project introduced a triplet domain translation network, utilizing variational autoencoders (VAEs) to map clean and aged images into distinct latent spaces. The method was extensively evaluated and outperformed state-of-the-art restoration techniques."
              doiLink="https://doi.org/10.1109/ICSSAS57918.2023.10331858"
             
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Document-Based Chatbot"
              description="Built a document-based chatbot using FastAPI that allows users to upload PDFs, DOCX, and TXT files and interact with their content through natural language queries. Integrated DeepSeek-R1 (1.5B) via Ollama for accurate LLM-based text generation. Developed a FastAPI backend with RESTful endpoints and a simple web interface for seamless interaction."
              ghLink="https://github.com/Adharshveldi/Chatbot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;