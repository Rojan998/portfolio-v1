// For the Typing Effect

const designation = ["Engineer", "Software Developer", "Designer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === designation.length) {
    count = 0;
  }
  currentText = designation[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();
