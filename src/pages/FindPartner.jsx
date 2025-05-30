import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const usersData = [
  { name: "Ahmed Ali", skill: "JavaScript Development", availability: "Weekdays" },
  { name: "Fatima Hassan", skill: "Graphic Design", availability: "Evenings" },
  { name: "Youssef Mahmoud", skill: "Digital Marketing", availability: "Weekdays" },
  { name: "Aisha Khaled", skill: "Digital Marketing", availability: "Evenings" },
  { name: "Omar Ibrahim", skill: "Photography", availability: "Flexible" },
];

const FindPartner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Category');
  const [users, setUsers] = useState(usersData);
  const [showAlert, setShowAlert] = useState(false);

  const handleSearch = () => {
    const filteredUsers = usersData.filter(user => {
      const searchRegex = new RegExp(searchTerm, 'i');
      return searchRegex.test(user.name) || searchRegex.test(user.skill);
    });
    setUsers(filteredUsers);
  };

  const handleReset = () => {
    setSearchTerm('');
    setCategory('Category');
    setUsers(usersData);
  };

  const handleSendProposal = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 w-100">
        <h2 style={{ color: "#7c3aed" }}>Find Partners</h2>
        <p className="text-muted">Discover people with the skills you need</p>
        {showAlert && (
          <Alert variant="success" className="w-75 mx-auto text-center">
            Proposal sent!
          </Alert>
        )}
        <Row className="mb-3">
          <Col>
            <Form.Control
              placeholder="Search by name or skill"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Select value={category} onChange={e => setCategory(e.target.value)}>
              <option>Category</option>
              <option>JavaScript Development</option>
              <option>Graphic Design</option>
              <option>Digital Marketing</option>
              <option>Photography</option>
            </Form.Select>
          </Col>
          <Col md="auto">
            <Button variant="primary" style={{ backgroundColor: "#7c3aed", borderColor: "#7c3aed" }} onClick={handleSearch}>
              Search
            </Button>{' '}
            <Button
              variant="outline-primary"
              style={{ color: "#7c3aed", borderColor: "#a78bfa" }}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Col>
        </Row>
        {users.map((user, i) => (
          <Card className="mb-2 shadow-sm border-0" key={i}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <b>{user.name}</b>
                <br />
                <span style={{ color: "#7c3aed" }}>{user.skill}</span>
                <br />
                <small className="text-muted">Available: {user.availability}</small>
              </div>
              <Button
                variant="primary"
                style={{ backgroundColor: "#7c3aed", borderColor: "#7c3aed" }}
                onClick={handleSendProposal}
              >
                Send Proposal
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FindPartner;
