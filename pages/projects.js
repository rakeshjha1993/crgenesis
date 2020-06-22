import Head from "next/head";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import MenuInside from "../layouts/MenuInside";
import "../styles/projects.scss";
import Project from "../layouts/project";
export default function AboutUs() {
  return (
    <Container fluid className="main-container">
      <Head>
        <title>CR GENESIS | About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row>
        <Col sm={12} md={4} lg={2} className="p-0">
          <MenuInside></MenuInside>
          <div className="textSectionFooter">
            <p>
              <FaInstagram />
              <a target="_blank" href="https://www.instagram.com/crgenesis">
                crgenesis
              </a>
              <FaTwitter />{" "}
              <a target="_blank" href="https://www.instagram.com/crgenesis">
                crgenesis
              </a>
            </p>
          </div>
        </Col>
        <Col sm={12} md={8} lg={10} className="p-0">
          <div className="aboutus-pane">
            <h1>Projects</h1>
            <Project></Project>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
