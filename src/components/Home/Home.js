import { Link } from 'react-router-dom';
import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to our page!!!</h1>
      <p className={s.text}>
        You can{' '}
        <Link to="/register" className={s.link}>
          Register
        </Link>{' '}
        or{' '}
        <Link to="/login" className={s.link}>
          LogIn
        </Link>{' '}
      </p>
    </div>
  );
};

export default Home;
