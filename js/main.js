let distanceText = document.getElementById("distance");
let mainImg = document.getElementById("mainimg");
let count = 0;
let isflying = false;
let flycount = 0;


count = localStorage.getItem("count");

distanceText.textContent = "Distance: " + localStorage.getItem("count");

if(isflying == true) {
  mainImg.setAttribute("src", "/images/rocket1.png");
  flycount++;
}

if(flycount >= 10)
{
  isflying = false;
  flycount = 0;
}

if(isflying == false) {
  mainImg.setAttribute("src", "/images/rocket1_off.png");
}

function fly() {
  isflying = true;

  

  count++;
  
  localStorage.setItem("count", count);

  distanceText.textContent = "Distance: " + localStorage.getItem("count");

  
  
}
