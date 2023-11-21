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
        // Authentication successful, redirect to the main page
        
        window.location.href = "./SPSOMain.html";
    } 
    else if(enteredUsername == '' && enteredPassword === '') {
        return;
    } 
      else {
        // Authentication failed, you can handle this accordingly (show an error message, for example)
        alert("Xác minh không thành công. Vui lòng nhập lại tên đăng nhập hoặc mật khẩu.");
        return;
      }
    }
  });
  
