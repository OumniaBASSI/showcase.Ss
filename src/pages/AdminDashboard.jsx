import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Table, Nav, Dropdown } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const COLORS = {
  primary: "#7c3aed",
  secondary: "#a78bfa",
  background: "#f5f3ff",
  cardBg: "#fff",
  accent: "#f3e8ff",
  text: "#312e81",
  muted: "#6d28d9",
};

const users = [
  { id: 1, name: "user1", email: "user1@gmail.com", role: "user", status: "Active", date: "12-12-2025" },
  { id: 2, name: "user2", email: "user2@gmail.com", role: "user", status: "Active", date: "12-12-2025" },
  { id: 3, name: "user3", email: "user3@gmail.com", role: "user", status: "Active", date: "12-12-2025" },
  { id: 4, name: "user4", email: "user4@gmail.com", role: "user", status: "Suspended", date: "12-12-2025" },
];

const offers = [
  { id: 1, title: "Web Development", user: "user1", date: "12-12-2025" },
  { id: 2, title: "Graphic Design", user: "user2", date: "12-12-2025" },
  { id: 3, title: "Digital Marketing", user: "user3", date: "12-12-2025" },
  { id: 4, title: "Photography", user: "user4", date: "12-12-2025" },
  { id: 5, title: "UI/UX Design", user: "user1", date: "12-12-2025" },
];

const reports = [
  { id: 1, user: "user2", issue: "Spam", date: "12-12-2025" },
  { id: 2, user: "user4", issue: "Inappropriate Content", date: "12-12-2025" },
];

const AdminDashboard = () => {
  const [tab, setTab] = useState("users");

  return (
    <div className="d-flex" style={{ background: COLORS.background, minHeight: "100vh" }}>
      <Sidebar />
      <Container className="py-4">
        <h2 style={{ color: COLORS.primary, fontWeight: 700 }}>Admin Dashboard</h2>
        <div className="mb-2" style={{ color: COLORS.text, fontSize: 18 }}>
          Manage users, offers, and reports on SkillSwap.
        </div>
        <Row className="mb-4">
          <Col md={4}>
            <Card className="text-center shadow-sm border-0" style={{ borderRadius: 16 }}>
              <Card.Body>
                <div style={{ fontSize: 40, color: COLORS.secondary }}>👤</div>
                <Card.Title style={{ color: COLORS.primary, fontWeight: 600 }}>Total Users</Card.Title>
                <Card.Text className="text-muted">All registered users</Card.Text>
                <h2 style={{ color: COLORS.text }}>{users.length}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm border-0" style={{ borderRadius: 16 }}>
              <Card.Body>
                <div style={{ fontSize: 40, color: COLORS.primary }}>📄</div>
                <Card.Title style={{ color: COLORS.primary, fontWeight: 600 }}>Total Offers</Card.Title>
                <Card.Text className="text-muted">All skill exchange offers</Card.Text>
                <h2 style={{ color: COLORS.text }}>{offers.length}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm border-0" style={{ borderRadius: 16 }}>
              <Card.Body>
                <div style={{ fontSize: 40, color: COLORS.secondary }}>📧</div>
                <Card.Title style={{ color: COLORS.primary, fontWeight: 600 }}>Reports</Card.Title>
                <Card.Text className="text-muted">User-submitted reports</Card.Text>
                <h2 style={{ color: COLORS.text }}>{reports.length}</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="mb-3">
          <Nav variant="tabs" defaultActiveKey="users">
            <Nav.Item>
              <Nav.Link
                eventKey="users"
                active={tab === "users"}
                onClick={() => setTab("users")}
                style={{
                  color: tab === "users" ? COLORS.primary : COLORS.text,
                  fontWeight: tab === "users" ? 700 : 500,
                  background: tab === "users" ? COLORS.accent : "transparent",
                  borderRadius: 8,
                }}
              >
                Users
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="offers"
                active={tab === "offers"}
                onClick={() => setTab("offers")}
                style={{
                  color: tab === "offers" ? COLORS.primary : COLORS.text,
                  fontWeight: tab === "offers" ? 700 : 500,
                  background: tab === "offers" ? COLORS.accent : "transparent",
                  borderRadius: 8,
                }}
              >
                Offers
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="reports"
                active={tab === "reports"}
                onClick={() => setTab("reports")}
                style={{
                  color: tab === "reports" ? COLORS.primary : COLORS.text,
                  fontWeight: tab === "reports" ? 700 : 500,
                  background: tab === "reports" ? COLORS.accent : "transparent",
                  borderRadius: 8,
                }}
              >
                Reports
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Card className="shadow-sm border-0" style={{ borderRadius: 16 }}>
          <Card.Body>
            {tab === "users" && (
              <>
                <h4 style={{ color: COLORS.primary, fontWeight: 700 }}>Manage Users</h4>
                <div className="text-muted mb-3">View and manage all registered users.</div>
                <Table hover responsive>
                  <thead>
                    <tr style={{ color: COLORS.primary }}>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Registered Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <span style={{ color: user.status === "Active" ? "green" : "#d90429", fontWeight: 600 }}>
                            {user.status}
                          </span>
                        </td>
                        <td>{user.date}</td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle
                              size="sm"
                              variant="outline-primary"
                              style={{ borderColor: COLORS.secondary, color: COLORS.primary }}
                            >
                              ...
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">View</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
            {tab === "offers" && (
              <>
                <h4 style={{ color: COLORS.primary, fontWeight: 700 }}>Manage Offers</h4>
                <div className="text-muted mb-3">View and manage all skill exchange offers.</div>
                <Table hover responsive>
                  <thead>
                    <tr style={{ color: COLORS.primary }}>
                      <th>ID</th>
                      <th>Title</th>
                      <th>User</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offers.map((offer) => (
                      <tr key={offer.id}>
                        <td>{offer.id}</td>
                        <td>{offer.title}</td>
                        <td>{offer.user}</td>
                        <td>{offer.date}</td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle
                              size="sm"
                              variant="outline-primary"
                              style={{ borderColor: COLORS.secondary, color: COLORS.primary }}
                            >
                              ...
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">View</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
            {tab === "reports" && (
              <>
                <h4 style={{ color: COLORS.primary, fontWeight: 700 }}>Manage Reports</h4>
                <div className="text-muted mb-3">View and manage all user-submitted reports.</div>
                <Table hover responsive>
                  <thead>
                    <tr style={{ color: COLORS.primary }}>
                      <th>ID</th>
                      <th>User</th>
                      <th>Issue</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((report) => (
                      <tr key={report.id}>
                        <td>{report.id}</td>
                        <td>{report.user}</td>
                        <td>{report.issue}</td>
                        <td>{report.date}</td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle
                              size="sm"
                              variant="outline-primary"
                              style={{ borderColor: COLORS.secondary, color: COLORS.primary }}
                            >
                              ...
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">View</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AdminDashboard;
