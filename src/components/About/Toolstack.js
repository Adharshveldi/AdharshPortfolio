import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiGooglecolab,
  SiJupyter,
  SiAzuredevops,
  SiPycharm,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter /> {/* Jupyter Notebook */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab /> {/* Google Colab */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops /> {/* Azure DevOps */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
    </Row>
  );
}

export default Toolstack;
