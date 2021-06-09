//segun el algoritmo devuelven un valor

/*devuelve un valor y cuando sea ejecutado de nuevo el 
recordara en que parte del algoritmo se quedo*/
function* helloWorld() {
	if (true) {
		yield 'hello';
	}
	if (true) {
		yield 'world';
	}
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
