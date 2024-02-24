import React, { FormEvent, useState } from "react";
import { venues } from "../hooks/useVenues";

import { Link } from "react-router-dom";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { ProfileBookings } from "../hooks/useProfileBookings";
import apiClient from "../services/api-client";

interface Props {
  booking: ProfileBookings;
}

const ProfileBookingsCard = ({ booking }: Props) => {
  return (
    <Card key={booking.id} style={{ maxWidth: "470px", margin: "10px" }}>
      <Link
        to={`/mybookings/` + booking.id}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <Card.Body>
          <Card.Title>Your Booking</Card.Title>
          <Card.Text>Date from: {booking.dateFrom}</Card.Text>
          <Card.Text>Date to: {booking.dateTo}</Card.Text>
          <Card.Text>Amount of guests: {booking.guests}</Card.Text>
          <Card.Text>Created: {booking.created}</Card.Text>
          <Card.Text>Updated: {booking.updated}</Card.Text>
          <Button>Update Booking</Button>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProfileBookingsCard;
