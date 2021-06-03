//primero se instalo una dependencia que me cea un objeto
//npm install xmlhttprequest

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

fetchData = (url_api, callback) => {
  let xhttp = new XMLHttpRequest();
  //metodo https, la url, si va a ser asincrono
  xhttp.open('GET', url_api, true);
  //escuchar cuando se realice ese llamado
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error ${url_api}`);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
};

//un callback
fetchData(API, (error1, data1) => {
  if (error1) return console.error(error1);
  fetchData(`${API}${data1.results[0].id}`, (error2, data2) => {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
