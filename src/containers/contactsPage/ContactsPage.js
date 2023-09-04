import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

  const { contacts, addContact } = props;
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const isDuplicate = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the form name is not in the contacts array
    */
    if (!isDuplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
    

  };

  /*
  Check for contact name in the 
  contacts array variable in props when name changes
  */
  useEffect(() => {
    if (contacts.includes(name)) {
      isDuplicate = true;
    }
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
          <TileList data={contacts}/>
      </section>
    </div>
  );
};
