import { Jumbotron, Button } from "react-bootstrap";
import "../styles/Jumbotron.scss";

import HomePageMenu from "./homePageMenu";

const HomePageTextSection = () => (
  <div>
    <Jumbotron className="homePageJumotron">
      <h1>CR GENESIS</h1>
      <p className="JumotronSubtitleText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
        molestie massa, non venenatis orci. Morbi aliquam quam leo, a volutpat
        ligula ultrices quis.
      </p>
      <>
        <HomePageMenu></HomePageMenu>
      </>
    </Jumbotron>
  </div>
);

export default HomePageTextSection;
