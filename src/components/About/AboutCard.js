import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vivek Adharsh Veldi, </span> a Master's student in <span className="purple">Advanced Data Analytics</span>  at  <span className="purple">The University of North Texas, </span> passionate about leveraging data to derive meaningful insights 
and drive innovation.

With expertise in <span className="purple">SQL, Python, Tableau, Power BI, Machine Learning, </span> 
I focus on turning raw data into impactful solutions.

I bring hands-on experience in <span className="purple">Natural Language Processing (NLP), Large Language Models (LLMs), Sentiment Analysis, </span>
and <span className="purple">Data Visualization. </span> My work involves analyzing complex datasets, optimizing data pipelines, 
and exploring <span className="purple">Generative AI Applications</span> to create intelligent and scalable solutions.    
<p style={{ textAlign: "left" }}>
  Apart from fine-tuning AI models, you'll probably find me:
</p>
<ul>
  <li className="about-activity"> 📸 Photography</li>
  <li className="about-activity"> 🎬 Video Editing</li>
  <li className="about-activity"> 👨‍🍳 Cooking</li>
  <li className="about-activity"> 🌍 Exploring new places and cultures</li>
</ul>

<p style={{ color: "rgb(155 126 172)" }}>
</p>

</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
