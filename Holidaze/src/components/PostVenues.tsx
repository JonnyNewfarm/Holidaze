import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import apiClient from "../services/api-client";

const PostVenues = () => {
  const [amount, setAmount] = useState(1);
  const [priceAmount, setPriceAmount] = useState(1);
  const [post, setPost] = useState({
    name: "",
    description: "",

    price: amount,
    maxGuests: priceAmount,
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    apiClient
      .post("/holidaze/venues", post)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data);
        } else {
        }
      })
      .catch((error) => console.log(error));
  }

  const handleInput = (event: any) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        style={{ background: "white", padding: "15px", borderRadius: "25px" }}
      >
        <h1 style={{ textAlign: "center" }}>Create venue</h1>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="name"
            name="name"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="string"
            placeholder="Description"
            name="description"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group></Form.Group>

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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold", color: "#3a2b42" }}>
            Price:
          </Form.Label>
          <Form.Group>
            <Button
              variant="outline-none"
              onClick={(e) => setPriceAmount(priceAmount - 1)}
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
              {priceAmount}
            </Form.Text>
            <Button
              variant="ouline-none"
              style={{ background: "none", fontSize: "25px" }}
              onClick={(e) => setPriceAmount(priceAmount + 1)}
            >
              +
            </Button>
          </Form.Group>
        </Form.Group>

        <Button
          type="submit"
          style={{
            background: "#3a2b42",
            marginTop: "8px",
            marginBottom: "10px",
          }}
        >
          Create venue
        </Button>
      </Form>
    </>
  );
};

export default PostVenues;
