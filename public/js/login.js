const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if(username && password){
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok){
            document.location.replace('/dashboard');
        }else {
            alert(response.statusText, "Error with logging in");
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#signup-username").value.trim();
    const email = document.querySelector("#signup-email").value.trim();
    const password = document.querySelector("#signup-password").value.trim();

    if(username && email && password){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok){
            document.location.replace('/dashboard');
        }else {
            alert(response.statusText, "Error with logging in");
        }
    }
};


document
    .querySelector(".login-form")
    .addEventListener('submit', loginFormHandler);

document
    .querySelector("sign-up-form")
    .addEventListener("submit", signupFormHandler);