import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import initialContacts from './contact.json'
import { useState, useEffect } from 'react'



export default function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem("saved-contacts");
        if (savedContacts !== null) {
            return JSON.parse(savedContacts);
        }
        return initialContacts
    }
    );
    const [filter, setFilter] = useState("");

    const hendleAddContact = newContact => {
        setContacts(prevContacts =>[
                ...prevContacts,newContact
        ])
    }

    const hendledeleteContact = (contactId) => {
        setContacts(prevContacts=>prevContacts.filter(contact=>contact.id !== contactId))
    }

    useEffect(() => {
        localStorage.setItem("saved-contacts", JSON.stringify(contacts));
    }, [contacts]);
    
    const visibileContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAdd={hendleAddContact} />
            <SearchBox values={filter} onFilter={setFilter} />
            <ContactList contacts={visibileContacts} onDelete={hendledeleteContact}/>
        </div>
    )
}