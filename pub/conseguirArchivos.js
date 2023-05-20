const url = 'http://localhost:3000/archivos';
http = fetch(url);
http
  .then((response) => response.json())
  .then((data) => {
    let nombres = data.archivos;
    let htmlLista = '';
    nombres.forEach((nombre) => {
      htmlLista += `<li>${nombre}</li>`;
    });
    document.querySelector('.lista').innerHTML = htmlLista;
  });
