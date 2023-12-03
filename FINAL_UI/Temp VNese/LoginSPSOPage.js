document.addEventListener("DOMContentLoaded", function () {
  var groupContainer = document.getElementById("groupContainer");
  var frameContainer = document.getElementById("frameContainer");

  if (groupContainer) {
    groupContainer.addEventListener("click", function () {
     
      authenticateUser();
    });
  }

  if (frameContainer) {
    frameContainer.addEventListener("click", function () {
       
      authenticateUser();
    });
  }

  function authenticateUser() {
    var usernameInput = document.getElementById("usernameInput");
    var passwordInput = document.getElementById("passwordInput");

    // Replace these values with your true username and password
    var trueUsername = "admin";
    var truePassword = "admin123";

    var enteredUsername = usernameInput.value;
    var enteredPassword = passwordInput.value;

    if (enteredUsername === trueUsername && enteredPassword === truePassword) {
       
      
      window.location.href = "./SPSOMain.html";
  } 
  else if(enteredUsername == '' && enteredPassword === '') {
    alert("Xin hãy nhập tên đăng nhập và mật khẩu")
      return;
  } 
    else {
       
      alert("Xác minh không thành công. Vui lòng nhập lại tên đăng nhập hoặc mật khẩu.");
      return;
    }
  }

  var usernameInput = document.getElementById("usernameInput");
var passwordInput = document.getElementById("passwordInput");

if (usernameInput) {
  usernameInput.addEventListener("keydown", handleEnter);
}

if (passwordInput) {
  passwordInput.addEventListener("keydown", handleEnter);
}

function handleEnter(e) {
  if (e.keyCode == 13) {
    authenticateUser();
  }
}
});
 


