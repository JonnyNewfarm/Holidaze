import React, { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../services/api-client";
import { Button, Form, Row } from "react-bootstrap";

export const Mybookings = () => {
  const { id } = useParams();
  const date = JSON.stringify(new Date());

  const [amount, setAmount] = useState(1);

  const [post, setPost] = useState({
    dateFrom: date,
    dateTo: date,
    guests: amount,
  });

  const handleInput = (event: any) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(post);
    apiClient
      .put(`/holidaze/bookings/${id}`, post, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/profile");
        } else {
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          Update booking
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date from</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date from"
              name="dateFrom"
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date to</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date to"
              name="dateTo"
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Label>Amount of guests</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Button
              variant="light"
              style={{
                background: "none",
                outline: "none",
                fontSize: "38px",
                marginTop: "-8px",
              }}
              onClick={(e) => setAmount(amount - 1)}
            >
              -
            </Button>
            <Form.Text style={{ color: "#3a2b42", fontSize: "25px" }}>
              {amount}
            </Form.Text>
            <Button
              variant="light"
              style={{
                background: "none",
                outline: "none",
                fontSize: "30px",
                marginTop: "-8px",
              }}
              onClick={(e) => setAmount(amount + 1)}
            >
              +
            </Button>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ background: "#3a2b42" }}
          >
            Update
          </Button>
        </Form>
      </Row>
    </>
  );
};
