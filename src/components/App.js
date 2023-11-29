import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {} from '../redux/actions';

export const App = () => {
  return (
    <div className="wrapper">
      <ContactForm />
      <ContactList>
        <Filter />
      </ContactList>
    </div>
  );
};
