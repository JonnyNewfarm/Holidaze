import { Link } from "react-router-dom";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { ProfileBookings } from "../hooks/useProfileBookings";
import apiClient from "../services/api-client";
import { venues } from "../hooks/useVenues";
import { useState } from "react";
import { ManagerVenues } from "../hooks/useManagerVenues";

interface Props {
  venue: ManagerVenues;
}

const ManagerVenueCard = ({ venue }: Props) => {
  const [img, setImg] = useState(`${venue.media}`);
  return (
    <Card
      key={venue.id}
      style={{ maxWidth: "470px", margin: "10px", borderRadius: "20px" }}
    >
      <Card.Body>
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
        <Card.Title>{venue.name}</Card.Title>
        <Card.Text>Date from: {venue.description}</Card.Text>

        <Button style={{ background: "#3a2b42" }}>Update Venue</Button>
      </Card.Body>
    </Card>
  );
};

export default ManagerVenueCard;
