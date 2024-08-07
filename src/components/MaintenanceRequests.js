import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Container for the entire page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f4f7f6;
  min-height: 100vh;
`;

// Title
const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

// Form container
const FormContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 500px;
`;

// Form styling
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// Styled input, textarea, and dropdown components
const TextArea = styled.textarea`
  padding: 12px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Dropdown = styled.select`
  padding: 12px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Submit button styling
const SubmitButton = styled.button`
  padding: 12px;
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

// List of requests
const RequestsList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
`;

// Individual request item
const RequestItem = styled.li`
  background-color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 10px 0;
    font-size: 1.25rem;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #555;
  }

  strong {
    color: #333;
  }
`;

const MaintenanceRequests = () => {
  const [requests, setRequests] = useState([]);
  const [formData, setFormData] = useState({
    type: '',
    subtype: '',
    seriousness: '',
    description: '',
  });

  const navigate = useNavigate();

  const maintenanceTypes = ['Plumbing', 'Electrical', 'HVAC', 'General'];
  const maintenanceSubtypes = {
    Plumbing: ['Leak', 'Clog', 'Installation'],
    Electrical: ['Power Outage', 'Faulty Wiring', 'Installation'],
    HVAC: ['Heating', 'Cooling', 'Ventilation'],
    General: ['Cleaning', 'Painting', 'Other'],
  };
  const seriousnessOfMaintenance = ['High', 'Casual'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequests([...requests, formData]);
    setFormData({
      type: '',
      subtype: '',
      seriousness: '',
      description: '',
    });

    // Show success message and navigate to dashboard
    alert('Request submitted successfully!');
    setTimeout(() => navigate('/dashboard'), 2000); // Adjust delay as needed
  };

  return (
    <Container>
      <Title>Maintenance Requests</Title>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Dropdown
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Maintenance Type</option>
            {maintenanceTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </Dropdown>
          <Dropdown
            name="subtype"
            value={formData.subtype}
            onChange={handleChange}
            required
            disabled={!formData.type}
          >
            <option value="">Select Maintenance Subtype</option>
            {formData.type &&
              maintenanceSubtypes[formData.type].map((subtype, index) => (
                <option key={index} value={subtype}>
                  {subtype}
                </option>
              ))}
          </Dropdown>
          <Dropdown
            name="seriousness"
            value={formData.seriousness}
            onChange={handleChange}
            required
          >
            <option value="">Seriousness of Maintenance</option>
            {seriousnessOfMaintenance.map((seriousness, index) => (
              <option key={index} value={seriousness}>
                {seriousness}
              </option>
            ))}
          </Dropdown>
          
          <TextArea
            name="description"
            placeholder="Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Submit Request</SubmitButton>
        </Form>
      </FormContainer>
      <RequestsList>
        {requests.map((request, index) => (
          <RequestItem key={index}>
            <h3>{request.type} - {request.subtype}</h3>
            <p><strong>Seriousness:</strong> {request.seriousness}</p>
            <p>{request.description}</p>
          </RequestItem>
        ))}
      </RequestsList>
    </Container>
  );
};

export default MaintenanceRequests;
