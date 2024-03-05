const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    // Gets users info and sends to login route to check and validate
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

document.querySelector(".login-form").addEventListener('submit', loginFormHandler);