import { Button, Container, TextField } from '@mui/material';
import { CustomizedForm } from 'components/RegisterForm/RegisterForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container sx={{ padding: '20px 15px' }}>
      <CustomizedForm component="form" onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          size="small"
        />
        <TextField
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          size="small"
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ width: '60%', margin: '0 auto' }}
        >
          Log in
        </Button>
      </CustomizedForm>
    </Container>
  );
};
