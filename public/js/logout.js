const logout = async () => {
    //Creates a post request to sign user out
    const response =  await fetch('./api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok){
        document.location.replace('/')
    }else{
        alert(response.statusText, "Error with logging out");
    }
}

document.querySelector("#signout").addEventListener("click", logout);