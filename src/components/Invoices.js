import React, { useState } from 'react';
import styled from 'styled-components';
import { jsPDF } from 'jspdf'; // Import jsPDF for PDF generation

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
  cursor: pointer;
`;

const CheckmarkButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: ${({ selected }) => (selected ? '#007bff' : '#ccc')};
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
  width: 40px; /* Set the width you need */
  text-align: center;
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
  const [tenant] = useState({
    name: 'Narendra Sahoo',
    unit: 'A1',
    payments: [
      { month: 'January', amount: '5000', date: '2024-01-01' },
      { month: 'February', amount: '5300', date: '2024-02-01' },
      { month: 'March', amount: '5240', date: '2024-03-01' },
      // Add more monthly payment details as needed
    ]
  });

  const [selectedMonth, setSelectedMonth] = useState('');

  const handleRowClick = (month) => {
    setSelectedMonth(month);
  };

  const handleDownload = () => {
    if (!selectedMonth) {
      alert('Please select a month by clicking on a row.');
      return;
    }

    const payment = tenant.payments.find(p => p.month === selectedMonth);
    if (!payment) {
      alert('No invoice available for the selected month.');
      return;
    }

    // Generate PDF
    const doc = new jsPDF();
    doc.text(`Invoice for ${tenant.name} (Unit ${tenant.unit})`, 10, 10);
    doc.text(`Month: ${payment.month}`, 10, 20);
    doc.text(`Amount: ${payment.amount}`, 10, 30);
    doc.text(`Date: ${payment.date}`, 10, 40);
    doc.save(`${payment.month}_Invoice.pdf`);
  };

  return (
    <Container>
      <h1>Invoices for {tenant.name} (Unit {tenant.unit})</h1>
      
      <Table>
        <thead>
          <tr>
            <TableHeader>Select</TableHeader>
            <TableHeader>Month</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tenant.payments.map((payment, index) => (
            <tr 
              key={index} 
              onClick={() => handleRowClick(payment.month)}
              style={{ cursor: 'pointer' }}
            >
              <TableCell>
                <CheckmarkButton 
                  selected={selectedMonth === payment.month}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row click event
                    handleRowClick(payment.month);
                  }}
                >
                  {selectedMonth === payment.month ? '✔' : ''}
                </CheckmarkButton>
              </TableCell>
              <TableCell>{payment.month}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{payment.date}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Button onClick={handleDownload}>Download Invoice</Button>
    </Container>
  );
};

export default Invoices;
