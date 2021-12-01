let myButton = document.querySelector("#myButton");
let todoInput = document.querySelector("#todo");
let todoList = document.querySelector("#liste");

myButton.addEventListener("click", function add($event) {
  var table = [];
  var table = document.getElementById("ThisTable");

  var row = table.insertRow(-1);
  var Codecell = row.insertCell(0);
  var Labelcell = row.insertCell(1);
  var Classcell = row.insertCell(2);

  Codecell.innerHTML = todoInput.value;
  Labelcell.innerHTML = todoInput.value;
  Classcell.innerHTML = todoInput.value;

  console.log(todoInput.value);
});

function add($event) {
  alert("Pret pour remplir le Tableau ?");
  console.log(JSON.stringify($event, undefined, 3));
}
