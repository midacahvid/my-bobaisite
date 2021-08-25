const imgRep = [
  './images/snake-309143_1280.png',
  './images/stethoscope-3725131_1280.png',
  './images/human-skeleton-163715.jpg',
  './images/covid-19-4933839_1920.jpg',
  './images/book-25153_1280.png',
  './images/lungs-37824_1280.png'
];

const link1 = document.getElementById('link-1');
const link2 = document.getElementById('link-2');
const link3 = document.getElementById('link-3');
const link4 = document.getElementById('link-4');
const link5 = document.getElementById('link-5');
const link6 = document.getElementById('link-6');
const img = document.querySelector('#set-img')

link1.addEventListener('mouseover', function(){
  img.src = imgRep[0];
});
link2.addEventListener('mouseover', function(){
  img.src = imgRep[1];
});
link3.addEventListener('mouseover', function(){
  img.src = imgRep[2];
});
link4.addEventListener('mouseover', function(){
  img.src = imgRep[3];
});
link5.addEventListener('mouseover', function(){
  img.src = imgRep[4];
});
link6.addEventListener('mouseover', function(){
  img.src = imgRep[5];
});


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

 