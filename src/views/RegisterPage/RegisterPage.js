import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import { register } from '../../redux/auth/auth-operations';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    // history.push('/contacts');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Please Register</h1>

      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          {/* Name */}
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            className={s.input}
          />
        </label>
        <label className={s.label}>
          {/* Mail */}
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
          {/* Password */}
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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
