import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // Only show sign in/up buttons on pages that are NOT login or signup
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm" style={{ borderBottom: "1px solid #ede9fe" }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold" style={{ fontSize: 28 }}>
          <span style={{ color: "#7c3aed" }}>Skill</span>
          <span style={{ color: "#a78bfa" }}>Swap</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" style={{ color: "#7c3aed", fontWeight: 500 }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" style={{ color: "#7c3aed", fontWeight: 500 }}>
              About us
            </Nav.Link>
            {user ? (
              <Button
                variant="outline-secondary"
                size="sm"
                className="ms-2"
                style={{
                  borderColor: "#a78bfa",
                  color: "#7c3aed",
                  fontWeight: 500,
                  background: "white",
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <>
                {!isAuthPage && (
                  <>
                    <Nav.Link as={Link} to="/login" className="d-flex align-items-center">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="me-2"
                        style={{
                          borderColor: "#a78bfa",
                          color: "#7c3aed",
                          fontWeight: 500,
                          background: "white",
                        }}
                      >
                        Sign in
                      </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/signup" className="d-flex align-items-center">
                      <Button
                        size="sm"
                        style={{
                          background: "linear-gradient(90deg, #7c3aed 60%, #a78bfa 100%)",
                          border: "none",
                          fontWeight: 500,
                          color: "#fff",
                        }}
                      >
                        Sign up
                      </Button>
                    </Nav.Link>
                  </>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
