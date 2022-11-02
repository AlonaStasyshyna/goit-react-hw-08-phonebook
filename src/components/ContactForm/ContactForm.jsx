import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ handleChange }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    handleChange({ name, phone });
    formReset();
  };

  const formReset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInput}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleInput}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
