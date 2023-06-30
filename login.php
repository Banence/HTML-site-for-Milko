<?php
    $user = "root";
    $server = "localhost";
    $password = "";
    $name = "login";
    $conn = "";

    try{
        $conn = mysqli_connect($server, $user, $password, $name);
    }
    catch(mysqli_sql_exception){
        echo"<h1>No connection!<h1>";
    }

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
        $submit = $_POST["submit"];
        
        if(isset($submit) && !empty($username) && !empty($password)){
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO users (email, password) VALUES ('$username', '$hash')";

            mysqli_query($conn, $sql);
            header('Location: home.php');
        }
    }
    mysqli_close($conn);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="login.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post">
            <h1 id="logintext">login form</h1>
            <input id="username" type="email" name="username" placeholder="Username" required>
            <input id="password" type="password" name="password" placeholder="Password" required>
            <div class="text-center">
                <button type="submit" name="submit" id="loginbutton">Login</button>
            </div>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>