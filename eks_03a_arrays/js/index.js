// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
  let navne = ["ko", "abe", "donkey"];
  let ulElement = document.querySelector('#liste');

  navne.forEach((navn) => {
	  ulElement.innerHTML += `<li> ${navn} </li>`;
  });
}); // Afslutter: DOMContentLoaded
