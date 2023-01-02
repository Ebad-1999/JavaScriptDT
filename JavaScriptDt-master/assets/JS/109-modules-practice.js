import { nSortAsc, nSortDesc, sSortAsc, sSortDesc } from "../modules/109-sorting.js"

const stringArr = ["Mustafa", "Ali", "Zeta", "Bill", "Ülker", "Çaglayan"]
const numberArr = [4, 67, 45, 2, -12, 43, 777, 54]
document.getElementById("btn1").addEventListener("click", ()=>{
    const newArr = sSortAsc(stringArr);
    console.log(stringArr)
    console.log(newArr)
})

document.getElementById("btn2").addEventListener("click", ()=>{
    const newArr = sSortDesc(stringArr);
    console.log(stringArr)
    console.log(newArr)
})

document.getElementById("btn3").addEventListener("click", ()=>{
    const newArr = nSortAsc(numberArr);
    console.log(numberArr)
    console.log(newArr)
})

document.getElementById("btn4").addEventListener("click", ()=>{
    const newArr = nSortDesc(numberArr);
    console.log(numberArr)
    console.log(newArr)
})