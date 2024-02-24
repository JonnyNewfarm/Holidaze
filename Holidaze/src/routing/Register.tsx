import axios from "axios";
import { EventHandler, FormEvent, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import apiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [post, setPosts] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });
  const handleInput = (event: any) => {
    setPosts({ ...post, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    apiClient
      .post("/holidaze/auth/register", post)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
        } else {
        }
      })

      .catch((err) => console.log(err));
  }

  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        <h1
          style={{
            color: "#3a2b42",
            textAlign: "center",
            fontSize: "40px",
            marginTop: "40px",
          }}
        >
          Register
        </h1>
        <Form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            marginTop: "50px",
            background: "white",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleInput}
              type="name"
              placeholder="name"
              name="name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleInput}
              type="email"
              placeholder="Enter email"
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="string"
              placeholder="Url"
              name="avatar"
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ background: "#3a2b42" }}
          >
            Submit
          </Button>
        </Form>
      </Row>
    </>
  );
};
