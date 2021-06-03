const somethingWillHappen = () => {
  //Crear y retornar una instancia del objeto promise
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Se resolvio la promesa');
    } else {
      reject('Lo sentimos');
    }
  });
};

somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Promesa hecha');
      }, 3000);
    } else {
      const error = new Error('Whoops');
      reject(error);
    }
  });
};

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
