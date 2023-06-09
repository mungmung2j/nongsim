//캐릭터

const character=document.querySelector('.character')

character.addEventListener('mouseover', function(){
  character.classList.add('over')
})

character.addEventListener('mouseleave', function(){
  character.classList.remove('over')
})


//상품 테두리

const border=document.querySelectorAll('.production')
// ['.production1', '.production2']
//const a = [1,2,3,4]

for (let i = 0; i < border.length; i++) {
  border[i].addEventListener('mouseover', function(){
    border[i].classList.add('over')
  })
}

for (let i=0; i<border.length; i++){
  border[i].addEventListener('mouseleave', function(){
    border[i].classList.remove('over')
  })
}


//스와이퍼

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,  
  slidesPerGroup: 1,
  
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: true, // false-스와이프 후 자동 재생
  },
  

  // If we need pagination
  pagination: {
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    
  },

  
});

const secondSwiper = new Swiper('.secondSwiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,  
  slidesPerGroup: 1,
  
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: true, // false-스와이프 후 자동 재생
  },
  

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    
  },

});



//팝업창
const popup_close=document.querySelector('.x_button')
const popup=document.querySelector('.popup')
const popup_back=document.querySelector('.popup_background')

popup_close.addEventListener('click', function(){
  popup.classList.add('click');
  popup_back.classList.add('click');
})