const beforeDiv = document.getElementById("before");
const afterDiv = document.getElementById("after");
const button = document.getElementById("buttf");

button.onclick = function () {
    beforeDiv.style.display = "none";
    afterDiv.style.display = "block";
  };
  
const navBar = document.getElementById("nav");
var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "flex";
  }
  lastScrollTop = st;
});
