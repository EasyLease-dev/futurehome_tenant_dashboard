import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  padding-left:20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const PaymentHistory = ({ data, style }) => {
  return (
    <Container style={style}>
      <h2>Payment History</h2>
      <table>
        <thead>
          <tr>
            <th>Payment Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((payment, index) => (
            <tr key={index}>
              <td>{payment.date}</td>
              <td>${payment.amount}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default PaymentHistory;
