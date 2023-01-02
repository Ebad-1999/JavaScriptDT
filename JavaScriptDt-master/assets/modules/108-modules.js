import { showAlert, showConfirm } from "./messages";

document.getElementById("btn1").addEventListener("click", ()=>{
    showAlert("This is an alert function");
})

document.getElementById("btn1").addEventListener("click", ()=>{
    showConfirm("This is an confirm function");
})