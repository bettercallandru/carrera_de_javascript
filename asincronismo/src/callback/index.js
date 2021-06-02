//pruebas de callbacks
function suma (num1, num2) {
    return num1 + num2
}

function calc (num1, num2, callback) {
    return callback(num1, num2)
}

// console.log(calc(2,4,suma))

//imprimir una fecha utilizando callbacks
function date(callback) {
    setTimeout(() => {
        let date = new Date()
        callback(date)
    }, 3000);
}

function printDate(datenow) {
    console.log(datenow)
}

date(printDate)