//ejecutar si hay una respuesta o un rechazo en una promesa
const helloPromise = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => resolve('Promesa resuelta'), 3000);
		} else {
			reject('No se cumple la promesa');
		}
	});
};

helloPromise()
	.then((respond) => console.log(respond))
	.catch((error) => console.log(error))
	.finally(() => console.log('Finalizo la promesa'));
//ejecutarlo siempre
