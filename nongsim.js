const character=document.querySelector('.character')

character.addEventListener('mouseover', function(){
  character.classList.add('over')
})

character.addEventListener('mouseleave', function(){
  character.classList.remove('over')
})

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


// var mySwiper=new Swiper('.swiper-container',{
//   direction: 'vertical',
//   loop: true,

//   navigation:{
//     nextEl:'.swiper-button-next',
//     prevEl:'.swiper-button-prev',
//   }
// })

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,  
  slidesPerGroup: 1,
  spaceBetween: 20,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: true, // false-스와이프 후 자동 재생
  },
  loopAdditionalSlides: 1,

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