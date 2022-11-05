import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { filterContacts } from 'redux/filter/filter-slice';

import { Loader } from 'components/Loader/Loader';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Alert, AlertTitle, Box, Container, Typography } from '@mui/material';

const ContactsPage = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = data => {
    const newContact = {
      ...data,
    };

    if (findSameName(newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    dispatch(addContact(newContact));
  };

  const findSameName = contactName =>
    contacts.find(contact => contact.name === contactName);

  const handleFilter = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <main>
      <Container sx={{ padding: '20px 15px' }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ textAlign: 'center', fontWeight: 700 }}
        >
          Phonebook
        </Typography>
        <ContactForm handleChange={handleChange} />

        <Box component="section" sx={{ padding: '20px 0' }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ textAlign: 'center', fontWeight: 700 }}
          >
            List of contacts
          </Typography>
          {isLoading && <Loader />}
          {error && (
            <Alert severity="error" sx={{ width: '40%', margin: '10px auto' }}>
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          )}
          {!error && contacts && (
            <>
              <Filter startFilter={filter} handleFilter={handleFilter} />
              {contacts.length > 0 ? (
                <ContactList contacts={contacts} handleDelete={handleDelete} />
              ) : (
                <Alert
                  severity="info"
                  sx={{ width: '40%', margin: '10px auto' }}
                >
                  <AlertTitle>Info</AlertTitle>
                  You don't have <strong>any contacts</strong> to show yet
                </Alert>
              )}
            </>
          )}
        </Box>
      </Container>
    </main>
  );
};

export default ContactsPage;
