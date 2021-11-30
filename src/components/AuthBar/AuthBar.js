import { logOut } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import s from './AuthBar.module.css';
import { authSelectors } from '../../redux/auth/auth-selectors';

export const AuthBar = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div className={s.container}>
      <h2>Hello, {name}</h2>
      <button type="button" onClick={handleClick}>
        {' '}
        LogOut
      </button>
    </div>
  );
};
