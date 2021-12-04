
let myButton = document.querySelector("#myButton");
let Code = document.querySelector("#code");
let Label = document.querySelector("#label");
let Class = document.querySelector("#select");
let todoList = document.querySelector("#liste");

myButton.addEventListener("click", function add($event) {
  
  var table = [];
  var table = document.getElementById("ThisTable");

  var row = table.insertRow(-1);
  var Codecell = row.insertCell(0);
  var Labelcell = row.insertCell(1);
  var Classcell = row.insertCell(2);

  Codecell.innerHTML = Code.value;
  Labelcell.innerHTML = Label.value;
  Classcell.innerHTML = Class.value;
  
  console.log(Code.value);
  console.log(Label.value);
  console.log(Class.value);
});

function add($event) {
  alert("Pret pour remplir le Tableau ?");
  console.log(JSON.stringify($event, undefined, 3));
}

// function maFonction() {
//   var saisie = document.querySelector("#code").value;
//   var saisie = document.querySelector("#label").value;
//   var saisie = document.querySelector("#class").value;

//   console.log(saisie);
// }

// document.querySelector("#button").addEventListener("click", maFonction);