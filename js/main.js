let distanceText = document.getElementById("distance");
let mainImg = document.getElementById("mainimg");
let Body = document.getElementById("body");
let count = 0;


count = localStorage.getItem("count");

distanceText.textContent = "Distance: " + localStorage.getItem("count");



function fly() {
  body.style.background = 'url("/images/bgs/bg.gif")';
  mainImg.setAttribute("src", "/images/rocket1.png");
  
  setInterval(isflying, 2000);

  count++;
  
  localStorage.setItem("count", count);

  distanceText.textContent = "Distance: " + localStorage.getItem("count");

  
  
}

function isflying() {
  body.style.background = 'url("/images/bgs/bg.png")';
  mainImg.setAttribute("src", "/images/rocket1_off.png");
  
}
