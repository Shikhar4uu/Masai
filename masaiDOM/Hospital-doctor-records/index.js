// fill in javascript code here

let Name = document.getElementById("name");
let docID = document.getElementById("docID");
let specialization = document.getElementById("dept");
let exp = document.getElementById("exp");
let email = document.getElementById("email");
let mobile = document.getElementById("mbl");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

All_form = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  data = {};
  data.name = Name.value;
  data.docID = docID.value;
  data.specialization = specialization.value;
  data.exp = exp.value;
  data.email = email.value;
  data.mbl = mobile.value;
  All_form.push(data);

  tbody.innerHTML = null;

  All_form.map((ele) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");

    td1.innerText = ele.name;
    td2.innerText = ele.docID;
    td3.innerText = ele.specialization;
    td4.innerText = ele.exp;
    td5.innerText = ele.email;
    td6.innerText = ele.mbl;
    // Senior, if experience > 5 years
    // Junior, if experience is between 2 and 5 years
    // Fresher, if experience is less than or equal to 1 year
    if (ele.exp > 5) {
      td7.innerText = "Senior";
    } else if (ele.exp >= 2 && ele.exp <= 5) {
      td7.innerText = "Junior";
    } else if (ele.exp <= 1) {
      td7.innerText = "Trainee";
    }
    td8.innerHTML = '<button onclick="Click(this)" style="background-color: red; border: 0px; width: 100%; height: 35px; padding: 0px;">Delete</button>';
    
    td8.classList.add('delete-button-cell');
    
    row.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(row);
});
});
function Click(button) {
    // Find the parent row and remove it
    const row = button.closest('tr');
    row.remove();
}




