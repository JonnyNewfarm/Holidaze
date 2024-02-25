import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import PostVenues from "../components/PostVenues";
import ManagerVenueGrid from "../components/managerVenueGrid";

export const Manager = () => {
  return (
    <>
      <Row>
        <Col
          style={{
            maxWidth: "400px",
            marginLeft: "40px",
            marginTop: "60px",
            marginBottom: "20px",
          }}
        >
          <PostVenues />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <hr style={{ maxWidth: "80%" }}></hr>
      </Row>
      <Row>
        <h1 style={{ marginLeft: "40px", marginTop: "30px" }}>Your venues</h1>
        <ManagerVenueGrid />
      </Row>
    </>
  );
};
