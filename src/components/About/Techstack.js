import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiDatabase, DiJavascript } from "react-icons/di";
import { FaAws, FaDocker, FaGithub, FaJava, FaReact } from "react-icons/fa";
import { SiPytorch, SiTensorflow, SiMicrosoftazure, SiTableau, SiPowerbi, SiPostgresql, SiFastapi } from "react-icons/si";
import { TbHexagonLetterF } from "react-icons/tb"; // FAISS alternative

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbHexagonLetterF /> {/* FAISS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi /> {/* Alternative for LangChain */}
      </Col>
    </Row>
  );
}

export default Techstack;
