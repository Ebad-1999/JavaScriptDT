import { countries } from "../data/counstries.js";
const loadCountries=() => {
    let options  = "";

    for(let country of countries){
        console.log(country);
        options+= `<option>${country.name.common} 
        ${country.capital})</option>`;
    }
      let selectEl = document.getElementById("countries");
      selectEl.innerHTML = options;
} 
loadCountries();   
