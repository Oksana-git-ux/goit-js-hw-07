
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const formData = {
    email: email,
    password: password
  };

  console.log(formData);
  event.currentTarget.reset();
});
