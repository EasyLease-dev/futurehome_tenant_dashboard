import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StatusContainer = styled.div`
  margin-top: 20px;
`;

const StatusTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 10px;
`;

const StatusStep = styled.div`
  width: 18%;
  text-align: center;
  position: relative;
`;

const StepIndicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.completed ? '#4CAF50' : '#ddd'};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const StepLabel = styled.div`
  margin-top: 5px;
  font-size: 14px;
`;

const StepLine = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  width: 100%;
  height: 2px;
  background-color: ${props => props.completed ? '#4CAF50' : '#ddd'};
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: ${props => props.completed ? '#4CAF50' : '#ddd'};
  }
`;

const MaintenanceStatus = ({ data, style }) => {
  // Hard-code status to "Inspector Assigned"
  const fixedStatus = 'Inspector Assigned';

  const getStatusIndex = status => {
    switch (status) {
      case 'Request Submitted':
        return 0;
      case 'Under Review':
        return 1;
      case 'Inspector Assigned':
        return 2;
      case 'Work in Progress':
        return 3;
      case 'Completed':
        return 4;
      default:
        return 0;
    }
  };

  return (
    <Container style={style}>
      <h2>Maintenance Status</h2>
      {data.map((request, index) => (
        <StatusContainer key={index}>
          <StatusTitle>Request #{request.id}: {fixedStatus}</StatusTitle>
          <StatusBar>
            {['Request Submitted', 'Under Review', 'Inspector Assigned', 'Work in Progress', 'Completed'].map((step, idx) => (
              <StatusStep key={step}>
                <StepIndicator completed={idx <= getStatusIndex(fixedStatus)} />
                {idx < 4 && (
                  <StepLine completed={idx < getStatusIndex(fixedStatus)} />
                )}
                <StepLabel>{step}</StepLabel>
              </StatusStep>
            ))}
          </StatusBar>
        </StatusContainer>
      ))}
    </Container>
  );
};

export default MaintenanceStatus;
