import React, { FormEvent, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import useProductDetail, { Product } from "../hooks/useProductDetails";
import { AlertHeading, Button, Form, Image, Row } from "react-bootstrap";

import apiClient from "../services/api-client";
import { number } from "prop-types";
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

  const [error, setError] = useState<{ dateFrom: string; dateTo: string }>({
    dateFrom: "",
    dateTo: "",
  });

  const handleInput = (event: any) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (post.dateFrom > post.dateTo) {
      setError({
        ...error,
        dateTo: "Date from can not be larger than date to",
      });
      return;
    }

    apiClient
      .post("/holidaze/bookings", post, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 201) {
          navigate("/profile");
        } else {
        }
      })
      .catch((error) => console.log(error));
  }
  const { products: product } = useProductDetail("/holidaze/venues/" + id);

  const [url, setUrl] = useState(`"${product?.media}`);

  return (
    <>
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
            <Image
              src={product.media}
              onError={() => {
                setUrl(
                  "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
                );
              }}
              style={{
                maxWidth: "600px",
                maxHeight: "650px",
                objectFit: "cover",
              }}
            ></Image>

            <Form
              onSubmit={handleSubmit}
              style={{ maxWidth: "600px", marginTop: "50px" }}
            >
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold", color: "#3a2b42" }}>
                  Description:{" "}
                </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Text>{product.description}</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold", color: "#3a2b42" }}>
                  Price:{" "}
                </Form.Label>
                <Form.Group>
                  <Form.Text>{product.price}$</Form.Text>
                </Form.Group>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold", color: "#3a2b42" }}>
                  Max guests:
                </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Text> {product.maxGuests}</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold", color: "#3a2b42" }}>
                  Date from
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date from"
                  name="dateFrom"
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: "bold", color: "#3a2b42" }}>
                  Date to
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date to"
                  name="dateTo"
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: "bold", color: "#3a2b42" }}>
                  Amount of guests:
                </Form.Label>
                <Form.Group>
                  <Button
                    variant="outline-none"
                    onClick={(e) => setAmount(amount - 1)}
                    style={{ background: "none", fontSize: "25px" }}
                  >
                    -
                  </Button>
                  <Form.Text
                    style={{
                      fontSize: "20px",
                      marginLeft: "8px",
                      marginRight: "8px",
                      color: "#3a2b42",
                    }}
                  >
                    {amount}
                  </Form.Text>
                  <Button
                    variant="ouline-none"
                    style={{ background: "none", fontSize: "25px" }}
                    onClick={(e) => setAmount(amount + 1)}
                  >
                    +
                  </Button>
                </Form.Group>
              </Form.Group>

              <p style={{ color: "red" }}>{error.dateTo}</p>

              <Button
                variant="primary"
                type="submit"
                style={{ background: "#3a2b42" }}
              >
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
