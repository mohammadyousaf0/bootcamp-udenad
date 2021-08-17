// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst

document.addEventListener("DOMContentLoaded", () => {
  /* document.getElementById("text-count").innerHTML = "(5)"; */
  let number = 5;
  let plusButton = document.querySelector("#btn-count-increase");
  let minusButton = document.querySelector("#btn-count-decrease");
  let textCountElement = document.querySelector("#text-count");

  function updateNumber() {
    textCountElement.textContent = number;
  }

  updateNumber();

  plusButton.addEventListener("click", () => {
    if (number < 10) {
      number++;
      updateNumber();
    }
  });

  minusButton.addEventListener("click", () => {
    if (number > 0) {
      number--;
      updateNumber();
    }
  });
}); // Afslutter: DOMContentLoaded
