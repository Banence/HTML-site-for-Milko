function logincredentialscheck(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === 'admin' && password === '12345678')
    {
        alert("Successful");
    }else{
        alert("Not successful");
    }
}