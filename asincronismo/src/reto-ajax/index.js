const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

fetchData = (url_api) => {
	let xhttp = new XMLHttpRequest();

	return new Promise((resolve, reject) => {
		xhttp.open('GET', url_api, true);
		xhttp.onreadystatechange = (event) => {
			if (xhttp.readyState === 4) {
				if (xhttp.status === 200) {
					resolve(JSON.parse(xhttp.responseText));
				} else {
					const error = new Error(`Error ${url_api}`);
					reject(error);
				}
			}
		};
		xhttp.send();
	});
};

fetchData(API)
	.then((response) => {
		console.log(`Personajes totales: ${response.info.count}`);
		return fetchData(`${API}${response.results[0].id}`);
	})
	.then((character) => {
		console.log(`Nombre del primer personaje: ${character.name}`);
		return fetchData(character.origin.url);
	})
	.then((data) => console.log(data.dimension))
	.catch((error) => console.error(error));
