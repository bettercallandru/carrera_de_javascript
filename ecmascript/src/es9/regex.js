//como obtener de forma mas facil los datos de los regex
//en este ejemplo obtener la informacion de algunas fechas

//estructura de un regex, esta estructura se ve asi
// 2020-09-23
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

//ejecutar un regex (una plantilla)
const data = regexData.exec('2020-09-23');

//para obtener esos datos particulares se hace
const year = data[1];

const month = data[2];

const day = data[3];

console.log(year, month, day);
