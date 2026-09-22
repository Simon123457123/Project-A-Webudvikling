
const visHint = document.getElementById("hintText")
const skriveFeltet = document.getElementById("skrivefelt")
const tælGæt = document.getElementById("gætTæller");
const AntalGæt = document.getElementById("antalAfGæt");
const startSpil = document.getElementById("nytSpil");
const skrivHint = document.getElementById("hintKnap")
const tjekBy = document.getElementById("sendSvar");

const byer = [
  { byNavn: "Nakskov", indbyggertal: "12000", førsteBogstav: "N" },
  { byNavn: "Maribo", indbyggertal: "5800", førsteBogstav: "M" },
  { byNavn: "Sakskøbing", indbyggertal: "4500", førsteBogstav: "S" }]

const by = []
let tæller = 1;

function By(skriveFeltet) {
  this.skriveFeltet = skriveFeltet;
  this.toString = function () {
    return `${this.skriveFeltet} `;
  }
}

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


startSpil.addEventListener("click", () => {
  currentCity = getRandomItem(byer)
  console.log(currentCity.byNavn)
  // if (currentCity.byNavn === skriveFeltet.value) {
  //   alert("Du har gættet rigtigt")
  //   console.log()
  // } else {
  //   alert("Forkert")
  // }
});

skrivHint.addEventListener("click", () => {
  console.log();
});

tjekBy.addEventListener("click", () => {
  AntalGæt.textContent = "Du har brugt " + tæller++ + " gæt";
  if (currentCity.byNavn === skriveFeltet.value) {
    alert("Du har gættet rigtigt")
    console.log()
  } else {
    alert("Forkert")
  }
});



/*document.getElementById("sendSvar").addEventListener("click", function () {
  if (!skriveFeltet.value) alert("Du mangler at indtaste en film!");
  else {
    by.push(new By(skriveFeltet.value));
    visListe();
    tælGæt.style.textAlign = "center";

  }
});
*/

/*function visListe() {
  AntalGæt.textContent = "";
  for (let i = 0; i < by.length; ++i) {
    const p = document.createElement("p");
    const span = document.createElement("span");
    p.textContent = by[i].toString();
    p.appendChild(span);
    AntalGæt.appendChild(p);
  }
}
*/

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let len = cars.length;

// let text = "";
// for (let i = 0; i < len; i++) {
//   text += cars[i];
// }
// console.log(cars)

// let leng = byer.length;

// let textt = "";
// for (let i = 0; i < leng; i++) {
//   textt += cars[i];
// }
// console.log(byer)


// let items = Array("test", "test2", "q", "a");
// var item = items[Math.floor(Math.random() * items.length)];
// console.log(item);


