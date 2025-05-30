import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Container, Form, Button, Card, Row, Col, Alert } from "react-bootstrap";
// import axios from "axios"; // Commented: backend

const SignUp = () => {
  // const { login } = useAuth(); // Commented: backend
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // const formData = {
    //   name,
    //   email,
    //   password,
    //   password_confirmation: confirmPassword,
    // };

    // console.log("Form Data:", formData);

    try {
      // await axios.get("/sanctum/csrf-cookie"); // Commented: backend
      // const response = await axios.post("/api/register", formData); // Commented: backend
      // console.log("Registration Response:", response); // Commented: backend
      // await login(email, password); // Commented: backend
      navigate("/login"); // Redirect to sign in page
    } catch (error) {
      // Commented: backend error handling
      setError("Signup failed");
    }
  };

  return (
    <Container className="py-5 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Row className="w-100 justify-content-center">
        <Col md={7} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <span style={{ fontWeight: 700, fontSize: 32, color: "#7c3aed" }}>Skill</span>
                <span style={{ fontWeight: 700, fontSize: 32, color: "#a78bfa" }}>S</span>
                <span style={{ fontWeight: 700, fontSize: 32, color: "#7c3aed" }}>wap</span>
                <div className="mt-2 text-muted" style={{ fontSize: 16 }}>
                  Join a vibrant community and unlock new skills!
                </div>
              </div>
              <h2 className="mb-4 text-center" style={{ color: "#7c3aed" }}>Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="signupName">
                  <Form.Label style={{ color: "#7c3aed" }}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="signupEmail">
                  <Form.Label style={{ color: "#7c3aed" }}>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="signupPassword">
                  <Form.Label style={{ color: "#7c3aed" }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="signupConfirmPassword">
                  <Form.Label style={{ color: "#7c3aed" }}>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ background: "linear-gradient(90deg, #7c3aed 60%, #a78bfa 100%)", border: "none" }}
                >
                  Create Account
                </Button>
              </Form>
              <div className="mt-4 text-center text-muted" style={{ fontSize: 14 }}>
                Already have an account? <Link to="/login" style={{ color: "#7c3aed", fontWeight: 500 }}>Sign in</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
