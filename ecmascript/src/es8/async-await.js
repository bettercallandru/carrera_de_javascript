const helloWorld = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => resolve('Hello World'), 3000);
		} else {
			reject(new Error('Test Error'));
		}
	});
};

//identificar qeu funciones se van a comportar de forma distinta
//ser mas claros al construir funciones asincronas

//no se tiene que pelear tanto con el asincronismo

const helloAsync = async () => {
	//espere hasta que se resuelva la promesa
	console.log(await helloWorld());
};

helloAsync();

//la forma correcta de manejar peticiones o tareas asincronas con async
const anotherFunction = async () => {
	try {
		console.log(await helloWorld());
	} catch (error) {
		console.log(error);
	}
};
