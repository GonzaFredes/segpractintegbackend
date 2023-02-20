
const formLogin = document.getElementById('formLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/api/session/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.value, password: password.value })
    })
        .then((res) => res.json())
        .then((data) => {
            window.alert(`Bienvenido ${data.first_name}`);
            window.location.href = '/products'
        })
        .catch((error) => { window.alert('Error al iniciar sesion'); });
});
