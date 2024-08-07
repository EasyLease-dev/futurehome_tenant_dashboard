import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PropertySearch from './components/PropertySearch';
import MaintenanceRequests from './components/MaintenanceRequests';
import Invoices from './components/Invoices';
import LoginPage from './components/LoginPage';
import styled from 'styled-components';
import PropertyDetail from './components/PropertyDetail';
import { AuthProvider, useAuth } from './context/AuthContext';

const AppContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <AppContainer>
      {isAuthenticated && <Sidebar />}
      <ContentContainer>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/property-search" element={<PrivateRoute><PropertySearch /></PrivateRoute>} />
          <Route path="/property/:id" element={<PrivateRoute><PropertyDetail /></PrivateRoute>} />
          <Route path="/maintenance-requests" element={<PrivateRoute><MaintenanceRequests /></PrivateRoute>} />
          <Route path="/invoices" element={<PrivateRoute><Invoices /></PrivateRoute>} />
        </Routes>
      </ContentContainer>
    </AppContainer>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
