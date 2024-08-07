import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TenantInformation from './TenantInformation';
import LeaseOverview from './LeaseOverview';
import PaymentHistory from './PaymentHistory';
import MaintenanceStatus from './MaintenanceStatus';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-areas: 
    "tenant-info lease-overview"
    "payment-history maintenance-status";
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  Padding-bottom:100px;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-areas: 
      "tenant-info"
      "lease-overview"
      "payment-history"
      "maintenance-status";
    grid-template-columns: 1fr;
  }
`;

const Dashboard = () => {
  const [tenant, setTenant] = useState({});
  const [lease, setLease] = useState({});
  const [payments, setPayments] = useState([]);
  const [maintenance, setMaintenance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tenantRes = await fetch('/api/tenant');
      const leaseRes = await fetch('/api/lease');
      const paymentsRes = await fetch('/api/payments');
      const maintenanceRes = await fetch('/api/maintenance');
      
      const tenantData = await tenantRes.json();
      const leaseData = await leaseRes.json();
      const paymentsData = await paymentsRes.json();
      const maintenanceData = await maintenanceRes.json();

      setTenant(tenantData);
      setLease(leaseData);
      setPayments(paymentsData);
      setMaintenance(maintenanceData);
    };

    fetchData();
  }, []);

  return (
    <DashboardContainer>
      <TenantInformation data={tenant} style={{ gridArea: 'tenant-info' }} />
      <LeaseOverview data={lease} style={{ gridArea: 'lease-overview' }} />
      <PaymentHistory data={payments} style={{ gridArea: 'payment-history' }} />
      <MaintenanceStatus data={maintenance} style={{ gridArea: 'maintenance-status' }} />
    </DashboardContainer>
  );
};

export default Dashboard;
