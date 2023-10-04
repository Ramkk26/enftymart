const darkMOdetoggle = document.getElementById("dark-mode-toggle");
const logo=document.querySelector('.logo-img')
const moon=document.querySelector(".bi-moon")
// const Navbar = document.querySelector(".navbar");
const toggleSwitchEl = document.querySelector("#dark-mode-toggle");

console.log(toggleSwitchEl);
// document.body.classList.add("darkmode");
toggleSwitchEl.onclick=function(){
  if(document.body.classList.contains("darkmode")){
  document.body.classList.remove("darkmode");
  logo.src="images/em logo bright.png" 
}else{
  document.body.classList.add("darkmode");
  logo.src="images/em dark.png";
}
moon.classList.toggle("bi-sun");
};
// function switchTheme(){

// if(document.contains("darkmode")){
//   document.documentElement.setAttribute("darkmode");
//   logo.src="images/em dark.png";

// }else{
//   document.documentElement.setAttribute("lightmode");
//   logo.src="images/em logo bright.png" 

// }
// // moon.classList.toggle("bi-sun");

// }

 
//   toggleSwitchEl.addEventListener("click",switchTheme);
  
$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
      $(".navbar").addClass("active");
  }
  else {
      $(".navbar").removeClass("active");
  }
});

// $(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 100) {
//       $("").css("box-shadow", "0 1px 3px 2px rgba(28,43,70,.08)");
   
//     } else {
//       $(".navbar").css("background", "0 1px 3px 2px black");
//     }
//   });
// });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});