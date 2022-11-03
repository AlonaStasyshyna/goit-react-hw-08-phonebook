import PropTypes from 'prop-types';
import { List, Button } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          <span>{name}: </span>
          <span>{number}</span>

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
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
