import React from "react";

export const ContactPicker = (props) => {

  const { contacts, onChange, value, name } = props;

  /* Use map() on the contact array in props to render an <option> for each contact with key and value attributes set to the contact name */
  const contactOptions = contacts.map((contact, index) => {
    return <option key={index} value={contact.name}>{contact.name}</option>
  });

  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="">No Contact Selected</option>
      {contactOptions}
    </select>
  );
};
