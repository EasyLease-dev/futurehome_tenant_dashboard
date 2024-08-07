import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LeaseOverview = ({ data, style }) => {
  return (
    <Container style={style}>
      <h2>Lease Overview</h2>
      <p><strong>Property:</strong> {data.property}</p>
      <p><strong>Lease Start Date:</strong> {data.startDate}</p>
      <p><strong>Lease End Date:</strong> {data.endDate}</p>
      <p><strong>Security Deposit:</strong> {data.securityDeposit}</p>
    </Container>
  );
};

export default LeaseOverview;
