let inp_1=document.getElementById('task');

let inp_2=document.getElementById('priority');

let my_form=document.querySelector('form');
let tbody = document.querySelector('tbody');

All_Task = [];
my_form.addEventListener('submit',function(e){
    e.preventDefault();
    let Data={};
    Data.task = inp_1.value;
    Data.priority = inp_2.value;

    All_Task.push(Data);
    console.log(All_Task)
    tbody.innerHTML = null;
    console.log(tbody);
    All_Task.map((ele) => {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        td1.innerText = ele.task;
        td2.innerText = ele.priority;

        // if(td2.innerText == "High"){
        //     td2.style.background-color = 'red';
        // } else if (td2.innerText == "Low"){
        //     td2.style.background-color = 'green';
        // }

        row.append(td1,td2);
        tbody.append(row);


        if(td2.innerText == "High"){
            td2.style.backgroundColor = 'red';
            td1.style.backgroundColor = 'red';
        } else if (td2.innerText == "Low"){
            td2.style.backgroundColor = 'green';
            td1.style.backgroundColor = 'green';
        }




        
    })
})



