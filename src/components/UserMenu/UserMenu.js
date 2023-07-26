import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import styles from './UserMenu.module.css';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <div>
      {/* <p>Welcome, {user.name}</p> */}
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
