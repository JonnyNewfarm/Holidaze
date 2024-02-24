import React, { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../services/api-client";
import { Button, Form } from "react-bootstrap";

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

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(post);
    apiClient
      .put(`/holidaze/bookings/${id}`, post, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", marginTop: "50px" }}
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Amount of guests</Form.Label>
          <Button
            variant="light"
            style={{ background: "none", outline: "none" }}
            onClick={(e) => setAmount(amount - 1)}
          >
            -
          </Button>
          <Form.Text>{amount}</Form.Text>
          <Button
            variant="light"
            style={{ background: "none", outline: "none" }}
            onClick={(e) => setAmount(amount + 1)}
          >
            +
          </Button>
        </Form.Group>

        <Button variant="primary" type="submit">
          Book this venue
        </Button>
      </Form>
    </>
  );
};
