import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

export const App = () => {
  const stateContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, stateContacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => id !== contact.id));
  };

  const handleFilterChange = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const visibleContacts = contacts.filter(({ name }) => {
    const normalizedFilter = name.toLowerCase().includes(filter.toLowerCase());

    return normalizedFilter;
  });

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onSubmit={addContact} contacts={contacts}></ContactForm>

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        visibleContacts={visibleContacts}
        deleteContact={deleteContact}
      />
    </Container>
  );
};
