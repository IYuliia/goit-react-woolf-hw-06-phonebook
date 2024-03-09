import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  filterContacts,
} from '../store/contactsSlice/slice';

const App = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  console.log(contacts);

  const addContactHandler = newContact => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (existingContact) {
      alert(`"${newContact.name}" is already in contacts!`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  const filterContactsHandler = value => {
    dispatch(filterContacts(value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        marginLeft: 60,
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContactHandler} />

        <h2>Contacts</h2>
        <Filter filterContacts={filterContactsHandler} />
        <ContactList
          contacts={getFilteredContacts()}
          filter={filter}
          deleteContact={deleteContactHandler}
        />
      </div>
    </div>
  );
};

export default App;
