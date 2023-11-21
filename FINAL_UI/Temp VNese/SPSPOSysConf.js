document.addEventListener("DOMContentLoaded", function () {
    var confirmButton = document.getElementById("confirmButton");
    
    if (confirmButton) {
     var fileType = document.getElementById("fileType");
     var pageNumber= document.getElementById("pageNumber");
     var date = document.getElementById("date");
      confirmButton.addEventListener("click", function () {
    var pageNumberValue = parseInt(pageNumber.value);
    if (isNaN(pageNumberValue) || pageNumberValue <= 0) {
    alert("Làm ơn hãy nhập giá trị số nguyên.");
          return;  
        }   
         

      alert("Chỉnh xong!")
  
       
      fileType.value = "";
      pageNumber.value = "";
      date.value = "";
      });
    }
     
  });
