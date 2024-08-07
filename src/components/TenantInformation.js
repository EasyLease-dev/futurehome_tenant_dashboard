import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  height:300px;
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 15px; /* Added margin for spacing */
`;

const EditButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const TenantInformation = ({ data, style }) => {
  const handleEditClick = () => {
    // Implement edit functionality here
    console.log('Edit button clicked');
  };

  return (
    <Container style={style}>
      <h2>Tenant Information</h2>
      <ProfilePicture src={data.profilePicture} alt={`${data.name}'s profile`} />
      <Name>{data.name}</Name>
      <EditButton onClick={handleEditClick}>Edit Profile</EditButton>
    </Container>
  );
};

export default TenantInformation;
