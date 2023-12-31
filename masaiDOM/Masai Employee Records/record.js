// fill in javascript code here
let employee_name = document.getElementById("name");
let employee_id = document.getElementById("employeeID");
let department = document.getElementById("department");
let experience = document.getElementById("exp");
let email = document.getElementById("email");
let mobile = document.getElementById("mbl");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
All_data = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  data = {};
  data.name = employee_name.value;
  data.employeeid = employee_id.value;
  data.department = department.value;
  data.experience = experience.value;
  data.email = email.value;
  data.mobile = mobile.value;

  All_data.push(data);
  console.log(All_data);
  tbody.innerHTML = null;
  All_data.map((ele) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td"); // Add this line
    let td8 = document.createElement("td"); // Add this line

    td1.innerText = ele.name;
    td2.innerText = ele.employeeid;
    td3.innerText = ele.department;
    td4.innerText = ele.experience;
    td5.innerText = ele.email;
    td6.innerText = ele.mobile;

    // Correct the variable name to ele.experience
    if (ele.experience > 5) {
      td7.innerText = "Senior";
    } else if (ele.experience >= 2 && ele.experience <= 5) {
      td7.innerText = "Junior";
    } else if (ele.experience <= 1) {
      td7.innerText = "Fresher";
    }
    td8.innerHTML =
      '<button onclick="Click(this)" style="background-color: red; border: 0px; width: 100%; height: 35px; padding: 0px;">Delete</button>';

    td8.classList.add("delete-button-cell");

    row.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(row);
  });
});

function Click(button) {
  // Find the parent row and remove it
  const row = button.closest("tr");
  row.remove();
}
