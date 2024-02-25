import { Row } from "react-bootstrap";

import "../App.css";

import LoadingSpinner from "./LoadingSpinner";
import useVenues from "../hooks/useVenues";
import ManagerVenueCard from "./ManagerVenueCard";
const spinners = [1, 2, 3, 4];

const managerVenueGrid = () => {
  const userName = localStorage.getItem("name");

  const { venues, error, isloading } = useVenues(
    `/holidaze/profiles/${userName}/venues`
  );

  return (
    <>
      {error && <p>{error}</p>}
      <Row style={{ justifyContent: "center", marginTop: "40px" }}>
        {isloading && spinners.map((spinner) => <LoadingSpinner />)}
        {venues.map((venue) => (
          <ManagerVenueCard key={venue.id} venue={venue} />
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
export default managerVenueGrid;
