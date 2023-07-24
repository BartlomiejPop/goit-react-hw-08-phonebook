import React, { useEffect, lazy } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from '../redux/contacts/contactsSlice';
import {
  fetchContacts,
  addContact,
  // deleteContact,
} from 'redux/contacts/operations';
// import { getError, getIsLoading } from 'redux/contacts/selectors';
import { useAuth } from 'hooks';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const names = useSelector(state => state.contacts.names);
  // const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const { isRefreshing } = useAuth();

  // const addNewName = (name, number) => {
  //   dispatch(addContact({ name, number }));
  // };

  // const handleDelete = contact => {
  //   dispatch(deleteContact(contact));
  // };

  // const handleFilterChange = e => {
  //   dispatch(setFilter(e.target.value));
  // };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    addContact(JSON.stringify(names));
  }, [names]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
      {/* <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addNewName} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList
          names={filter === '' ? names : filter}
          deleteContact={handleDelete}
        />
      </div> */}
    </Routes>
  );
};
