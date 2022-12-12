import { getForm } from './utils.js';

export const registration = () => {
  const params = ['login', 'password'];
  const registrationForm = getForm('REGISTRATION', params);
  return registrationForm;
};
