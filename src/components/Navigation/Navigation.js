import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.activeLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
