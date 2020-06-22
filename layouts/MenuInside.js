import { Jumbotron, Button } from "react-bootstrap";
import "../styles/Jumbotron.scss";

import HomePageMenu from "./homePageMenu";

const MenuInside = () => (
  <div>
    <Jumbotron className="InsidePageJumotron">
      <img className="logo" src="/images/logo.png"></img>

      <>
        <HomePageMenu type={"inside"}></HomePageMenu>
      </>
    </Jumbotron>
    <p></p>
  </div>
);

export default MenuInside;
