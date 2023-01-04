function init() {
// * Click Event *

  // Elements
  const buttons = document.getElementsByClassName('sound-btn')
  const spanText = document.getElementById('button-color')


  // Execution
  function handleButtonClick(event){
    console.log(event.target.value)
    playAudio(`./sounds/${event.target.value}.wav`)
    // event.target.classList.click('button-color')
    // spanText.style = spanText.style.color === 'red' ? 'white' : 'red'
  }

  // Event
  console.log(buttons.length)
  // buttons.map((button) => { 
  //   console.log(button)
  //   button.addEventListener('click', handleButtonClick)
  // })
  for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', (event) => handleButtonClick(event))
  }


  // .addEventListener('click', handleButtonClick)


  // // * Hover Event *

  // // Elements
  // const gridItem = document.querySelectorAll('#grid-item')
  // // const sounds = document.querySelector('#sound-btn')
  
  // // Execution
  // function handleMultiEnter(event){
  //   console.log('Entered', event.target)
  //   event.target.setAttribute('src', './images/head.gif')
  //   // console.log('Hell ->', handleMulti)
  // }

  // function handleMultiLeave(event){
  //   console.log('Left', event.target)
  //   event.target.src 
  //   // console.log('Hell ->', handleMulti)
  // }

  // // Event
  // gridItem.addEventListener('mouseover', handleMultiEnter)
  // gridItem.addEventListener('mouseout', handleMultiLeave)



  // Event
  // gridItem.forEach(btn => btn.addEventListener('click', handleMulti))
  // console.log('clicked ->', handleMulti)


  // * Audio

  function playAudio(source){

  
    const audio = document.getElementById('audio')
    audio.src = source
    audio.play()
  }


}

window.addEventListener('DOMContentLoaded', init)