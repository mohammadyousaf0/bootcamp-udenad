// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
  let navne = ["ko", "abe", "donkey"];
  let nyNavne = ["monkey", "cow", "pilot"];
  let ulElement = document.querySelector("#liste");

  /*   navne.forEach((navn) => {
	  ulElement.innerHTML += `<li> ${navn} </li>`;
  }); */

  function testArray(array) {
    array.forEach((navn) => {
    ulElement.innerHTML += `<li> ${navn} </li>`;
  });
  }

  testArray(navne);
  testArray(nyNavne);

  
}); // Afslutter: DOMContentLoaded
