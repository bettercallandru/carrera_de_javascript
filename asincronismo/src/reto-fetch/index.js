const fetch = require('node-fetch');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData = (url) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((promise) => resolve(promise.json()))
			.catch((error) => {
				const catchError = new Error(error);
				reject(catchError);
			});
	});
};

fetchData(API)
	.then((response) => {
		console.log(response.info.count);
		return fetchData(`${API}${response.results[0].id}`);
	})
	.then((character) => {
		console.log(character.name);
		return fetchData(character.origin.url);
	})
	.then((data) => console.log(data.dimension))
	.catch((error) => console.error(error));
