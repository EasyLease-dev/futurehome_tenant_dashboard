import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LeaseOverview from './LeaseOverview';
import PaymentHistory from './PaymentHistory';
import MaintenanceStatus from './MaintenanceStatus';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-areas: 
    "payment-history lease-overview"
    "maintenance-status maintenance-status";
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-areas: 
      "lease-overview"
      "payment-history"
      "maintenance-status";
    grid-template-columns: 1fr;
  }
`;

const Dashboard = () => {
  const [tenant, setTenant] = useState({
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/100'
  });
  const [lease, setLease] = useState({
    property: '123 Elm St',
    startDate: '2023-01-01',
    endDate: '2024-01-01',
    securityDeposit: 500
  });
  const [payments, setPayments] = useState([
    { date: '2024-01-01', amount: 1200, status: 'Paid' },
    { date: '2024-02-01', amount: 1200, status: 'Pending' }
  ]);
  const [maintenance, setMaintenance] = useState([
    { id: 1, status: 'Inspector Assigned' },
    { id: 2, status: 'Inspector Assigned' }
  ]);

  useEffect(() => {
    // Dummy data is being used, so this can be commented out
    // const fetchData = async () => {
    //   try {
    //     const tenantRes = await fetch('/api/tenant');
    //     const leaseRes = await fetch('/api/lease');
    //     const paymentsRes = await fetch('/api/payments');
    //     const maintenanceRes = await fetch('/api/maintenance');
        
    //     const tenantData = await tenantRes.json();
    //     const leaseData = await leaseRes.json();
    //     const paymentsData = await paymentsRes.json();
    //     const maintenanceData = await maintenanceRes.json();

    //     setTenant(tenantData);
    //     setLease(leaseData);
    //     setPayments(paymentsData);
    //     setMaintenance(maintenanceData);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    // fetchData();
  }, []);

  return (
    <DashboardContainer>
      <LeaseOverview data={lease} style={{ gridArea: 'lease-overview' }} />
      <PaymentHistory data={payments} style={{ gridArea: 'payment-history' }} />
      {maintenance && maintenance.length > 0 ? (
        <MaintenanceStatus data={maintenance} style={{ gridArea: 'maintenance-status' }} />
      ) : (
        <p>No maintenance data available</p>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
