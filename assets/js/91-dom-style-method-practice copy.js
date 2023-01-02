import { students } from "../data/students.js";


const tblStudents = document.querySelector("#tblStudents tbody")




const loadData = ()=>{
    let html = "";
    students.forEach((student, index)=>{
        html += `
        <tr >
            <th scope="row">${index+1}</th>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td><button class ="btn btn-danger btnDelete">🗑️</button></td>
            </tr>
        `
    })
    
    tblStudents.innerHTML = html;
}
loadData();

/* Events */

document.getElementById("btnShowLowScores").addEventListener("click", ()=>{

    const lastTd = tblStudents.querySelectorAll("tr td:last-child")
    console.log(lastTd)
    lastTd.forEach((td, index) => {
        if(td.innerHTML<60){
            //td.style.backgroundColor = "red";
            tblStudents.querySelector(`tr:nth-child(${index+1})`).style.backgroundColor ="red";
        }
    })
})

document.querySelectorAll(".btnDelete").forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        e.stopPropagation(); // to avoid the propogation to its parent class
        const name = e.target.closest("tr").querySelector("td").innerHTML;
        confirm(`Are you sure to delete ${name}?`)

    })
})

tblStudents.querySelectorAll("tr").forEach((tr)=>{
 tr.addEventListener("click", (e)=>{
    e.target.closest("tr").classList.toggle("table-info")  
 })
     
})



/* Events */


