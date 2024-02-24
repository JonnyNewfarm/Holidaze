import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const imgUrl = localStorage.getItem("avatar");
  const token = localStorage.getItem("accessToken");
  const onClick = () => {
    try {
      window.localStorage.clear();

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  if (token === null)
    return (
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ fontSize: "larger" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontSize: "40px" }}>
            Holidaze
          </Navbar.Brand>
          <Row>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  as={Link}
                  to={"/"}
                  style={{ fontSize: "25px", marginRight: "40px" }}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/login"
                  style={{ fontSize: "25px", marginRight: "40px" }}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/register"
                  style={{ fontSize: "25px", marginRight: "40px" }}
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
        <Navbar.Brand as={Link} to="/" style={{ fontSize: "40px" }}>
          Holidaze
        </Navbar.Brand>
        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to={"/"}
                style={{ fontSize: "25px", marginRight: "40px" }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                style={{ fontSize: "25px", marginRight: "40px" }}
                onClick={onClick}
                as={Link}
                to="/"
              >
                Logout
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                <Image
                  src={`${imgUrl}`}
                  alt="profile image"
                  style={{
                    borderRadius: "50%",
                    maxWidth: "50px",
                  }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
