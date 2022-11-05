import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export const Filter = ({ startFilter, handleFilter }) => {
  return (
    <TextField
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={startFilter}
      onChange={handleFilter}
      label="Find contacts by name"
      size="small"
      sx={{ display: 'flex', width: '45%', margin: '10px auto' }}
    />
  );
};

Filter.propTypes = {
  startFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
