import React, { FormEvent, useState } from "react";

import { useParams } from "react-router-dom";

import useProductDetail from "../hooks/useProductDetails";
import {
  AlertHeading,
  Button,
  Card,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Image,
  Row,
} from "react-bootstrap";

import apiClient from "../services/api-client";
const primaryCol = "#170542";

const ProductDetails = () => {
  const { id } = useParams();
  const date = JSON.stringify(new Date());

  const [amount, setAmount] = useState(1);

  const [post, setPost] = useState({
    dateFrom: date,
    dateTo: date,
    guests: amount,
    venueId: id,
  });

  const handleInput = (event: any) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const token = localStorage.getItem("accessToken");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(post);
    apiClient
      .post("/holidaze/bookings", post, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  const { products: product, error } = useProductDetail(
    "/holidaze/venues/" + id
  );

  return (
    <>
      {error && <AlertHeading>{error}</AlertHeading>}
      {product && (
        <>
          <Row
            style={{
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <h1>{product.name}</h1>
          </Row>
          <Row style={{ justifyContent: "center", marginTop: "50px" }}>
            <Image src={product.media} style={{ maxWidth: "600px" }}></Image>

            <Form
              onSubmit={handleSubmit}
              style={{ maxWidth: "600px", marginTop: "50px" }}
            >
              <Form.Group>
                <Form.Label>Description: </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Text>{product.description}</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Price: </Form.Label>
                <Form.Group>
                  <Form.Text>{product.price}$</Form.Text>
                </Form.Group>
              </Form.Group>
              <Form.Group>
                <Form.Label>Max guests:</Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Text> {product.maxGuests}</Form.Text>
              </Form.Group>

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
                <Form.Label>Amount of guests:</Form.Label>
                <Form.Group>
                  <Button
                    className="btn btn-outline"
                    variant="outline-dark"
                    onClick={(e) => setAmount(amount - 1)}
                  >
                    -
                  </Button>
                  <Form.Text
                    style={{
                      fontSize: "20px",
                      marginLeft: "8px",
                      marginRight: "8px",
                    }}
                  >
                    {amount}
                  </Form.Text>
                  <Button
                    variant="outline-dark"
                    style={{ background: "none", outline: "none" }}
                    onClick={(e) => setAmount(amount + 1)}
                  >
                    +
                  </Button>
                </Form.Group>
              </Form.Group>

              <Button variant="primary" type="submit">
                Book this venue
              </Button>
            </Form>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductDetails;
