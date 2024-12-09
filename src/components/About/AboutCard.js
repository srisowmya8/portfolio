import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Srineha Mukku </span>
            from <span className="purple"> Rajahmundry,AP.</span>
            <br />
            I am currently pursuing Bachelors of Technology
            in the department of Information Technology in Shri Vishnu Engineering College For
            Women,Bhimavaram,AP,India.
            
            <br />
            I am native from city of flowing godavari,Rajahmundry.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Handicrafts
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You will get what you deserve may be not now but the very next second!"{" "}
          </p>
          <footer className="blockquote-footer">Srineha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
