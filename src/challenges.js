// Desafio 1
function compareTrue(value1, value2) {
    if (value1 && value2 === true) {
        return true;
    } else {
        return false;
    }
}

// Desafio 2
function calcArea(base, height) {
    let area = (base * height) / 2;
    return area;
}

// Desafio 3
function splitSentence(string) {
    let separatedWords = string.split(" ")
    return separatedWords;
}

// Desafio 4
function concatName(name) {
    let firstName = name[0];
    let lastName = name[name.length - 1];
    let concatenatedNames = lastName + ', ' + firstName;
    return concatenatedNames;
}

// Desafio 5
function footballPoints(wins, ties) {
    let winPoints = wins * 3;
    let tiePoints = ties * 1;
    let totalPoints = winPoints + tiePoints;
    return totalPoints;
}

// Desafio 6
function highestCount() {
    // seu código aqui
}

// Desafio 7
function catAndMouse() {
    // seu código aqui
}

// Desafio 8
function fizzBuzz() {
    // seu código aqui
}

// Desafio 9
function encode() {
    // seu código aqui
}

function decode() {
    // seu código aqui
}

module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
};