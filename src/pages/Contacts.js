import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { AppBar } from 'components/AppBar/AppBar';
import styles from './styles.module.css';
import { selectUser } from 'redux/auth/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const userName = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <AppBar />
      <div className={styles.wrapper}>
        <span className={styles.greetings}>Hello {userName.name}</span>
        <div className={styles.container}>
          <ContactForm />
          <Filter />
          <div className={styles.isLoading}>
            {isLoading && <div className={styles.customLoader}></div>}
          </div>
          <ContactList />
        </div>
      </div>
    </>
  );
}
