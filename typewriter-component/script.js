const text = [
  " DEVELOPER.",
  " FOODIE.",
  " CURIOUS BEING.",
  " DREAMER!"
];

let speed = 150;

const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter(){
  if(charIndex < text[textIndex].length){
    textElement.innerHTML += text[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  }else{
    setTimeout(eraseText, 1000);
  };
};

function eraseText(){
  if(textElement.innerHTML.length > 0){
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    setTimeout(eraseText, 100)
  }else{
    textIndex = (textIndex + 1) % text.length;
    charIndex = 0;
    setTimeout(typeWriter, 50);
  }
};

window.onload = typeWriter;