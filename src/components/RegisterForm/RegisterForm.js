import React from 'react';
import { Link } from 'react-router-dom';

import GoogleLogo from '../../assets/images/google-logo.svg';

const RegisterForm = () => (
  <section className="login">
    <h1 className="title">Getting Started</h1>

    <form>
      <div className="input-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Carolina Galvão dos Santos Zaglia"
        />
      </div>

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

      <button type="submit" className="btn btn-primary">
        Sign up
      </button>
    </form>

    <span className="separator">Or</span>

    <button type="button" className="btn btn-md btn-shadow">
      <img src={GoogleLogo} alt="Google logo" />
      Sign up with Google
    </button>

    <span className="create-link">
      By signing up, you agree to Invision <br />
      <Link to="register">Terms of Conditions</Link> and{' '}
      <Link to="register">Privacy Policy</Link>
    </span>

    <span className="create-link mb-40">
      New Invision? <Link to="register">Create account</Link>
    </span>
  </section>
);

export default RegisterForm;
