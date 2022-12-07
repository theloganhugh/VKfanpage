const beforeDiv = document.getElementById("before");
const afterDiv = document.getElementById("after");
const button = document.getElementById("buttf");
const bowlnav = document.getElementById("bowlid");
const batnav = document.getElementById("batid");
const capnav = document.getElementById("capid");
const bat = document.getElementById("bat");
const bowl = document.getElementById("bowl");
const cap = document.getElementById("cap");
button.onclick = function () {
    beforeDiv.style.display = "none";
    afterDiv.style.display = "block";
  };
  
  batnav.onclick = function () {
    bowl.style.display = "none";
    bat.style.display = "block";
    cap.style.display="none";
  };
  bowlnav.onclick = function () {
    bowl.style.display = "block";
    bat.style.display = "none";
    cap.style.display="none";
  };
  capnav.onclick = function () {
    bowl.style.display = "none";
    bat.style.display = "none";
    cap.style.display="block";
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
  