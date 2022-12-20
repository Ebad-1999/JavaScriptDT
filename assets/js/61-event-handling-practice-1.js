const btnAverage = document.querySelector("#btnAverage");

btnAverage.addEventListener("click", () => {
    const grade1 = document.querySelector("#grade1").value;
    const grade2 = document.querySelector("#grade2").value;

    const average = getAverage(grade1, grade2);
    const letter = convertNumberToLetter(average);

    alert(letter);

});


// Number(x) ->  converts x to a numerical value, empty spaces returned as 0
// parseFloat(x) -> converts x to a decimal value, empty spaces returned as NaN
// parseInt(x) -> converts x to a integer value, empty spaces returned as NaN

const getAverage = (grade1, grade2) => {
    if (isNaN(parseFloat(grade1)) || isNaN(parseFloat(grade2))) return;

    const average = (parseFloat(grade1) + parseFloat(grade2)) / 2;

    return average;
}

const convertNumberToLetter = (num) => {
    if (isNaN(parseFloat(num))) return;
    let letter;

    if (num >= 90 && num <= 100) {
        letter = "A";
    }
    else if (num >= 80 && num < 90) {
        letter = "B";
    }
    else if (num >= 70 && num < 80) {
        letter = "C";
    }
    else if (num >= 50 && num < 70) {
        letter = "D";
    }
    else if (num >= 00 && num < 50) {
        letter = "F";
    }

    return letter;
}


//txtPoint1   txtPoint2