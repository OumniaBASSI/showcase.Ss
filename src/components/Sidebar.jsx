// components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FaTachometerAlt, FaUserFriends, FaComments, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-light p-3" style={{ width: '250px', height: '100vh', borderRight: '1px solid #ddd' }}>
      <h4 className="mb-4">My Profile</h4>
      <Nav className="flex-column">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `nav-link mb-2 d-flex align-items-center ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
        >
          <FaTachometerAlt className="me-2" /> Dashboard
        </NavLink>
        <NavLink
          to="/find-partner"
          className={({ isActive }) => `nav-link mb-2 d-flex align-items-center ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
        >
          <FaUserFriends className="me-2" /> Find Partner
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) => `nav-link mb-2 d-flex align-items-center ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
        >
          <FaComments className="me-2" /> Messages
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => `nav-link mb-2 d-flex align-items-center ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
        >
          <FaUser className="me-2" /> My Profile
        </NavLink>
      </Nav>
    </div>
  );
};

export default Sidebar;
