import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiFastapi, SiNumpy, SiPandas, SiLangchain } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { TbSql } from "react-icons/tb";
import {

  SiNextdotjs,
  SiExpress,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import "@styles/style.css";

export default function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLangchain />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
    </Row>
  );
}
