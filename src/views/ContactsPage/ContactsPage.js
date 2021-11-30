import s from './ContactsPage.module.css';
import { Filter } from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import ContactListItem from '../../components/ContactListItem/ContactListItem';

export const ContactsPage = () => {
  return (
    <div className={s.contactsPage}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList>
        <ContactListItem />
      </ContactList>
    </div>
  );
};
