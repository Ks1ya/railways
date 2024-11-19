let loginInputEmail = document.querySelector('.login-input-email');
let loginInputPassword = document.querySelector('.login-input-password');

document.querySelector('.input-login').addEventListener('click', () => {
  const savedData = JSON.parse(localStorage.getItem('userData'));
  if (savedData.email === loginInputEmail.value && savedData.password === loginInputPassword.value) {
    window.location.href = 'index.html'
  } else {
    console.log('ошибка')
  }
});