function logincredentialscheck(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === 'admin' && password === 'password')
    {
        window.location.href = "home.html";
    }else{
        document.getElementById("wrongcredentialstext").innerHTML = "Unknown credentials"
    }
}