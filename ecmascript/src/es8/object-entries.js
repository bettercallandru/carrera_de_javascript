//obtener las claves y valores de una matriz

const data = {
	frontend: 'Adrian',
	backend: 'Leonardo',
	designer: 'Jesica',
};

//convertir un objeto a una matriz
const entries = Object.entries(data);
console.table(entries);

//como obtener el tamaño o cuantas propiedades hay en un objeto
//antes esto era mas complicado que solo hacer esto
console.log(entries.length);

//obtener los valores de un objeto en array

const data = {
	frontend: 'Adrian',
	backend: 'Leonardo',
	designer: 'Jesica',
};

const values = Object.values(data);
console.log(values);

/*Esto sirve si queremos agregar estructuras de texto o 
plantillas en nuestros diseños frontend, como el principio de un 
menu.
Averiguar mas a fondo para que lo utilizan*/
//añadir una cadena vacia o texto a un string
const string = 'hola';
//al principio
console.log(string.padStart(7, '1. '));
//al final
console.log(string.padEnd(8, ' =>>'));
