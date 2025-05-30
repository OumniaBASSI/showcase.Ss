import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const MOCK_EXCHANGES = [
  {
    id: 1,
    partner: "Ayoube Aouni",
    skill: "Mobile App Development",
    status: "In Progress",
    started: "2024-05-10",
    lastActivity: "2024-05-28",
  },
  {
    id: 2,
    partner: "Rabab Lousas",
    skill: "Web Development",
    status: "Pending",
    started: "2024-05-20",
    lastActivity: "2024-05-29",
  },
];

const COLORS = {
  primary: "#7c3aed",
  secondary: "#a78bfa",
  background: "#f5f3ff",
  cardBg: "#fff",
  accent: "#f3e8ff",
  text: "#312e81",
  muted: "#6d28d9",
};

const ActiveExchanges = () => (
  <div className="d-flex" style={{ background: COLORS.background, minHeight: "100vh" }}>
    <Sidebar />
    <div className="p-4 w-100">
      <h2 style={{ color: COLORS.primary, fontWeight: 700 }}>Active Exchanges</h2>
      <p className="text-muted mb-4">Here are your current skill swap exchanges:</p>
      <Row>
        {MOCK_EXCHANGES.map((exchange) => (
          <Col md={6} key={exchange.id}>
            <Card className="mb-3 shadow-sm border-0" style={{ background: COLORS.cardBg, borderRadius: 16 }}>
              <Card.Body>
                <h5 style={{ color: COLORS.primary, fontWeight: 600 }}>
                  {exchange.skill}
                </h5>
                <div>
                  <span style={{ color: COLORS.text }}>
                    <b>Partner:</b> {exchange.partner}
                  </span>
                </div>
                <div>
                  <span style={{ color: COLORS.text }}>
                    <b>Status:</b>{" "}
                    <Badge bg={exchange.status === "In Progress" ? "success" : "warning"} style={{ color: "#fff" }}>
                      {exchange.status}
                    </Badge>
                  </span>
                </div>
                <div>
                  <span style={{ color: COLORS.text }}>
                    <b>Started:</b> {exchange.started}
                  </span>
                </div>
                <div>
                  <span style={{ color: COLORS.text }}>
                    <b>Last Activity:</b> {exchange.lastActivity}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default ActiveExchanges;
