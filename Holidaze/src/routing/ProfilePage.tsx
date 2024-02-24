import React, { useState } from "react";
import { Col, Form, Image, Row } from "react-bootstrap";
import ProfileCardgrid from "../components/ProfileCardGrid";

const ProfilePage = () => {
  const imgUrl = localStorage.getItem("avatar");

  return (
    <>
      <div>
        <Row style={{ justifyContent: "end", display: "flex" }}>
          <Col>
            <Image
              src={`${imgUrl}`}
              alt="profile image"
              style={{
                borderRadius: "50%",
                maxWidth: "200px",
                marginLeft: "50px",
                marginTop: "30px",
              }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <hr></hr>
          <h1 style={{ textAlign: "center" }}>Your Bookings</h1>
          <ProfileCardgrid />
        </Row>
      </div>
    </>
  );
};

export default ProfilePage;
