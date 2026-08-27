import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "@assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "@styles/style.css"
import Image from "next/image";
import Link from "next/link";

export default function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  {"I'm"} a{" "}
  <i>
    <b className="purple">Data Analyst & Aspiring AI Engineer</b>
  </i>{" "}
  with my experience in LLM evaluation, SFT and RLHF, multimodal reasoning, tool-calling workflows, and structured annotation, alongside building scalable backend systems and modern web applications.

  <br /><br />

  I work with{" "}
  <i>
    <b className="purple">LLMS, APIs, backend systems, and data-driven applications</b>
  </i>{" "}
  and enjoy solving real-world engineering problems.
  <br /><br />

  I have hands-on experience with{" "}
  <i>
    <b className="purple">Python, SQL, REST APIs, JavaScript, FastAPI, React.js, and Node.js</b>
  </i>
  <br /><br />

  I actively practice Data Structures and Algorithms — with over{" "}
  <i>
    <b className="purple">800+</b>
  </i>{" "}
  problems solved on LeetCode, which helps me improve logic and optimization skills.
  <br /><br />

  <i>
    <b className="purple">Tech & Tools:</b>&nbsp;
  </i>
  Python, JavaScript, FastAPI, React.js, Node.js, Express.js, MongoDB, SQL, NumPy, Pandas, Git.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="avatar-wrapper">
  <Image
    src={myImg}
    alt="avatar"
    className="avatar-img"
    width={200}
    height={200}
  />
</div>
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
                <Link
                  href="https://github.com/Samar3007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://www.linkedin.com/in/samarjeet-baliyan-37b0a0201/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://www.instagram.com/samar_baliyan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}