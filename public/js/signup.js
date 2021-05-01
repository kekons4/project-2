const signupHandler = async(event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const passwordConfirm = document.querySelector('#confirm-password');

    if(password !== passwordConfirm) {
        alert('ERROR the passwords do not match, try again');
        return;
    }

    if(email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, username, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('ERROR there already exists an account with that email');
        }
    }
};

document.querySelector('#signup').addEventListener('submit', signupHandler);