import { useState } from "react";
import { Form, Row } from "react-bootstrap";

import useVenues from "../hooks/useVenues";

import CardComp from "./CardComp";

import "../App.css";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import useProfileBookings from "../hooks/useProfileBookings";
import ProfileBookingsCard from "./ProfileBookingsCard";

const ProfileCardgrid = () => {
  const userName = localStorage.getItem("name");
  const { bookings, error } = useProfileBookings(
    `/holidaze/profiles/${userName}/bookings`
  );

  return (
    <>
      <Row style={{ justifyContent: "center" }}>
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
