
const visHint = document.getElementById("hintText")
const skriveFeltet = document.getElementById("skrivefelt")
const tælGæt = document.getElementById("gætTæller");
const AntalGæt = document.getElementById("antalAfGæt");

const byer = [
  { byNavn: "Nakskov", indbyggertal: "12.000", førsteBogstav: "N" },
  { byNavn: "Maribo", indbyggertal: "5.800", førsteBogstav: "M" },
  { byNavn: "Sakskøbing", indbyggertal: "4.500", førsteBogstav: "S" }]


/*  document.getElementById("hintKnap").addEventListener("click", function () {
 let byerTest = byer.map(by => by.byNavn).join(", ")
 console.log(byerTest);
});
*/

const by = []
let tæller = 1;
function By(skriveFeltet) {
  this.skriveFeltet = skriveFeltet;
  this.toString = function () {
    return `${this.skriveFeltet} `;
  }
}

function visListe() {
  AntalGæt.textContent = "";
  for (let i = 0; i < by.length; ++i) {
    const p = document.createElement("p");
    const span = document.createElement("span");
    p.textContent = by[i].toString();
    p.appendChild(span);
    AntalGæt.appendChild(p);

  }
}

document.getElementById("sendSvar").addEventListener("click", function () {
  if (!skriveFeltet.value) alert("Du mangler at indtaste en film!");
  else {
    by.push(new By(skriveFeltet.value));
    visListe();
    tælGæt.textContent = "Dine antal gæt er " + tæller++;
  }
});