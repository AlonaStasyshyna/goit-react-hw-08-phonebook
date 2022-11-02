import PropTypes from 'prop-types';
import { List, Button } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <List>
      {contacts.map(({ name, id, phone }) => (
        <li key={id}>
          <span>{name}: </span>
          <span>{phone}</span>

          <Button type="button" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
