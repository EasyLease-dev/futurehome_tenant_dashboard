import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ProfileDetails from './ProfileDetails';

const SidebarContainer = styled.div`
  width: 260px;
  background-color: #fff;
  height: 94vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const ProfilePicture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
`;

const ProfileName = styled.div`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

const SidebarLink = styled(NavLink)`
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  text-decoration: none;
  color: #555;
  border-radius: 4px;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;

  &.active {
    background-color: #f0f0f0;
    color: #000;
  }

  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }
`;

const LinkIcon = styled.span`
  margin-right: 10px;
`;

const LogoutButton = styled.button`
  width: 100%;
  margin-top: auto;
  padding: 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }
`;

const Sidebar = () => {
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const handleProfileClick = () => {
    setShowProfileDetails(true);
  };

  const handleCloseProfile = () => {
    setShowProfileDetails(false);
  };

  // Sample user data
  const user = {
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    occupation: 'Developer',
    residence: '123 Main St',
    maritalStatus: 'Single',
  };

  return (
    <SidebarContainer>
      <ProfileSection>
        <ProfilePicture 
          src="https://via.placeholder.com/100" 
          alt="Tenant Profile" 
          onClick={handleProfileClick} 
        />
        <ProfileName onClick={handleProfileClick}>John Doe</ProfileName>
      </ProfileSection>
      <SidebarLink exact to="/">
        <LinkIcon>🏠</LinkIcon>
        Dashboard
      </SidebarLink>
      <SidebarLink to="/property-search">
        <LinkIcon>🔍</LinkIcon>
        Property Search
      </SidebarLink>
      <SidebarLink to="/maintenance-requests">
        <LinkIcon>🛠️</LinkIcon>
        Maintenance Requests
      </SidebarLink>
      <SidebarLink to="/invoices">
        <LinkIcon>📄</LinkIcon>
        Invoices
      </SidebarLink>
      <LogoutButton>Logout</LogoutButton>

      {showProfileDetails && (
        <ProfileDetails user={user} onClose={handleCloseProfile} />
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
