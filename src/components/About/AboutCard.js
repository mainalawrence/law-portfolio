import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi <span className="purple"> I am Lawrence </span> a Full stack and Software developer
            from <span className="purple"> Karatina, Kenya.</span>
            <br /> I have more than four years of developing reliable, secure, high-performance, and Scalable applications,
            both Front-end and back-end applications using technologies like Node, React, and Angular Frameworks.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring Other People
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Give and you shall receive"{" "}
          </p>
          <footer className="blockquote-footer">lawrence</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
