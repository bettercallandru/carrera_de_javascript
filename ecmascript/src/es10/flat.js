//aplanar los datos de un arreglo

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

//indicar en que nivel quiero aplanar este arreglo
console.log(array.flat(2));

let array = [1, 2, 3, 4, 5, 6];
/*retornar un arreglo que antes era una amtriz y ahora es
solo un vector*/
console.log(array.flatMap((item) => [item, item * 2]));

/*Se puede usar infinity si no sabemos la cantidad de niveles
 que tiene la matriz */

const edades = [8, 10, 9, 20, [13, 18, 12, [20, 9, 25, 9]]];
console.log(edades.flat().flat());

// [8, 10, 9, 20, 13, 18, 12, 20, 9, 25, 9]

const edades = [8, 10, 9, 20, [13, 18, 12, [20, 9, 25, 9]]];
edades.flat(Infinity);

// [8, 10, 9, 20, 13, 18, 12, 20, 9, 25, 9]
