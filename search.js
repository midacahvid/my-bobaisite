

const items = [
  {
    id: 1,
    title: 'muscles of the head',
    imglogo: './images/buk-logo.jpeg',
    disimg: './images/download.jpeg',
    school: 'Bayero University Kano',
    docstype: 'power point',
    downno: '3000 downloads',
    img1: './images/star-7207.png',
    img2: './images/star-7207.png',
    img3: './images/star-7207.png',
    img4: './images/star-7207.png',
    img5: './images/star-7207.png',
    downdocs: './images/Child Marriage.pdf',
  },
  {
    id: 1,
    title: 'Nerves of the head',
    imglogo: './images/buk-logo.jpeg',
    disimg: './images/download.jpeg',
    school: 'Bayero University Kano',
    docstype: 'power point',
    downno: '3000 downloads',
    img1: './images/star-7207.png',
    img2: './images/star-7207.png',
    img3: './images/star-7207.png',
    img4: './images/star-7207.png',
    img5: './images/star-7207.png',
    downdocs: './images/Child Marriage.pdf',
  },
  {
    id: 1,
    title: 'Vein of the head',
    imglogo: './images/buk-logo.jpeg',
    disimg: './images/download.jpeg',
    school: 'Bayero University Kano',
    docstype: 'power point',
    downno: '3000 downloads',
    img1: './images/star-7207.png',
    img2: './images/star-7207.png',
    img3: './images/star-7207.png',
    img4: './images/star-7207.png',
    img5: './images/star-7207.png',
    downdocs: './images/Child Marriage.pdf',
  },
  {
    id: 1,
    title: 'Arteries of the head',
    imglogo: './images/buk-logo.jpeg',
    disimg: './images/download.jpeg',
    school: 'Bayero University Kano',
    docstype: 'power point',
    downno: '3000 downloads',
    img1: './images/star-7207.png',
    img2: './images/star-7207.png',
    img3: './images/star-7207.png',
    img4: './images/star-7207.png',
    img5: './images/star-7207.png',
    downdocs: './images/Child Marriage.pdf',
  },
  {
    id: 1,
    title: 'Skull bones',
    imglogo: './images/buk-logo.jpeg',
    disimg: './images/download.jpeg',
    school: 'Bayero University Kano',
    docstype: 'power point',
    downno: '3000 downloads',
    img1: './images/star-7207.png',
    img2: './images/star-7207.png',
    img3: './images/star-7207.png',
    img4: './images/star-7207.png',
    img5: './images/star-7207.png',
    downdocs: './images/Child Marriage.pdf',
  },
];

const sectionCenter = document.querySelector('.slide-container-1');
const result = document.querySelector('.no-result');
const input = document.querySelector('#my-input');
const btn  = document.querySelector('.search-btn');

btn.addEventListener('click', function(){
  const filter = input.value.toLowerCase();
  const heading = items.filter(function(me){
    const headType = me.title;
    const titleValue = headType.valueOf();
    let filterPosition = titleValue.toLowerCase().indexOf(filter) > -1;
    if(filterPosition){
      return me;
    } 
  });
  const resultNo = heading.length;
  if(filter === ""){
    result.textContent = 'You have not enter anthing';
  }else{
    displayItems(heading);
  result.textContent = `showing ${resultNo} total results for "${filter}"`
  }
});









function displayItems(docs){
  let downItems = docs.map(function(item){
    return `  <div class="slide-container">
    <div class="col-1">
      <div class="log-1">
        <img src="${item.imglogo}" alt="">
        <p>${item.school}</p>
      </div>
      <h3>${item.title}</h3>
      <p class="para">${item.docstype}</p>
      <img class="star-rate" src="${item.img1}" alt="">
      <img class="star-rate" src="${item.img2}" alt="">
      <img class="star-rate" src="${item.img3}" alt="">
      <img class="star-rate" src="${item.img4}" alt="">
      <img class="star-rate" src="${item.img5}" alt="">
      <p class="download-para">${item.downno}</p>
      <button class="down-btn"><a href="${item.downdocs}" download>Download</a></button>
    </div>
    <div class="docs-img">
      <img src="${item.disimg}" alt="">
    </div>
  </div>
`;
  });
  downItems = downItems.join("");
  sectionCenter.innerHTML = downItems;
  
};



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





const btn1 = document.querySelector('.menu-btn');
const navToggle = document.querySelector('.side-container');

btn1.addEventListener('click', function(){
   // let hasClass = navToggle.classList.contains('show-links');
   // // console.log(hasClass);
   // if(hasClass){
   //    navToggle.classList.remove('show-links');
   // }else{
   //    navToggle.classList.add('show-links');
   // }
   navToggle.classList.toggle('show-links');
});



// select items

const selectBtn = document.querySelector('.select-btn');
const wrap = document.querySelector('.wrap');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const topic = document.querySelector('.topic')
const one1 = document.querySelector('#one1');
const two2 = document.querySelector('#two2');
const three3 = document.querySelector('#three3');
const four4 = document.querySelector('#four4');
const five5 = document.querySelector('#five5');
const six6 = document.querySelector('#six6');
const overall = document.querySelector('.overall-container')

selectBtn.addEventListener('click', function(){
    wrap.classList.toggle('wrap');
    topic.textContent = 'select topic';
    
})
one.addEventListener('click', function(){
    wrap.classList.toggle('wrap');
    topic.textContent = one1.textContent;
    overall.classList.toggle('overall-container')
    displayItems(items);
    result.textContent = `showing ${items.length} total results for "lower limb"`
})
two.addEventListener('click', function(){
    wrap.classList.toggle('wrap');
    topic.textContent = two2.textContent;

})
three.addEventListener('click', function(){
    wrap.classList.toggle('wrap');
    topic.textContent = three3.textContent;

})
four.addEventListener('click', function(){
    wrap.classList.toggle('wrap');
    topic.textContent = four4.textContent;

})
five.addEventListener('click', function(){
    wrap.classList.toggle('wrap');
    topic.textContent = five5.textContent;

})
six.addEventListener('click', function(){
    wrap.classList.toggle('wrap');
    topic.textContent = six6.textContent;
})




