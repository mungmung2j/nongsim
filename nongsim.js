const character=document.querySelector('.character')

character.addEventListener('mouseover', function(){
  character.classList.add('over')
})

character.addEventListener('mouseleave', function(){
  character.classList.remove('over')
})