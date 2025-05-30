import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => (
  <Container className="py-5">
    <div className="text-center mb-5">
      <span style={{ fontWeight: 700, fontSize: 40, color: "#7c3aed" }}>Skill</span>
      <span style={{ fontWeight: 700, fontSize: 40, color: "#a78bfa" }}>S</span>
      <span style={{ fontWeight: 700, fontSize: 40, color: "#7c3aed" }}>wap</span>
      <h1 className="mt-3 mb-3" style={{ color: "#7c3aed", fontWeight: 700 }}>
        Unlock Your Potential: Let’s Grow Together
      </h1>
      <p className="lead text-muted mb-4">
        SkillSwap is an innovative platform designed to unite individuals eager to exchange skills and knowledge, all without money.<br /><br />
        Whether you're a designer wanting to learn coding, or a language enthusiast eager to teach Spanish in return for guitar lessons, SkillSwap provides a safe, supportive environment.
      </p>
      <Button
        as={Link}
        to="/signup"
        size="lg"
        style={{
          background: "linear-gradient(90deg, #7c3aed 60%, #a78bfa 100%)",
          border: "none",
          fontWeight: 600,
        }}
      >
        Sign Up Now
      </Button>
    </div>
    <Row className="justify-content-center mt-5">
      <Col md={8}>
        <Card className="shadow-sm border-0">
          <Card.Body className="text-center">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
              alt="About SkillSwap"
              className="img-fluid rounded mb-3"
              style={{ maxHeight: 300, objectFit: "cover", width: "100%" }}
            />
            <Card.Text className="text-muted">
              Our mission is to empower people to learn, teach, and grow together. We believe everyone has something valuable to share. Join us and become part of a global movement!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default AboutUs;
