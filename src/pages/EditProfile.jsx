import React, { useState } from 'react';
import { Form, Button, Card, Col, Row, Alert } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const EditProfile = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500); // Hide after 2.5s
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 w-100">
        <h2 style={{ color: "#7c3aed" }}>Edit Profile</h2>
        {showAlert && (
          <Alert variant="success" className="w-75 mx-auto text-center">
            Profile changes saved!
          </Alert>
        )}
        <Card className="p-4 w-75 mx-auto shadow-sm border-0">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                User Name:
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="Enter user name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                About Me:
              </Form.Label>
              <Col sm="9">
                <Form.Control as="textarea" rows={3} placeholder="Write something about yourself" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Skills You Offer:
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="Enter skills you offer" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Skills You Want:
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="Enter skills you want" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Profile Image:
              </Form.Label>
              <Col sm="9">
                <Form.Control type="file" />
              </Col>
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" style={{ background: "linear-gradient(90deg, #7c3aed 60%, #a78bfa 100%)", border: "none" }}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default EditProfile;
