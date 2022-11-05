import { Box, IconButton, List, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '45%',
        margin: '0 auto',
      }}
    >
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Typography
                component="p"
                color="primary"
                sx={{ fontWeight: '700' }}
              >
                {name}{' '}
              </Typography>
              <Typography component="p">{number}</Typography>
            </div>

            <IconButton
              type="button"
              onClick={() => handleDelete(id)}
              size="small"
              edge="start"
              color="primary"
              aria-label="delete"
              sx={{ p: '0 12px' }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
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
