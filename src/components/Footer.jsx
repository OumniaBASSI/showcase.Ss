import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer
    className="pt-5 pb-3 mt-5"
    style={{
      background: "linear-gradient(90deg, #f3f0ff 60%, #ede9fe 100%)",
      borderTop: "1px solid #e5e5e5",
    }}
  >
    <Container>
      <Row className="align-items-center text-center text-md-start">
        <Col md={4} className="mb-4 mb-md-0">
          <div className="mb-2" style={{ fontWeight: 700, fontSize: 28 }}>
            <span style={{ color: "#7c3aed" }}>Skill</span>
            <span style={{ color: "#a78bfa" }}>Swap</span>
          </div>
          <div className="text-muted" style={{ fontSize: 15 }}>
            Exchange skills, grow together.
            <br />
            Join a safe, supportive community.
          </div>
        </Col>
        <Col md={4} className="mb-4 mb-md-0">
          <div
            className="fw-bold mb-2"
            style={{ color: "#7c3aed", fontSize: 18 }}
          >
            Quick Links
          </div>
          <ul className="list-unstyled mb-0">
            <li>
              <a
                href="/about-us"
                style={{
                  color: "#7c3aed",
                  textDecoration: "none",
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/terms"
                style={{
                  color: "#7c3aed",
                  textDecoration: "none",
                }}
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                style={{
                  color: "#7c3aed",
                  textDecoration: "none",
                }}
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{
                  color: "#7c3aed",
                  textDecoration: "none",
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <div
            className="fw-bold mb-2"
            style={{ color: "#a78bfa", fontSize: 18 }}
          >
            Stay Connected
          </div>
          <div className="mb-2 text-muted" style={{ fontSize: 15 }}>
            Follow us on social media:
          </div>
          <div>
            <a
              href="#"
              style={{
                color: "#7c3aed",
                marginRight: 12,
                fontSize: 22,
              }}
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="#"
              style={{
                color: "#a78bfa",
                marginRight: 12,
                fontSize: 22,
              }}
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="#"
              style={{ color: "#7c3aed", fontSize: 22 }}
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </Col>
      </Row>
      <hr className="my-4" />
      <div className="text-center small text-muted">
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "#7c3aed", fontWeight: 600 }}>Skill</span>
        <span style={{ color: "#a78bfa", fontWeight: 600 }}>Swap</span>
        . All rights reserved.
      </div>
    </Container>
  </footer>
);

export default Footer;
