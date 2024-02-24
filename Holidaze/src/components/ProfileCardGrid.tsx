import { useState } from "react";
import { Form, Row } from "react-bootstrap";

import "../App.css";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import useProfileBookings from "../hooks/useProfileBookings";
import ProfileBookingsCard from "./ProfileBookingsCard";
import LoadingSpinner from "./LoadingSpinner";
const spinners = [1, 2, 3, 4];

const ProfileCardgrid = () => {
  const userName = localStorage.getItem("name");

  const { bookings, error, isLoading } = useProfileBookings(
    `/holidaze/profiles/${userName}/bookings`
  );

  return (
    <>
      {error && <p>{error}</p>}
      <Row style={{ justifyContent: "center", marginTop: "40px" }}>
        {isLoading && spinners.map((spinner) => <LoadingSpinner />)}
        {bookings.map((booking) => (
          <ProfileBookingsCard key={booking.id} booking={booking} />
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            marginTop: "20px",
          }}
        ></div>
      </Row>
    </>
  );
};

export default ProfileCardgrid;
