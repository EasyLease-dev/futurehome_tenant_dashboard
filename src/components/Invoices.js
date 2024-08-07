import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  flex: 1;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f4f4f4;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Invoices = () => {
  const [tenant, setTenant] = useState({
    name: 'Narendra Sahoo',
    unit: 'A1',
    payments: [
      { month: 'January', amount: '5000', date: '2024-01-01' },
      { month: 'February', amount: '5300', date: '2024-02-01' },
      { month: 'March', amount: '5240', date: '2024-03-01' },
      // Add more monthly payment details as needed
    ]
  });

  const handleDownload = () => {
    // Logic for downloading invoices
    alert('Download invoices functionality to be implemented');
  };

  return (
    <Container>
      <h1>Invoices for {tenant.name} (Unit {tenant.unit})</h1>
      <Table>
        <thead>
          <tr>
            <TableHeader>Month</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tenant.payments.map((payment, index) => (
            <tr key={index}>
              <TableCell>{payment.month}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{payment.date}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Button onClick={handleDownload}>Download Invoices</Button>
    </Container>
  );
};

export default Invoices;
