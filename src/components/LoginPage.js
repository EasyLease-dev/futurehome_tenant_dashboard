import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAuth } from '../context/AuthContext';
import { styled } from '@mui/material/styles';

// Styled components
const BackgroundContainer = styled(Container)(({ theme }) => ({
  background: `url('/path-to-your-background-image.jpg') no-repeat center center fixed`,
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const FormBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: '400px',
}));

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      login();
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <BackgroundContainer>
      <FormBox component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom align="center">
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          helperText="Enter your email address"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          helperText="Enter your password"
        />
        {error && <Typography color="error" align="center">{error}</Typography>}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </FormBox>
    </BackgroundContainer>
  );
}

export default LoginPage;
