import React, { useState } from "react";
import { venues } from "../hooks/useVenues";

import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

interface Props {
  venue: venues;
}

const CardComp = ({ venue }: Props) => {
  const [img, setImg] = useState(`${venue.media}`);
  return (
    <Card
      key={venue.id}
      style={{ maxWidth: "470px", margin: "10px", borderRadius: "20px" }}
    >
      <Link
        to={`/product/` + venue.id}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        {}
        <Card.Img
          key={venue.name}
          src={img}
          onError={() => {
            setImg(
              "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
            );
          }}
          style={{
            objectFit: "cover",
            maxHeight: "250px",
            color: "black",
          }}
        />
        <Card.Body>
          <Card.Title>{venue.name}</Card.Title>
          <Button style={{ background: "#3a2b42" }}>View more</Button>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CardComp;
