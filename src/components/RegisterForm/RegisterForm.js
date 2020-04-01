import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  validateEmail,
  validateFullname,
  validatePassword,
} from '../../utils/formValidator';

import GoogleLogo from '../../assets/images/google-logo.svg';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFullNameError('');
    setEmailError('');
    setPasswordError('');
    setHasError(false);

    if (!validateEmail(email)) {
      setEmailError('Email address is invalid');
      setHasError(true);
    }
    if (!validateFullname(fullName)) {
      setFullNameError('Full name must contain at least 8 characters');
      setHasError(true);
    }
    if (!validatePassword(password)) {
      setPasswordError(
        'Password must contains 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter'
      );
      setHasError(true);
    }
  };

  return (
    <section className="login">
      <h1 className="title">Getting Started</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div className={`input-group ${fullNameError ? 'has-error' : ''}`}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Carolina Galvão dos Santos Zaglia"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {fullNameError && <p className="help has-error">{fullNameError}</p>}
        </div>

        <div className={`input-group ${emailError ? 'has-error' : ''}`}>
          <label htmlFor="email">Users name or Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="help has-error">{emailError}</p>}
        </div>

        <div className={`input-group ${passwordError ? 'has-error' : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="email"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="help has-error">{passwordError}</p>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!fullName || !email || !password || hasError}
        >
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
};

export default RegisterForm;
