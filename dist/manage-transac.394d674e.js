const myButton = document.querySelector("#myButton");
const transactiondateInput = document.querySelector("#t-d");
const transactionobjectInput = document.querySelector("#t-o");
const codeInput = document.querySelector("#code");
const labelInput = document.querySelector("#label");
const debitInput = document.querySelector("#debit");
const creditInput = document.querySelector("#credit");
const tbody = document.getElementById("Liste");
const err = document.querySelector("#error");
let transactiondate1, transactionobject1, code1, label1, debit1, credit1;
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
        addDataToTable(item.transactiondate, item.transactionobject, item.code, item.label, item.debit, item.credit);
    });
}
//Fonction D'ajout de donnes storage dans la table de la page
function addDataToTable(transactiondate, transactionobject, code, label, debit, credit) {
    const row = tbody.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell1 = row.insertCell(3);
    const cell2 = row.insertCell(4);
    const cell3 = row.insertCell(5);
    //isertion des valeurs à un index donné dans les cellules
    cell1.textContent = transactiondate;
    cell2.textContent = transactionobject;
    cell3.textContent = code;
    cell1.textContent = label;
    cell2.textContent = debit;
    cell3.textContent = credit;
}
//écoute sur l'élément input d'ID 'int'
transactiondateInput.addEventListener('change', (e)=>{
    code1 = e.target.value;
    console.log(transactiondate1);
});
transactionobjectInput.addEventListener('change', (f)=>{
    label1 = f.target.value;
    console.log(transactionobject1);
});
codeInput.addEventListener('change', (e)=>{
    classe = e.target.value;
    console.log(code1);
});
labelInput.addEventListener('change', (e)=>{
    code1 = e.target.value;
    console.log(label1);
});
debitInput.addEventListener('change', (f)=>{
    label1 = f.target.value;
    console.log(debit1);
});
creditInput.addEventListener('change', (e)=>{
    classe = e.target.value;
    console.log(credit1);
});
myButton.addEventListener('click', function() {
    if (transactiondateInput.value && transactionobjectInput.value && codeInput.value && labelInput.value && debitInput.value && creditInput.value) {
        addDataToTable();
        LIST.push({
            transactiondate: transactiondate1,
            transactionobject: transactionobject1,
            code: code1,
            label: label1,
            debit: debit1,
            credit: credit1
        });
        localStorage.setItem('listeCompte', JSON.stringify(LIST));
        id++;
    } else err.textContent = "Veuiller remplir tous les champs";
    //réinitialisation des valeurs pour que le champ required déclaré au niveau
    //de notre html ne se retrouve pas avec une valeur, créant ainsi un probléme
    //lors de l'affichage.
    transactiondateInput.value = "";
    transactionobjectInput.value = "";
    codeInput.value = "";
    labelInput.value = "";
    debitInput.value = "";
    creditInput.value = "";
});

//# sourceMappingURL=manage-transac.394d674e.js.map
