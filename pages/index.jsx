import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavBarHeader from "../layouts/header";
import HomePageTextSection from "../layouts/homePageTextSection";
import HomePageImageSection from "../layouts/homePageImageSection";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <Container fluid className="main-container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row>
        {/* <Col className="navbar-header-row">
          <NavBarHeader></NavBarHeader>
        </Col>

        <Row className="fullCarousel">
          <CarouselLayout></CarouselLayout>
        </Row>*/}
        <Col sm={12} md={6} lg={6} className="p-0">
          <HomePageTextSection></HomePageTextSection>
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
        <Col sm={12} md={6} lg={6} className="p-0">
          <HomePageImageSection></HomePageImageSection>
        </Col>
      </Row>
    </Container>
  );
}
