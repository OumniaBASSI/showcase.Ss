import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => (
  <Container className="py-5">
    <div className="text-center mb-5">
      <span style={{ fontWeight: 700, fontSize: 48, color: "#7c3aed" }}>Skill</span>
      <span style={{ fontWeight: 700, fontSize: 48, color: "#a78bfa" }}>S</span>
      <span style={{ fontWeight: 700, fontSize: 48, color: "#7c3aed" }}>wap</span>
      <h1 className="mt-3 mb-3" style={{ color: "#7c3aed", fontWeight: 700 }}>
        Share Your Skills, Grow Together
      </h1>
      <p className="lead text-muted mb-4">
        Join a vibrant community where learning is mutual and meaningful.<br />
        Teach what you know, learn what you don't – all for free!
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
        className="me-3"
      >
        Start Swapping Skills
      </Button>
      <Button
        size="lg"
        variant="outline-primary"
        style={{ color: "#7c3aed", borderColor: "#a78bfa", fontWeight: 600 }}
        onClick={() => {
          const section = document.getElementById("how-it-works");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}
      >
        How it works
      </Button>
    </div>
    <Row className="g-4 mt-4">
      <Col md={4}>
        <Card className="h-100 shadow-sm border-0">
          <Card.Body className="text-center">
            <div style={{ fontSize: 40, color: "#a78bfa" }}>📝</div>
            <Card.Title className="mt-2" style={{ color: "#7c3aed" }}>Sign Up</Card.Title>
            <Card.Text>Create your free account and complete your profile.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="h-100 shadow-sm border-0">
          <Card.Body className="text-center">
            <div style={{ fontSize: 40, color: "#a78bfa" }}>🤝</div>
            <Card.Title className="mt-2" style={{ color: "#7c3aed" }}>Offer a Skill</Card.Title>
            <Card.Text>List the skills you're willing to exchange.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="h-100 shadow-sm border-0">
          <Card.Body className="text-center">
            <div style={{ fontSize: 40, color: "#a78bfa" }}>🔍</div>
            <Card.Title className="mt-2" style={{ color: "#7c3aed" }}>Find a Match</Card.Title>
            <Card.Text>Connect with others and start learning.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <div className="bg-light rounded-4 mt-5 p-5 text-center shadow-sm">
      <h2 className="mb-3" style={{ color: "#7c3aed", fontWeight: 700 }}>
        Ready to Start Exchanging Skills?
      </h2>
      <p className="mb-4 text-muted">
        Discover a world of possibilities. Unlock your potential with SkillSwap!
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
        Join Now
      </Button>
    </div>
    <section id="how-it-works" className="mt-4">
      {/* ...How it works cards... */}
    </section>

    <div className="mt-5">
      <h2 className="text-center mb-4" style={{ color: "#7c3aed", fontWeight: 700 }}>
        Showcase of Skills
      </h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title style={{ color: "#7c3aed" }}>Offering</Card.Title>
              <Card.Text>
                JavaScript Tutoring by Emma
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title style={{ color: "#7c3aed" }}>Requesting</Card.Title>
              <Card.Text>
                Graphic Design Help by John
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </Container>
);

export default Home;
