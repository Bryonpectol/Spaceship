let distanceText = document.getElementById("distance");
let count = 0;

count = localStorage.getItem("count");

distanceText.textContent = "Distance: " + localStorage.getItem("count");
function fly() {

  count += 1;
  
  localStorage.setItem("count", count);

  distanceText.textContent = "Distance: " + localStorage.getItem("count");
  
}
