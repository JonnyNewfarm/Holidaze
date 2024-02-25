import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAvatar from "../hooks/useAvatar";
import "../App.css";

const NavBar = () => {
  const token = localStorage.getItem("accessToken");
  const name = localStorage.getItem("name");
  const { avatar } = useAvatar(`/holidaze/profiles/${name}`);
  const navigate = useNavigate();
  const onClick = () => {
    try {
      window.localStorage.clear();
      navigate("/");

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  if (token === null)
    return (
      <Navbar
        expand="md"
        className="bg-body-tertiary"
        style={{ fontSize: "larger" }}
      >
        <Container>
          <Navbar.Brand
            className="navbrand"
            as={Link}
            to="/"
            style={{ fontSize: "40px", fontWeight: "bolder" }}
          >
            Holidaze
          </Navbar.Brand>
          <Row>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  as={Link}
                  to={"/"}
                  style={{
                    fontSize: "25px",
                    marginRight: "40px",
                    fontWeight: "bold",
                    color: "#3a2b42",
                  }}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/login"
                  style={{
                    fontSize: "25px",
                    marginRight: "40px",
                    fontWeight: "bold",
                    color: "#3a2b42",
                  }}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/register"
                  style={{
                    fontSize: "25px",
                    marginRight: "40px",
                    fontWeight: "bold",
                    color: "#3a2b42",
                  }}
                >
                  Register
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    );

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ fontSize: "larger" }}
    >
      <Container>
        <Navbar.Brand
          className="navbrand"
          as={Link}
          to="/"
          style={{ fontSize: "40px", fontWeight: "bolder" }}
        >
          Holidaze
        </Navbar.Brand>
        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ marginTop: "15px" }}>
              <Nav.Link
                as={Link}
                to={"/"}
                style={{
                  fontSize: "25px",
                  marginRight: "40px",
                  fontWeight: "bold",
                  color: "#3a2b42",
                }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                style={{
                  fontSize: "25px",
                  marginRight: "40px",
                  fontWeight: "bold",
                  color: "#3a2b42",
                }}
                onClick={onClick}
                as={Link}
                to="/"
              >
                Logout
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                <Image
                  src={`${avatar?.avatar}`}
                  alt="profile image"
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                />
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                <ul style={{ listStyleType: "none", marginLeft: "-20px" }}>
                  <li style={{ fontWeight: "bold", color: "#3a2b42" }}>
                    User:
                  </li>
                  <li style={{ color: "#3a2b42", marginTop: "-8px" }}>
                    {name}
                  </li>
                </ul>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
