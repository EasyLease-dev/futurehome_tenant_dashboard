import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const SidebarLink = styled(NavLink)`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  text-decoration: none;
  color: #333;
  border-radius: 5px;
  text-align: center;

  &.active {
    background-color: #e0e0e0;
  }
`;

const LogoutButton = styled.button`
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const Sidebar = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <SidebarContainer>
      <ProfilePicture src="https://via.placeholder.com/100" alt="Tenant Profile" />
      <SidebarLink to="/">Dashboard</SidebarLink>
      <SidebarLink to="/property-search">Property Search</SidebarLink>
      <SidebarLink to="/maintenance-requests">Maintenance Requests</SidebarLink>
      <SidebarLink to="/invoices">Invoices</SidebarLink>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
