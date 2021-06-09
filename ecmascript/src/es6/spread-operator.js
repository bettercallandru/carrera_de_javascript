//before desestructuracion y spread operator
let objeto = {
	named: 'Adrian',
	age: 18,
	country: 'COL',
};
/*
console.log(objeto.name, objeto.age, objeto.country)
*/

//after
let { named, age } = objeto;
console.log(named, age);
