import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => ({ ...state }));
  console.log(auth);
  console.log(auth === null);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully");
    navigate("/login");
  };

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
            {auth && (
              <StyledLink
                href="#"
                onClick={(e) => {
                  customNavigate(e, "/");
                }}
              >
                Dashboard
              </StyledLink>
            )}
          </Nav>
          <Nav className="ms-auto">
            {auth === null && (
              <>
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
              </>
            )}
            {auth && (
              <>
                <Navbar.Collapse className="justify-content-end">
                  <StyledLink
                    className="me-4"
                    href="/logout"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                    }}
                  >
                    Logout
                  </StyledLink>
                </Navbar.Collapse>

                <Navbar.Text className="ms-auto">
                  Signed in as: <a href="#login">{auth.user.username}</a>
                </Navbar.Text>
              </>
            )}
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
