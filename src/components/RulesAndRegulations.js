import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const RulesAndRegulations = ({ data }) => {
  return (
    <Container>
      <h2>Rules and Regulations</h2>
      <ul>
        {data.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </Container>
  );
};

export default RulesAndRegulations;
