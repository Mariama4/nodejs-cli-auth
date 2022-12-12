import { getForm } from './utils.js';

export const login = () => {
  const params = ['login', 'password'];
  const loginForm = getForm('LOGIN', params);
  return loginForm;
};
