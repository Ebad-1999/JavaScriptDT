import { seachShows } from “../modules/111-api.js”;
document.getElementById(“search”).addEventListener(“input”, (e)=>{
    const query = e.target.value;
    seachShows(query, (shows)=>{
        console.log(shows[0])
    })
})