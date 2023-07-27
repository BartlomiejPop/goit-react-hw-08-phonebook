import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
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
