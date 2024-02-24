import React from "react";
import { venues } from "../hooks/useVenues";

import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

interface Props {
  venue: venues;
}

const CardComp = ({ venue }: Props) => {
  return (
    <Card key={venue.id} style={{ maxWidth: "470px", margin: "10px" }}>
      <Link
        to={`/product/` + venue.id}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        {}
        <Card.Img
          src={venue.media}
          style={{
            objectFit: "cover",
            maxHeight: "250px",
            color: "black",
          }}
        />
        <Card.Body>
          <Card.Title>{venue.name}</Card.Title>
          <Button>View more</Button>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CardComp;
