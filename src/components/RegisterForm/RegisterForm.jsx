import { Button, Container, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { CustomizedForm } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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

    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container sx={{ padding: '20px 15px' }}>
      <CustomizedForm component="form" onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          label="Name"
          size="small"
        />
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
          Sign up
        </Button>
      </CustomizedForm>
    </Container>
  );
};
