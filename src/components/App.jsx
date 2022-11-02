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
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { filterContacts } from 'redux/filter/filter-slice';

export const App = () => {
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
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleChange={handleChange} />

      <h2>Contacts</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contacts && (
        <>
          <Filter startFilter={filter} handleFilter={handleFilter} />
          <ContactList contacts={contacts} handleDelete={handleDelete} />
        </>
      )}
    </div>
  );
};
