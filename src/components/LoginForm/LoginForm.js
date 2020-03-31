import React from 'react';
import { Link } from 'react-router-dom';

import GoogleLogo from '../../assets/images/google-logo.svg';

const LoginForm = () => (
  <section className="login">
    <h1 className="title">Welcome to Invision</h1>

    <form>
      <div className="input-group">
        <label htmlFor="email">Users name or Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="youremail@company.com"
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="email"
          placeholder="*******"
        />
      </div>

      <a href="/" className="forgot-link">
        Forgot password?
      </a>

      <button type="submit" className="btn btn-primary">
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

export default LoginForm;
