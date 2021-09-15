

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


const myCourse = [
   {
      id: 1,
      img: './images/gettyimages-470346915-612x612.jpg',
      downno: '2600 Downloads',
      title: 'gross anatomy',
      rating: 4.7,
      url: 'lower.html'
   },
   {
      id: 2,
      img: './images/istockphoto-115979770-612x612.jpg',
      downno: '1000 Downloads',
      title: 'physiology',
      rating: 3.7,
   },
   {
      id: 3,
      img: './images/close-photo-hand-blue-glove-260nw-1052884202.webp',
      downno: '2000 Downloads',
      title: 'histology',
      rating: 2.1,
   },
   {
      id: 4,
      img: './images/sperm-egg-cell-natural-fertilization-260nw-1077682163.webp',
      downno: '4500 Downloads',
      title: 'embryology',
      rating: '3.0',
   },
]
const myCourseOne = [
   {
      id: 1,
      img: './images/gettyimages-470346915-612x612.jpg',
      downno: '2600 Downloads',
      title: 'gross anatomy',
      rating: 4.7,
      url: 'lower.html',
   },
   {
      id: 2,
      img: './images/istockphoto-115979770-612x612.jpg',
      downno: '1000 Downloads',
      title: 'physiology',
      rating: 3.7,
      url: 'physiology.html',
   },
   {
      id: 3,
      img: './images/close-photo-hand-blue-glove-260nw-1052884202.webp',
      downno: '2000 Downloads',
      title: 'histology',
      rating: 2.1,
      url: 'histology.html',
   },
   {
      id: 4,
      img: './images/sperm-egg-cell-natural-fertilization-260nw-1077682163.webp',
      downno: '4500 Downloads',
      title: 'embryology',
      rating: '3.0',
      url: 'embryology.html',
   },
]


const section  = document.querySelector('.courses-section');
const sectionOne = document.querySelector('.courses-section-1');

const viewBtn = document.querySelector('.view-btn');
viewBtn.addEventListener('click', function(){
  sectionOne.classList.toggle('display-none');
  let viewText = viewBtn.textContent;
  if(viewText === 'view all'){
     viewBtn.textContent = 'close view';
  }else{
     viewBtn.textContent = 'view all';
  }
});

function displayMyItems(menu){
   let course = menu.map(function(item){
      return `<div class="course-row">
         <div class="inner-div">
         <img src="${item.img}" height="60px" alt="">
         </div>
         <div class="inner-div" id="me">
         <h4><a href="${item.url}">${item.title}</a></h4>
         <p>${item.downno}</p>
         <button class="go-btn">Go to course</button>
         </div>
         <div class="inner-div" id="star">
         <h5>${item.rating}</h5>
         <span>&#9734</span>
         </div>
         </div>`;
   });
   course = course.join("");
   section.innerHTML = course;
};

window.addEventListener('DOMContentLoaded', function(){
   displayMyItems(myCourse);
   
})

function displayMyItemsOne(menu){
   let courseOne = menu.map(function(item){
      return `<div class="course-row">
         <div class="inner-div">
         <img src="${item.img}" height="60px" alt="">
         </div>
         <div class="inner-div" id="me">
         <h4><a href="${item.url}">${item.title}</a></h4>
         <p>${item.downno}</p>
         <button class="go-btn">Go to course</button>
         </div>
         <div class="inner-div" id="star">
         <h5>${item.rating}</h5>
         <span>&#9734</span>
         </div>
         </div>`;
   });
   courseOne = courseOne.join("");
   sectionOne.innerHTML = courseOne;
};

window.addEventListener('DOMContentLoaded', function(){
   displayMyItemsOne(myCourseOne);
   
});

