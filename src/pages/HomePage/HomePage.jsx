import { Container, Typography } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

const HomePage = () => {
  return (
    <Container
      sx={{
        padding: '60px 15px',
      }}
    >
      <ContactsIcon
        color="primary"
        sx={{
          fontSize: 120,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '36px',
        }}
      />
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: 'center', fontWeight: 500 }}
      >
        Welcome to your phonebook!
      </Typography>
    </Container>
  );
};

export default HomePage;
