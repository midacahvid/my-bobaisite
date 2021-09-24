const btn = document.querySelector('.menu-btn');
const navToggle = document.querySelector('.side-container');

btn.addEventListener('click', function(){
   // let hasClass = navToggle.classList.contains('show-links');
   // // console.log(hasClass);
   // if(hasClass){
   //    navToggle.classList.remove('show-links');
   // }else{
   //    navToggle.classList.add('show-links');
   // }
   navToggle.classList.toggle('show-links');
});

// animated menu

const menu = document.querySelector('.menu');
menu.addEventListener('click', function(){
   menu.classList.toggle('opened');
   menu.setAttribute('aria-expanded', menu.classList.contains('opened'));
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
   let heightValue = navbar.getBoundingClientRect().height;
   let scrollHeight = window.pageYOffset;
   // console.log(heightValue);
   if(scrollHeight > heightValue){
      navbar.classList.add('fixed-navbar');
   }else{
      navbar.classList.remove('fixed-navbar')
   }
});

// slide show 

const slides = document.getElementsByClassName('slide');
var slideIndex = 0;
var i;
function showSlides(){
   for(i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
   };
   slideIndex++;
   if(slideIndex > slides.length){
      slideIndex = 1;
   };
   slides[slideIndex-1].style.display = "block";
   setTimeout(showSlides, 3000);
};
showSlides();