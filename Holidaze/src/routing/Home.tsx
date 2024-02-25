import Cardgrid from "../components/Cardgrid";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import ImageSlider from "../components/Slider";
import { Col, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <Row style={{ justifyContent: "center", marginTop: "100px" }}>
        <Col style={{ maxWidth: "900px" }}>
          <ImageSlider />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", marginTop: "80px" }}>
        <hr style={{ width: "80%" }}></hr>
      </Row>
      <h1 style={{ color: "#3a2b42", textAlign: "center" }}>Venues</h1>

      <Cardgrid />
    </div>
  );
};
