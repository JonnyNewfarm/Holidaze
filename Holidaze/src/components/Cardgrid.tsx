import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import apiClient from "../services/api-client";
interface venues {
  data: object;
  id: string;
  name: string;
  description: string;

  url: string;
  alt: string;
}
interface FetchVenuesResponse {
  results: venues[];
}

const Cardgrid = () => {
  const [venues, setVenues] = useState<venues[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchVenuesResponse>("holidaze/venues")
      .then((res) => setVenues(res.data.results));
  });

  return (
    <Row className="flex" style={{ justifyContent: "center" }}>
      <Row xs={1} md={2} className="g-5">
        <Col>
          {venues.map((venue) => (
            <Card key={venue.id} style={{ maxWidth: "600px" }}>
              <Card.Img variant="top" src={venue.url} />
              <Card.Body>
                <Card.Title>{venue.name}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a longer card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Row>
  );
};

export default Cardgrid;
