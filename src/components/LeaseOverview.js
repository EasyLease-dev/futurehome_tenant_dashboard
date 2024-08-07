import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2px;
  padding-left:20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height:300px;
`;

const LeaseOverview = ({ data, style }) => {
  return (
    <Container style={style}>
      <h2>Lease Overview</h2>
      <p>Property: {data.property}</p>
      <p>Lease Start Date: {data.startDate}</p>
      <p>Lease End Date: {data.endDate}</p>
      <p>Security Deposit: ${data.securityDeposit}</p>
    </Container>
  );
};

export default LeaseOverview;
