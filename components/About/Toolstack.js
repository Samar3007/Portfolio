import { Col, Row } from "react-bootstrap";
import {
  SiVscodium ,
  SiPostman,
  SiRender,
  SiJupyter,
  SiOllama,
  SiGithub,
  SiMacos,
  SiTableau
} from "react-icons/si";
import "@styles/style.css";

export default function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVscodium  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiOllama />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
    </Row>
  );
}
