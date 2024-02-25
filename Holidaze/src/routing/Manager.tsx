import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import PostVenues from "../components/PostVenues";
import ManagerVenueCard from "../components/ManagerVenueCard";

export const Manager = () => {
  return (
    <>
      <Row>
        <Col style={{ maxWidth: "400px" }}>
          <h1>Create venue</h1>
          <PostVenues />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <hr style={{ maxWidth: "80%" }}></hr>
      </Row>
      <Row>
        <h1>Your venues</h1>
      </Row>
    </>
  );
};
