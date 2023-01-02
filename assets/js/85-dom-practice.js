import { students } from "../data/students.js";


const tblStudents = document.querySelector("#tblStudents tbody")

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

/* Events */


const loadData = ()=>{
    let html = "";
    students.forEach((student, index)=>{
        html += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            
          </tr>
        `
    })
    
    tblStudents.innerHTML = html;
}
loadData();


