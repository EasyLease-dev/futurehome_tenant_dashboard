import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
`;

const MaintenanceStatus = ({ data, style }) => {
  return (
    <Container style={style}>
      <h2>Maintenance Status</h2>
      {data.map((request, index) => (
        <p key={index}>Request #{request.id}: {request.status}</p>
      ))}
    </Container>
  );
};

export default MaintenanceStatus;
