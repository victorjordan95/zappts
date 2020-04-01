import {
  validateEmail,
  validateFullname,
  validatePassword,
} from '../utils/formValidator';

describe('Check e-mail', () => {
  test('A valid e-mail must return false', () => {
    expect(validateEmail('victor.jordan@gmail.com')).toBe(true);
  });
  test('A invalid e-mail must return true', () => {
    expect(validateEmail('victor.jorda')).toBe(false);
  });
});

describe('Check full name', () => {
  test('A full name with less than 8 characters must return true', () => {
    expect(validateFullname('victor')).toBe(false);
  });
  test('A full name with more than 8 characters must return false', () => {
    expect(validateFullname('Victor Jordan')).toBe(true);
  });
});

describe('Check password', () => {
  test('Password that meet all requirements must return true', () => {
    expect(validatePassword('teste')).toBe(false);
  });
  test('Password that not meet all requirements must return true', () => {
    expect(validatePassword('Teste123')).toBe(true);
  });
});
