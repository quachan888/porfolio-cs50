let text = document.getElementById("typewriter");
// text = document.querySelector("#Typewriter h2");

const textArray = text.textContent.split("");


let timeLooper;

text.innerHTML = "";


function typewriterEffect() {
  if (textArray.length > 0) {
    text.innerHTML += textArray.shift();
  } else {
    clearTimeout(timeLooper);
  }

  timeLooper = setTimeout(
    "typewriterEffect()",
    Math.floor(Math.random() * (200, 250))
  );
}
typewriterEffect();
