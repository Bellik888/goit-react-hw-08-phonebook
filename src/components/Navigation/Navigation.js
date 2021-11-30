import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink exact to="/" className={s.item}>
            Home
          </NavLink>
        </li>
        {/* <li >
                    <NavLink exact to="/contacts" className={s.item}>Contacts</NavLink >
                </li>
                <li >
                    <NavLink exact to="/login" className={s.item}>Login</NavLink >
                </li>
                <li >
                    <NavLink exact to="/register" className={s.item}>Register</NavLink >
                </li> */}
      </ul>
    </nav>
  );
};
