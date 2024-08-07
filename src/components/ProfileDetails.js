import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
  font-size: 16px;

  strong {
    color: #555;
  }
`;

const EditButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ProfileDetails = ({ user, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Here you would typically save the updated data to the server
    setIsEditing(false);
  };

  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <DetailsContainer>
          {isEditing ? (
            <>
              <DetailItem>
                <strong>Name:</strong>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </DetailItem>
              <DetailItem>
                <strong>Phone Number:</strong>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </DetailItem>
              <DetailItem>
                <strong>Email:</strong>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </DetailItem>
              <DetailItem>
                <strong>Occupation:</strong>
                <Input
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </DetailItem>
              <DetailItem>
                <strong>Current Residence:</strong>
                <Input
                  name="residence"
                  value={formData.residence}
                  onChange={handleChange}
                />
              </DetailItem>
              <DetailItem>
                <strong>Marital Status:</strong>
                <Input
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                />
              </DetailItem>
              <EditButton onClick={handleSave}>Save</EditButton>
            </>
          ) : (
            <>
              <DetailItem><strong>Name:</strong> {formData.name}</DetailItem>
              <DetailItem><strong>Phone Number:</strong> {formData.phone}</DetailItem>
              <DetailItem><strong>Email:</strong> {formData.email}</DetailItem>
              <DetailItem><strong>Occupation:</strong> {formData.occupation}</DetailItem>
              <DetailItem><strong>Current Residence:</strong> {formData.residence}</DetailItem>
              <DetailItem><strong>Marital Status:</strong> {formData.maritalStatus}</DetailItem>
              <EditButton onClick={() => setIsEditing(true)}>Edit Profile</EditButton>
            </>
          )}
        </DetailsContainer>
      </PopupContent>
    </PopupContainer>
  );
};

export default ProfileDetails;
