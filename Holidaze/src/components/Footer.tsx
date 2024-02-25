import { Col, Row } from "react-bootstrap";
import "../App.css";

const Footer = () => {
  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        <Col
          id="footer"
          style={{
            background: "#3a2b42",
            maxWidth: "900px",
            marginTop: "200px",
            marginBottom: "15px",
            borderRadius: "20px",
            minHeight: "150px",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              color: "white",
              marginTop: "6px",
              cursor: "pointer",
            }}
          >
            <li style={{ paddingBottom: "5px" }}>Facebook</li>
            <li style={{ paddingBottom: "5px" }}>Instagram</li>
            <li>Twitter</li>
          </ul>

          <ul
            style={{
              listStyle: "none",
              color: "white",
              marginTop: "6px",
              cursor: "pointer",
            }}
          >
            <li style={{ paddingBottom: "5px" }}>About</li>
            <li style={{ paddingBottom: "5px" }}>Contact</li>
            <li>Complaints</li>
          </ul>
          <ul
            style={{
              listStyle: "none",
              color: "white",
              marginTop: "6px",
              marginRight: "30px",
              cursor: "pointer",
            }}
          >
            <li style={{ paddingBottom: "5px" }}>Address:</li>
            <li style={{ paddingBottom: "5px" }}>Osloveien,</li>
            <li>21</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
