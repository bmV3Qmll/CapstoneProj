document.addEventListener("DOMContentLoaded", function () {
  var addButton = document.getElementById("addButton");
  var enableButton = document.getElementById("enableButton");
  var disableButton = document.getElementById("disableButton");
  var status = document.getElementById("availabilityStatus");
  if (addButton) {
    var id= document.getElementById("idInput");
    var manuName= document.getElementById("manuInput");
    var model= document.getElementById("modelInput");
    var location= document.getElementById("locationInput");
    var name= document.getElementById("nameInput");
    addButton.addEventListener("click", function () {
      // Call a function or add your logic here when the button is clicked
      var newData = {
        "id": id.value,
        "manuName": manuName.value,
        "model": model.value,
        "location": location.value,
        "name": name.value
      };
      if(id.value == "" || manuName.value =="" || model.value == ""|| location.value =="" || name.value =="")
      {
        alert("Vui lòng hoàn thành thao tác!!");
        return;
      }

    alert("Đã thêm máy in!")

    // Clear input fields
    id.value = "";
    manuName.value = "";
    model.value = "";
    location.value = "";
    name.value = "";
    });
  }
  enableButton.addEventListener("click", function () {
    // Enable printer
    availabilityStatus.textContent = "Có sẵn";
  });

  disableButton.addEventListener("click", function () {
    // Disable printer
    availabilityStatus.textContent = "Không sẵn";
  });
});
