const beforeDiv = document.getElementById("before");
const afterDiv = document.getElementById("after");
const button = document.getElementById("buttf");
const wind=document.parentWindow
button.onclick = function () {
    beforeDiv.style.display = "none";
    afterDiv.style.display = "block";
  };
  
const navBar = document.getElementById("nav");
var lastScrollTop = 0;
window.onscroll=function(event){
  var st =window.pageYOffset;
  if (st > lastScrollTop) {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "flex";
  }
  lastScrollTop = st;
};
