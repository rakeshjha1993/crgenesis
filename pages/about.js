import Head from "next/head";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import MenuInside from "../layouts/MenuInside";
import "../styles/about.scss";
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
            <h1>About us</h1>
            <p>
              {" "}
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
            <p>
              {" "}
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
