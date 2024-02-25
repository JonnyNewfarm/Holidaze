import axios from "axios";
import { EventHandler, FormEvent, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import apiClient from "../services/api-client";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [post, setPosts] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });
  const [error, setError] = useState<{
    email: string;
    password: string;
    name: string;
  }>({
    email: "",
    password: "",
    name: "",
  });
  const handleInput = (event: any) => {
    setPosts({ ...post, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (post.name.includes(".")) {
      setError({
        ...error,
        name: "Name must not contain punctunation sympols",
      });
      return;
    }
    if (!post.email.includes("noroff.no")) {
      setError({ ...error, email: "must be an valid Noroff email" });
      return;
    }
    if (post.password.length < 8) {
      setError({ ...error, password: "Must be at least 8 chars" });
    }

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
            <p style={{ color: "red" }}>{error.name}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleInput}
              type="email"
              placeholder="Enter email"
              name="email"
            />
            <p style={{ color: "red" }}>{error.email}</p>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Avatar (optional)</Form.Label>
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
            <p style={{ color: "red" }}>{error.password}</p>
          </Form.Group>

          <Form.Group style={{ marginTop: "-3px" }}>
            <Link to="/login" style={{ color: "#3a2b42" }}>
              Already have an account? Login here
            </Link>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ background: "#3a2b42", marginTop: "10px" }}
          >
            Submit
          </Button>
        </Form>
      </Row>
    </>
  );
};
