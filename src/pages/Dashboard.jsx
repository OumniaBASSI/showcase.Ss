import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

// Custom color palette (adjust as needed to match your website)
const COLORS = {
  primary: "#7c3aed",
  secondary: "#a78bfa",
  background: "#f5f3ff",
  cardBg: "#fff",
  accent: "#f3e8ff",
  text: "#312e81",
  muted: "#6d28d9",
};

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    skills_offered: 5,
    skills_requested: 3,
    active_exchanges: 2,
    recent_activity: [
      "Rabab lousas requested your skill: Web Development",
      "You requested Amine niman skill: Graphic Design",
      "You and ayoube aouni started an exchange: Mobile App Development",
    ],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('/api/dashboard');
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="d-flex" style={{ background: COLORS.background, minHeight: "100vh" }}>
      <Sidebar />
      <div className="p-4 w-100">
        <div
          style={{
            background: COLORS.accent,
            borderRadius: "18px",
            padding: "32px 32px 24px 32px",
            marginBottom: "32px",
            boxShadow: "0 4px 24px rgba(124, 58, 237, 0.08)",
          }}
        >
          <h2 style={{ color: COLORS.primary, fontWeight: 700, marginBottom: 8 }}>Welcome !</h2>
          <p className="text-muted" style={{ color: COLORS.text, fontSize: 18 }}>
            Here’s what’s happening with your skill exchanges
          </p>
        </div>
        <Row className="mb-4" style={{ gap: "24px 0" }}>
          <Col md={4}>
            <Card
              className="text-center p-3 shadow-sm border-0"
              style={{
                background: COLORS.cardBg,
                borderRadius: "16px",
                boxShadow: "0 2px 12px rgba(124, 58, 237, 0.07)",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: COLORS.primary, fontWeight: 600, fontSize: 22 }}>
                  My Skills
                </Card.Title>
                <Card.Text className="text-muted" style={{ color: COLORS.text }}>
                  Skills you're offering
                </Card.Text>
                <h2>
                  <Badge bg="light" style={{ color: COLORS.primary, fontSize: 32, fontWeight: 700 }}>
                    {dashboardData.skills_offered}
                  </Badge>
                </h2>
                <Button
                  as={Link}
                  to="/create-offer"
                  variant="outline-primary"
                  style={{
                    color: COLORS.primary,
                    borderColor: COLORS.secondary,
                    fontWeight: 600,
                    marginTop: 8,
                  }}
                >
                  + Create Offer
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="text-center p-3 shadow-sm border-0"
              style={{
                background: COLORS.cardBg,
                borderRadius: "16px",
                boxShadow: "0 2px 12px rgba(124, 58, 237, 0.07)",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: COLORS.primary, fontWeight: 600, fontSize: 22 }}>
                  My Requests
                </Card.Title>
                <Card.Text className="text-muted" style={{ color: COLORS.text }}>
                  Skills you’re looking for
                </Card.Text>
                <h2>
                  <Badge bg="light" style={{ color: COLORS.primary, fontSize: 32, fontWeight: 700 }}>
                    {dashboardData.skills_requested}
                  </Badge>
                </h2>
                <Button
                  as={Link}
                  to="/find-partner"
                  variant="outline-primary"
                  style={{
                    color: COLORS.primary,
                    borderColor: COLORS.secondary,
                    fontWeight: 600,
                    marginTop: 8,
                  }}
                >
                  View Available Skills
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="text-center p-3 shadow-sm border-0"
              style={{
                background: COLORS.cardBg,
                borderRadius: "16px",
                boxShadow: "0 2px 12px rgba(124, 58, 237, 0.07)",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: COLORS.primary, fontWeight: 600, fontSize: 22 }}>
                  Active Exchanges
                </Card.Title>
                <Card.Text className="text-muted" style={{ color: COLORS.text }}>
                  Current skill swaps
                </Card.Text>
                <h2>
                  <Badge bg="light" style={{ color: COLORS.primary, fontSize: 32, fontWeight: 700 }}>
                    {dashboardData.active_exchanges}
                  </Badge>
                </h2>
                <Button
                  as={Link}
                  to="/active-exchanges"
                  variant="outline-primary"
                  style={{
                    color: COLORS.primary,
                    borderColor: COLORS.secondary,
                    fontWeight: 600,
                    marginTop: 8,
                  }}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h4 style={{ color: COLORS.primary, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>
          Recent Activity
        </h4>
        <div>
          {dashboardData.recent_activity.map((activity, index) => (
            <Card
              className="mb-2 shadow-sm border-0"
              key={index}
              style={{
                background: COLORS.accent,
                borderRadius: "12px",
                borderLeft: `6px solid ${COLORS.primary}`,
              }}
            >
              <Card.Body>
                <div style={{ display: 'flex', alignItems: 'center', color: COLORS.primary }}>
                  <span
                    style={{
                      marginRight: '14px',
                      fontSize: 22,
                      color: COLORS.primary,
                      fontWeight: 700,
                    }}
                  >
                    •
                  </span>
                  <span style={{ color: COLORS.text, fontWeight: 500, fontSize: 17 }}>
                    {activity}
                  </span>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
