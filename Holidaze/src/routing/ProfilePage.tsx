import React, { FormEvent, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import ProfileCardgrid from "../components/ProfileCardGrid";
import { Avatar } from "../components/Avatar";
import apiClient from "../services/api-client";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const name = localStorage.getItem("name");
  const [post, setPosts] = useState({
    avatar: "",
  });

  const handleInput = (event: any) => {
    setPosts({ ...post, [event.target.name]: event.target.value });
  };
  const token = localStorage.getItem("accessToken");
  function onSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(post);
    apiClient
      .put(`/holidaze/profiles/${name}/media`, post, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        } else {
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div>
        <Row style={{}}>
          <Col style={{ marginLeft: "60px" }}>
            <Avatar />
            <Form onSubmit={onSubmit} style={{ marginLeft: "55px" }}>
              <Form.Group>
                <Form.Label>Avatar url</Form.Label>
                <Form.Control
                  style={{
                    maxWidth: "230px",
                    border: "solid",
                    color: "#3a2b42",
                  }}
                  onChange={handleInput}
                  name="avatar"
                  type="string"
                  placeholder="Url"
                />
              </Form.Group>
              <Button
                type="submit"
                style={{ background: "#3a2b42", marginTop: "8px" }}
              >
                Update avatar
              </Button>
            </Form>
          </Col>
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
              viverra pharetra ante et faucibus. Curabitur orci justo, facilisis
              vel dolor sit amet, dignissim lacinia lacus. Ut lorem dolor,
              dignissim eget suscipit in, condimentum suscipit nulla. Donec
              rutrum massa et dolor varius eleifend. Proin vulputate varius
              cursus. Vivamus ac blandit erat, eu vestibulum diam.
            </p>
            <Link to="/manager">
              <Button style={{ background: "#3a2b42" }}>Manage venues</Button>
            </Link>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Row style={{ justifyContent: "center" }}>
            <hr style={{ maxWidth: "80%" }}></hr>
          </Row>
          <h1 style={{ textAlign: "center" }}>Your Bookings</h1>
          <ProfileCardgrid />
        </Row>
      </div>
    </>
  );
};

export default ProfilePage;
