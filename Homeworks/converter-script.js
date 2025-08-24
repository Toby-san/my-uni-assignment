function convertLength() {
  var meters = document.getElementById("meterInput").value;
  var resultDiv = document.getElementById("resultArea");

  if (meters === "") {
    resultDiv.innerHTML = "❗ Please enter a number!";
    resultDiv.classList.add("show");
    return;
  }

  var feet = meters * 3.28084;
  resultDiv.innerHTML = `<i class="fas fa-check-circle" style="color:green;"></i> ${feet.toFixed(2)} feet`;

  resultDiv.classList.add("show");
}
