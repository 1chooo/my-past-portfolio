import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiCoffeescript 
} from "react-icons/si";
import { 
  ImBlog 
} from "react-icons/im";
import { 
  GiBasketballBasket 
} from "react-icons/gi";
import { 
  CgGym 
} from "react-icons/cg";
import { 
  TbPlaneDeparture 
} from "react-icons/tb";

function HabitsStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCoffeescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbPlaneDeparture />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <ImBlog />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiBasketballBasket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgGym />
      </Col>
    </Row>
  );
}

export default HabitsStack;
