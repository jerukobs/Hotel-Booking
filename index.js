

function myfunc() {
   alert("Well done");
} 


window.onscroll = function () {
   console.log("c");
   stickyfunction();
}

// get nav bar
var navbar = document.getElementById("nav_b");

// get offset position of navbar
var sticky = navbar.offsetTop;


function stickyfunction() {
   if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
   } else {
      navbar.classList.remove("sticky");
   }
}


