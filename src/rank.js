const nameItem = document.querySelector('#name')
const cityItem = document.querySelector('#city')
const salaryItem = document.querySelector('#salary')
const addBTN = document.querySelector('#addBTN')
const viewBTN = document.querySelector('#viewBTN')
const delBTN = document.querySelector('#delBTN')
const empTBL = document.querySelector('#empTBL')
const url2 = 'http://localhost:3000/employees/'
const server = 'http://localhost:3000/'

addBTN.addEventListener('click', () => {
    addEmployee();
})

var addEmployee = () => {
    let endpoint = 'employees';
    let url = server + endpoint

    let employee = {
        name: nameItem.value,
        city: cityItem.value,
        salary: salaryItem.value
    }

    fetch(url, {
        method: 'post',
        body: JSON.stringify(employee),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then (result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })
}

// delBTN.addEventListener('click', ()=> {
//     console.log('működik')
// })
// fetch (url2, {
//     method: 'delete',
//     id: 11
// })

viewBTN.addEventListener('click', ()=> 
{
    //console.log('működik');
    fetch(url2)
        .then(response => response.json())
        .then (result => {
            console.log(result)
            result.forEach(employee => {
            let tr = document.createElement("tr")
            let tdId = document.createElement("td")
            let tdNev = document.createElement("td")
            let tdTel = document.createElement("td")
            let tdFiz = document.createElement("td")
            tdId.textContent = employee.id
            tdNev.textContent = employee.name
            tdTel.textContent = employee.city
            tdFiz.textContent = employee.salary
            tr.appendChild(tdId)
            tr.appendChild(tdNev)
            tr.appendChild(tdTel)
            tr.appendChild(tdFiz)
            empTBL.appendChild(tr)
            })
        })
.catch(err => 
    {
    console.log(err)
    })
})