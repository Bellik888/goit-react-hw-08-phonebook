import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <h1>Hello!!!</h1>
      <p>
        You can <Link to="/register">Register</Link> or{' '}
        <Link to="/login">LogIn</Link>{' '}
      </p>
    </>
  );
};
