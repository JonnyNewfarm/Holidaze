import { FormEvent, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import apiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [post, setPosts] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event: any) => {
    setPosts({ ...post, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  const [error, setError] = useState("");
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    apiClient
      .post("/holidaze/auth/login", post)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("avatar", response.data.avatar);
          navigate("/");
          window.location.reload();
        } else {
        }
      })

      .catch((error) => setError(error));
  }

  return (
    <>
      {error && <p>{error}</p>}
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleInput}
              type="email"
              placeholder="Enter email"
              name="email"
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
            style={{ background: "#3a2b42" }}
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
