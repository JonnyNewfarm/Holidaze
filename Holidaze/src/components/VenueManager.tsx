import React, { FormEvent, MouseEvent, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../services/api-client";

const VenueManager = () => {
  const name = localStorage.getItem("name");
  const token = localStorage.getItem("accessToken");
  const manager = {
    venueManager: true,
  };
  const navigate = useNavigate();
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(manager);
    apiClient
      .put(`/holidaze/profiles/${name}`, manager, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/manager");
        } else {
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Col
        style={{
          maxWidth: "400px",
          marginRight: "150px",
          marginTop: "40px",
        }}
      >
        <h1>Venue manager</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          viverra pharetra ante et faucibus. Curabitur orci justo, facilisis vel
          dolor sit amet, dignissim lacinia lacus. Ut lorem dolor, dignissim
          eget suscipit in, condimentum suscipit nulla. Donec rutrum massa et
          dolor varius eleifend. Proin vulputate varius cursus. Vivamus ac
          blandit erat, eu vestibulum diam.
        </p>

        <Form>
          <Button onClick={handleClick} style={{ background: "#3a2b42" }}>
            Manage venues
          </Button>
        </Form>
      </Col>
    </>
  );
};

export default VenueManager;
