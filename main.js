
// import { login } from './lib/login.js';
import { registration } from './lib/registration.js';
import { input, write, toHomePos, clearCmd } from './lib/utils.js';
import User from './db/storage.js';

// create instance empty user
const user = new User('', '');

// get forms
const registrationForm = registration();
// const loginForm = login();


input.on('data', (chunk) => {
  toHomePos();
  if (!user.login) {
    user.login = chunk.toString().trim();
    write(registrationForm.paramsCoordinates[1]);
  } else {
    user.password = chunk.toString().trim();
    process.exit(0);
  }
});

// clear cmd
clearCmd();
// draw reg form
write(registrationForm.form);
// moves cursor to home position (0, 0)
toHomePos();
// move cursor to first param
write(registrationForm.paramsCoordinates[0]);
