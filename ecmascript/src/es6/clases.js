//clases en javascript
class calculator {
	constructor() {
		this.numA = 0;
		this.numB = 0;
		this.respond = 0;
	}

	sum(valueA, valueB) {
		this.numA = valueA;
		this.numB = valueB;
		return (this.respond = this.numA + this.numB);
	}
}

//importar y exportar modulos
const calc = new calculator();
console.log(calc.sum(5, 5));

//import hello from './module';

//hello();
const hello = require('./module');
hello();
