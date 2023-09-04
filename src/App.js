import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  /*
  State variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    setContacts(prev => [...prev, {name, phone, email}]);
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments(prev => [...prev, {title, contact, date, time}]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ 
        <ContactsPage 
        contacts={contacts}
        addContact={addContact}
        /> 
      }/>
      <Route path={ROUTES.APPOINTMENTS} element={ 
        <AppointmentsPage 
          appointments={appointments}
          addAppointment={addAppointment}
          contacts={contacts}
        /> 
      }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
