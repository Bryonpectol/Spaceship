let distanceText = document.getElementById("distance");
let mainImg = document.getElementById("mainimg");
let count = 0;


count = localStorage.getItem("count");

distanceText.textContent = "Distance: " + localStorage.getItem("count");
function fly() {

  mainImg.setAttribute("src", "/images/rocket1.png");

  count++;
  
  localStorage.setItem("count", count);

  distanceText.textContent = "Distance: " + localStorage.getItem("count");

  mainImg.setAttribute("src", "/images/rocket1_off.png");
  
}
