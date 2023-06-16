function sendMail() {
  var sendButton = document.getElementById("sendbutton");
  sendButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>  Sending...</span>';

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var incorrectinput = document.getElementById("incorrectinput");

  if (!name || !email || !message) {
    // Handle form validation error
    incorrectinput.innerHTML = "Please fill out the form";
    sendButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i><span>  SEND</span>'; // Change button HTML back to default
    return;
  }

  if (!isValidEmail(email)) {
    // Handle invalid email error
    incorrectinput.innerHTML = "Invalid email!";
    sendButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i><span>  SEND</span>'; // Change button HTML back to default
    return;
  }

  var params = {
    from_name: name,
    from_email: email,
    message: message,
  };

  const serviceID = "service_9hehivg";
  const templateID = "template_t8w3bs2";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      sendButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i><span>  SEND</span>'; // Change button HTML back to default
      incorrectinput.innerHTML = "";
      window.location.href = "thanksforsupport.html";
    })
    .catch(err => {
      console.log(err);
      sendButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i><span>  SEND</span>'; // Change button HTML back to default in case of error
      incorrectinput.innerHTML = "";
    });
}


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

