import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 w-100">
        <h2 style={{ color: "#7c3aed" }}>My profile</h2>
        <Card className="p-4 w-75 mx-auto text-center shadow-sm border-0">
          {/* Profile image centered at the top */}
          <div className="d-flex justify-content-center mb-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              style={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #a78bfa",
                boxShadow: "0 2px 8px rgba(124, 58, 237, 0.10)",
              }}
            />
          </div>
          <h4 style={{ color: "#7c3aed" }}></h4>
          <p className="text-muted"><strong>About Me:</strong><br />
            Web developer specializing in React and TypeScript. Love to learn and share knowledge with others.
          </p>
          <div className="text-start">
            <strong style={{ color: "#7c3aed" }}>Skills I Offer:</strong>
            <ul>
              <li>JavaScript <span className="text-muted">Expert</span></li>
              <li>React <span className="text-muted">Expert</span></li>
              <li>TypeScript <span className="text-muted">Advanced</span></li>
              <li>Node.js</li>
            </ul>
            <strong style={{ color: "#7c3aed" }}>Skills I Want:</strong>
            <ul>
              <li>Spanish Language</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <Button
            variant="primary"
            style={{ background: "linear-gradient(90deg, #7c3aed 60%, #a78bfa 100%)", border: "none" }}
            onClick={() => navigate('/edit-profile')}
          >
            Edit Profile
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
