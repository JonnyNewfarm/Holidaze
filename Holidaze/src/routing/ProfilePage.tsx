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
                maxWidth: "250px",
              }}
            />
          </Col>
        </Row>
        <Row>
          <ProfileCardgrid />
        </Row>
      </div>
    </>
  );
};

export default ProfilePage;
