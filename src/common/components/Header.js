import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  const customNavigate = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand
          href="#"
          onClick={(e) => {
            customNavigate(e, "/");
          }}
        >
          Suit Yourself
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <StyledLink
              href="#"
              onClick={(e) => {
                customNavigate(e, "/");
              }}
            >
              Dashboard
            </StyledLink>
          </Nav>
          <Nav className="ms-auto">
            <StyledLink
              href="/login"
              onClick={(e) => {
                customNavigate(e, "/login");
              }}
            >
              Login
            </StyledLink>
            <StyledLink
              href="/register"
              onClick={(e) => {
                customNavigate(e, "/register");
              }}
            >
              Register
            </StyledLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const StyledLink = styled(Nav.Link)`
  margin-left: 20px;
  margin-right: 10px;
`;

export default Header;
