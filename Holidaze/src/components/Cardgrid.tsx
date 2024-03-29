import { useState } from "react";
import { Form, Row } from "react-bootstrap";

import useVenues from "../hooks/useVenues";

import CardComp from "./CardComp";

import "../App.css";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import LoadingSpinner from "./LoadingSpinner";

const Cardgrid = () => {
  const [search, setSearch] = useState("");

  const { venues, error, isloading } = useVenues("/holidaze/venues");
  const spinners = [1, 2, 3, 4];

  const [venuesPerPage, setVenuesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfTotalPages = Math.ceil(venues.length / venuesPerPage);
  const pages = [...Array(numberOfTotalPages + 1).keys()].slice(1);
  const indexOfLastVenue = currentPage + venuesPerPage;
  const indexOfFirstVenue = indexOfLastVenue - venuesPerPage;
  const visibleVenues = venues.slice(indexOfFirstVenue, indexOfLastVenue);
  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPageHandler = () => {
    if (currentPage !== numberOfTotalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {error && <p>{error}</p>}
      <Form id="search-for-venues">
        <Form.Label style={{ marginLeft: "35px", marginTop: "50px" }}>
          Search for venues
        </Form.Label>

        <Form.Control
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          style={{
            maxWidth: "300px",
            marginLeft: "35px",
            color: "#3a2b42",
            borderRadius: "10px",
            border: "solid",
          }}
        />
      </Form>

      <Row style={{ justifyContent: "center" }}>
        {isloading && spinners.map((spinner) => <LoadingSpinner />)}
        {visibleVenues
          .filter((venue) => {
            return search.toLowerCase() === ""
              ? venue
              : venue.name.toLowerCase().includes(search);
          })
          .slice()
          .map((venue) => (
            <CardComp key={venue.id} venue={venue} />
          ))}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            marginBottom: "-80px",
          }}
        >
          <ArrowLeft
            onClick={prevPageHandler}
            size={23}
            style={{ marginTop: "-15px" }}
          ></ArrowLeft>
          <p>
            {pages.map((page) => (
              <span
                style={{
                  cursor: "pointer",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                onClick={() => setCurrentPage(page)}
                key={page}
                className={`${currentPage === page ? "active" : ""}`}
              >
                {page}
              </span>
            ))}
          </p>
          <ArrowRight
            onClick={nextPageHandler}
            size={23}
            style={{ marginTop: "-15px" }}
          ></ArrowRight>
        </div>
      </Row>

      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></Row>
    </>
  );
};

export default Cardgrid;
