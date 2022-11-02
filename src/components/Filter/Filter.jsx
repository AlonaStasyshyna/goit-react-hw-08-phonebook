import PropTypes from 'prop-types';
import { Label, Input } from '../ContactForm/ContactForm.styled';

export const Filter = ({ startFilter, handleFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={startFilter}
        onChange={handleFilter}
      />
    </Label>
  );
};

Filter.propTypes = {
  startFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
