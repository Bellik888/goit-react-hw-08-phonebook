import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
// import { useHistory } from 'react-router';
import s from './LoginPage.module.css';

const LoginPage = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    // history.push('/contacts');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Please LogIn</h1>

      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          {/* <span className={s.span}>Mail</span> */}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Mail"
            className={s.input}
          />
        </label>

        <label className={s.label}>
          {/* <span className={s.span}>Password</span> */}
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            className={s.input}
          />
        </label>

        <button type="submit" className={s.btn}>
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
