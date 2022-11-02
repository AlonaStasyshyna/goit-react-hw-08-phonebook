import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

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

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const ContactsPage = () => {
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
      id: nanoid(),
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
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {contacts && (
          <>
            <Filter startFilter={filter} handleFilter={handleFilter} />
            <ContactList contacts={contacts} handleDelete={handleDelete} />
          </>
        )}
      </section>
    </main>
  );
};
