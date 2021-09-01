// 1 - Crie uma função usando o operador &&

function compareTrue (x, y) {
    if (x === true && y === true) {
        return true;
    } else if (x === true && y === false || x === false && y === true) {
        return false;        
    }
}