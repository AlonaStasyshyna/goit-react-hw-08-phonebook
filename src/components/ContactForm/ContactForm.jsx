import { useState } from 'react';
import PropTypes from 'prop-types';
import { CustomizedForm } from 'components/RegisterForm/RegisterForm.styled';
import { Button, TextField } from '@mui/material';

export const ContactForm = ({ handleChange }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    handleChange({ name, number });
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <CustomizedForm
      onSubmit={onSubmit}
      component="form"
      sx={{ marginTop: '10px', marginBottom: '10px' }}
    >
      <TextField
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInput}
        label="Name"
        size="small"
      />
      <TextField
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInput}
        label="Number"
        size="small"
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ width: '60%', margin: '0 auto' }}
      >
        Add contact
      </Button>
    </CustomizedForm>
  );
};

ContactForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
