// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

const hilsen = "hej med dig";

function hils() {
	console.log(hilsen);
}

hils();

}); // Afslutter: DOMContentLoaded
