import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { validadeEmail } from '../../utils/formValidator';

import GoogleLogo from '../../assets/images/google-logo.svg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    if (validadeEmail(email)) {
      setError(...error, { email: 'Email address is invalid' });
    }
  };

  return (
    <section className="login">
      <h1 className="title">Welcome to Invision</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div className={`input-group ${error.email ? 'has-error' : ''}`}>
          <label htmlFor="email">Users name or Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <p className="help has-error">{error.email}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="email"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a href="/" className="forgot-link">
          Forgot password?
        </a>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!email || !password}
        >
          Sign In
        </button>
      </form>

      <span className="separator">Or</span>

      <button type="button" className="btn btn-md btn-shadow">
        <img src={GoogleLogo} alt="Google logo" />
        Sign in with Google
      </button>

      <span className="create-link">
        New Invision? <Link to="register">Create account</Link>
      </span>
    </section>
  );
};

export default LoginForm;
