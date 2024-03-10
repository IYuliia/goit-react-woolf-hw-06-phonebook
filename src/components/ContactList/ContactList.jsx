import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactsSlice/slice';
import { selectContacts, selectFilter } from 'store/selector';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={styles.list}>
      {getFilteredContacts().map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={() => deleteContactHandler(contact.id)}
        />
      ))}
    </ul>
  );
};
