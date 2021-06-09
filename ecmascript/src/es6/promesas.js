/*Ya no mas callback hell
Prometer que algo va a suceder cuando se resuelva la promesa*/

const helloPromise = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('Te cumplimos');
		} else {
			reject('Lo sentimos, te rechazamos');
		}
	});
};

helloPromise()
	.then((response) => console.log(response))
	.catch((error) => console.log(error));
