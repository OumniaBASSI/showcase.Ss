import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const CreateOffer = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/dashboard');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass state to dashboard for alert notification
    navigate('/dashboard', { state: { showAlert: true, alertMessage: 'Offer created successfully!' } });
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <Container className="py-5 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <Row className="w-100 justify-content-center">
          <Col md={8} lg={7}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-5">
                <h2 className="mb-1 text-center" style={{ color: "#7c3aed", fontWeight: 700 }}>Create New Offer</h2>
                <p className="text-center text-muted mb-4" style={{ fontSize: 16 }}>
                  Share your skills and find what you need
                </p>
                <Form onSubmit={handleSubmit}>
                  {/* Skill You're Offering */}
                  <h5 style={{ color: "#a78bfa", fontWeight: 700 }}>Skill You're Offering</h5>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="offerSkillTitle">
                        <Form.Label style={{ color: "#312e81" }}>Skill Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter skill title" required />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="offerCategory">
                        <Form.Label style={{ color: "#312e81" }}>Category</Form.Label>
                        <Form.Select required>
                          <option value="">Select category</option>
                          <option>Web Development</option>
                          <option>Graphic Design</option>
                          <option>Digital Marketing</option>
                          <option>Photography</option>
                          <option>Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4" controlId="offerDescription">
                    <Form.Label style={{ color: "#312e81" }}>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter offer description" required />
                  </Form.Group>

                  {/* Skill You're Looking For */}
                  <h5 style={{ color: "#a78bfa", fontWeight: 700 }}>Skill You're Looking For</h5>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="wantedSkill">
                        <Form.Label style={{ color: "#312e81" }}>Skill Wanted</Form.Label>
                        <Form.Control type="text" placeholder="Enter skill you want" required />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="wantedCategory">
                        <Form.Label style={{ color: "#312e81" }}>Category</Form.Label>
                        <Form.Select required>
                          <option value="">Select category</option>
                          <option>Web Development</option>
                          <option>Graphic Design</option>
                          <option>Digital Marketing</option>
                          <option>Photography</option>
                          <option>Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Availability & Notes */}
                  <h5 style={{ color: "#a78bfa", fontWeight: 700 }}>Availability & Notes</h5>
                  <Form.Group className="mb-3" controlId="availability">
                    <Form.Label style={{ color: "#312e81" }}>Your Availability</Form.Label>
                    <Form.Select required>
                      <option value="">Select availability</option>
                      <option>Weekdays</option>
                      <option>Evenings</option>
                      <option>Weekends</option>
                      <option>Flexible</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="additionalNotes">
                    <Form.Label style={{ color: "#312e81" }}>Additional Notes</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="Any extra information..." />
                  </Form.Group>

                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-secondary"
                      type="button"
                      style={{ minWidth: 100 }}
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{
                        background: "linear-gradient(90deg, #7c3aed 60%, #a78bfa 100%)",
                        border: "none",
                        minWidth: 120
                      }}
                    >
                      Create
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateOffer;
