document.addEventListener("DOMContentLoaded", function () {
  var addButton = document.getElementById("addButton");
  var enableButton = document.getElementById("enableButton");
  var disableButton = document.getElementById("disableButton");
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

    alert("Đã thêm máy in!")

    // Clear input fields
    id.value = "";
    manuName.value = "";
    model.value = "";
    location.value = "";
    name.value = "";
    });
  }
  if(enableButton) {
    enableButton.addEventListener("click", function() {
       
      alert("Bật máy in!");
      var printerStatus = document.querySelector(".printer1");
      var availabilityLabel = document.querySelector(".available");
      if (printerStatus && availabilityLabel) {
        printerStatus.textContent = "Available";
        availabilityLabel.classList.add("available");
        availabilityLabel.classList.remove("notavailable");
      }
    });
  }
  if(disableButton) {
    disableButton.addEventListener("click", function() {
       
      alert("Tắt máy in!");
      var printerStatus = document.querySelector(".printer1");
      var availabilityLabel = document.querySelector(".notavailable");
      if (printerStatus && availabilityLabel) {
        printerStatus.textContent = "Not vailable";
        availabilityLabel.classList.add("notavailable");
        availabilityLabel.classList.remove("available");
      }
    });
  }
});
