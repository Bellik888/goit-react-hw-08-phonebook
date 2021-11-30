import { AuthBar } from '../../components/AuthBar/AuthBar';
import { Navigation } from '../../components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={s.container}>
      <Navigation />
      {isLoggedIn && <AuthBar />}
    </div>
  );
};
