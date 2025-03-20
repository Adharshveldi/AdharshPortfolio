import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "C:/Users/LENOVO C2IN/AdharshPortfolio/src/Assets/Projects/avatar_4k.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "justify" }}>
              <span className="purple"> Explore the World of AI & Data with me </span>
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              Hello! I’m <b className="purple">Vivek Adharsh Veldi</b>, a <b className="purple">Data Science Intern & Research Assistant</b> with a passion for <b className="purple">AI, Machine Learning, and Data Analytics</b>. 
              Basically, I love making machines smarter and data more meaningful!
              <br />
              <br />
              By day, I develop <b className="purple">LLM-based AI solutions</b>—tweaking models, optimizing document searches, and benchmarking 
              <b className="purple"> OpenAI vs DeepSeek R1</b> (yes, I do the model showdown!). 
              By night, I might be fine-tuning <b className="purple">chatbots</b> that reply faster than your best friend or visualizing data like it’s a modern art piece 🎨.
              <br />
              <br />
              <b className="purple">What do I bring to the table?</b>  
              <ul>
                <li><b className="purple">AI Engineering:</b> Built NLP-powered chatbots and RAG models (because searching PDFs manually is so last decade).</li>
                <li><b className="purple">Data Analytics:</b> Transformed raw data into actionable insights using <b>Power BI, SQL, and PySpark</b>.</li>
                <li><b className="purple">Cloud & ML Ops:</b> Worked with <b>Azure AI, OpenAI APIs, and FAISS</b> to scale AI solutions efficiently.</li>
              </ul>
              <br />
              If you're looking for someone who enjoys <b className="purple">solving complex problems with a mix of logic and caffeine</b>, let’s connect! ☕🚀  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Adharshveldi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vivek-adharsh-veldi-b98b8a232/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/adharsh.veldi?igsh=MTRocHpiMWprZmoxaQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;