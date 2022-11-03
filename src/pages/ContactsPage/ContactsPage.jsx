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
      <h1>Phonebook</h1>
      <ContactForm handleChange={handleChange} />

      <section>
        <h2>Contacts</h2>
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        {contacts && (
          <>
            <Filter startFilter={filter} handleFilter={handleFilter} />
            {contacts.length > 0 ? (
              <ContactList contacts={contacts} handleDelete={handleDelete} />
            ) : (
              <p>You don't have any contacts to show yet.</p>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default ContactsPage;
