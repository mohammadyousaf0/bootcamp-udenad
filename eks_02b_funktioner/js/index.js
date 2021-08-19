// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

  function hils(navn) {
    console.log("hej med dig" + " " + navn);
	/* console.log('hej med dig ${navn}'); */
  }

  hils("Test");
  hils("testtte");
  hils("testteeenn");
}); // Afslutter: DOMContentLoaded