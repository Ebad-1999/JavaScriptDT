const cities = ["New York", "Amsterdam", "London", "Istanbul"];

const btnAll = document.querySelectorAll("button");

for (let i = 0; i < btnAll.length; i++) {
    btnAll[i].addEventListener("click", (e) => {
        console.log(e.target.id);

        switch (e.target.id) {
            case "btnAdd":
                const city = document.querySelector("#addCity").value;
                if (!city || cities.includes(city)) return;
                cities.push(city);
                loadList();
                break;
            case "btnSort":
                cities.sort();
                loadList();
                break;
            case "btnReverse":
                cities.reverse();
                loadList();
                break;
            case "btnRemoveFirst":
                cities.shift();
                loadList();
                break;
            case "btnRemoveLast":
                cities.pop();
                loadList();
                break;
            case "btnRemoveAll":
                cities.splice(0);
                loadList();
                break;
            case "btnMix":
                getRandom();
                loadList();
                break;
            default:
                console.log("There is no event added inside that button");
        }
    })
}


const loadList = () => {
    let html = "";
    for (let i = 0; i < cities.length; i++) {
        html += `<li>${cities[i]}</li>`;
    }
    const ul = document.querySelector("#cityList");
    ul.innerHTML = html;
}

const getRandom = () => {

    const arr = [];

    while (cities.length > 0) {
        const randomIndex = Math.floor(Math.random() * cities.length);

        const city = cities[randomIndex];
        arr.push(city); // two
        cities.splice(randomIndex, 1);
    }

    // for (let i = 0; i < arr.length; i++) {
    //     cities[i] = arr[i];
    // }

    cities.splice(0, 0, ...arr);
}

loadList();