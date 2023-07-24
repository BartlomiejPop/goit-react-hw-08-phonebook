import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
};
