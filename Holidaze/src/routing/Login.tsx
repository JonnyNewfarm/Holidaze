import { FormEvent, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import apiClient from "../services/api-client";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [post, setPosts] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleInput = (event: any) => {
    setPosts({ ...post, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError({
      email: "",
      password: "",
    });

    if (!post.email.includes("noroff.no")) {
      setError({ ...error, email: "Must be an valid Noroff email " });
      return;
    }

    if (post.password.length < 8) {
      setError({ ...error, password: "Password must be at least 8 chars" });
      return;
    }

    apiClient
      .post("/holidaze/auth/login", post)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("name", response.data.name);

          navigate("/");
          window.location.reload();
        } else {
        }
      })

      .catch((error) => setError(error));
  }

  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        <h1
          style={{ fontSize: "40px", textAlign: "center", marginTop: "50px" }}
        >
          Log in
        </h1>
        <Form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            marginTop: "50px",
            background: "white",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
          </Form.Group>
          <p style={{ color: "red" }}>{error.password}</p>
          <Form.Group style={{ marginTop: "10px" }}>
            <Link to="/register" style={{ color: "#3a2b42" }}>
              Dont have an account? Register here
            </Link>
          </Form.Group>
          <Button
            style={{ background: "#3a2b42", marginTop: "10px" }}
            variant="primary"
            type="submit"
          >
            Log in
          </Button>
        </Form>
      </Row>
    </>
  );
};
