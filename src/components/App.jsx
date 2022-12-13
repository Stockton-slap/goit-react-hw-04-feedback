import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => id !== contact.id),
    }));
  };

  handleFilterChange = e => {
    const { value } = e.target;

    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(({ name }) => {
      const normalizedFilter = name
        .toLowerCase()
        .includes(filter.toLowerCase());

      return normalizedFilter;
    });

    return (
      <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm
          onSubmit={this.addContact}
          contacts={contacts}
        ></ContactForm>

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          visibleContacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
