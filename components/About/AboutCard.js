"use client";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "@styles/style.css";

export default function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p>
            Hi everyone, I’m <span className="purple">Samarjeet Baliyan</span> from{" "}
            <span className="purple">Uttar Pradesh, India.</span>
            <br />
            I currently work as a Delivery Data Analyst at Turing, contributing to the training and evaluation of diverse AI agents through high-quality data and human-feedback workflows.
            <br />
            I graduated in 2024 with a B.E. in Computer Engineering from Thapar University, Patiala.
            <br />
            <br />
            When I’m away from work, you’ll usually find me:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight style={{ color: "#67e8f9" }}/> Doom-scrolling LinkedIn and Substack for insights into the
              latest tech trends and innovations
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "#67e8f9" }}/> Listening to quick summaries of interesting books on
              StoryShots
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "#67e8f9" }}/> Exploring fitness and nutrition content
            </li>
          </ul>

          <p className="text-center" style={{ color: "rgb(165 243 252)" }}>
            Let’s build something awesome!
          </p>
          <footer className="blockquote-footer text-center">Samarjeet Baliyan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
