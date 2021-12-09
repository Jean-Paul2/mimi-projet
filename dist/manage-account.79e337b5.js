// let myButton = document.querySelector("#myButton");
// let Code = document.querySelector("#code");
// let Label = document.querySelector("#label");
// let Class = document.querySelector("#class");
// let todoList = document.querySelector("#liste");
// myButton.addEventListener("click", function add($event) {
//   var table = [];
//   var table = document.getElementById("ThisTable");
//   var row = table.insertRow(-1);
//   var Codecell = row.insertCell(0);
//   var Labelcell = row.insertCell(1);
//   var Classcell = row.insertCell(2);
//   Codecell.innerHTML = Code.value;
//   Labelcell.innerHTML = Label.value;
//   Classcell.innerHTML = Class.value;
// });
// function add($event) {
//   alert("Pret pour remplir le Tableau ?");
//   console.log(JSON.stringify($event, undefined, 3));
// }
// // function maFonction() {
// //   var saisie = document.querySelector("#code").value;
// //   var saisie = document.querySelector("#label").value;
// //   var saisie = document.querySelector("#class").value;
// //   console.log(saisie);
// // }
// // document.querySelector("#button").addEventListener("click", maFonction);
const myButton = document.querySelector("#myButton");
const codeInput = document.querySelector("#code");
const labelInput = document.querySelector("#label");
const classeInput = document.querySelector("#classe");
const tbody = document.getElementById("Liste");
const err = document.querySelector("#error");
let code1, label1, classe1;
// Variable de stockage
let LIST = [], id;
let data = localStorage.listeCompte;
//Verifier si le localStorage contient des donnees et
//Chargement des données sur une Table de la page
function getValue() {
    if (data) {
        LIST = JSON.parse(data);
        id = LIST.length;
        tableList(LIST);
    // list ==> [{key:value, key:value, key:value},{}, .....,{}]
    } else {
        LIST = [];
        id = 0;
    }
}
getValue();
function tableList(array) {
    array.forEach(function(item) {
        addDataToTable(item.code, item.label, item.classe);
    });
}
//Fonction D'ajout de donnes storage dans la table de la page
function addDataToTable(code, label, classe) {
    const row = tbody.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    //isertion des valeurs à un index donné dans les cellules
    cell1.textContent = code;
    cell2.textContent = label;
    cell3.textContent = classe;
}
//écoute sur l'élément input d'ID 'int'
codeInput.addEventListener('change', (e)=>{
    code1 = e.target.value;
    console.log(code1);
});
labelInput.addEventListener('change', (f)=>{
    label1 = f.target.value;
    console.log(label1);
});
classeInput.addEventListener('change', (e)=>{
    classe1 = e.target.value;
    console.log(classe1);
});
myButton.addEventListener('click', function() {
    if (codeInput.value && labelInput.value && classeInput.value) {
        addDataToTable();
        LIST.push({
            code: code1,
            label: label1,
            classe: classe1
        });
        localStorage.setItem('listeCompte', JSON.stringify(LIST));
        id++;
    } else err.textContent = "Veuiller remplir tous les champs";
    //réinitialisation des valeurs pour que le champ required déclaré au niveau
    //de notre html ne se retrouve pas avec une valeur, créant ainsi un probléme
    //lors de l'affichage.
    codeInput.value = "";
    labelInput.value = "";
    classeInput.value = "";
});

//# sourceMappingURL=manage-account.79e337b5.js.map
