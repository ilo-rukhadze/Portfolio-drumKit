let buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML)

  });
}

document.addEventListener("keydown", function(event){
  let key = event.key;
  makeSound(key);
  makeAnimation(key);

})

function makeSound(key) {
  switch (key) {
    case "d":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break
    case "j":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break
    case "k":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break
    case "l":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break
    case "w":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break
    case "a":
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break
    case "s":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break
  }
}


function makeAnimation(key) {
  let element = document.querySelector("." + key);
  element.classList.add("pressed");

  setTimeout(function(){
    element.classList.remove("pressed")
  }, 100)
}