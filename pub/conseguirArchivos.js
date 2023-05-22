const url = 'http://localhost:3000/archivos';
http = fetch(url);
http
  .then((response) => response.json())
  .then((data) => {
    let nombres = data.archivos;
    let htmlLista = '';
    nombres.forEach((nombre) => {
      htmlLista += `<li class="item">${nombre}</li>`;
    });
    document.querySelector('.lista').innerHTML = htmlLista;

    let items = document.querySelectorAll('.item');

    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        let urlPersonalizada = `http://localhost:3000/html?nombre=${e.target.innerHTML}`;
        console.log(urlPersonalizada);
        let peticion = fetch(urlPersonalizada);
        peticion
          .then((response) => response.json())
          .then((data) => console.log(data.estado));
      });
    });
  });
