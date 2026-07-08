const words = [
  "Aspiring Data Analyst",
  "Statistics Student",
  "Microsoft Excel Expert",
  "Future Data Scientist"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  if (!typing) return;

  const currentWord = words[wordIndex];

  if (!deleting) {
    typing.textContent = currentWord.substring(0, charIndex++);
  } else {
    typing.textContent = currentWord.substring(0, charIndex--);
  }

  let speed = deleting ? 70 : 120;

  if (!deleting && charIndex > currentWord.length) {
    deleting = true;
    speed = 1500;
  }

  if (deleting && charIndex < 0) {
    deleting = false;
    charIndex = 0;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeBtn.textContent = "☀️";
    } else {
      themeBtn.textContent = "🌙";
    }

  });

}

const form = document.querySelector("form");

if (form) {

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

  });

}
