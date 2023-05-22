const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('pub'));

app.listen(3000, () => {
  console.log('Escuchando en: http://localhost:3000');
});

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

const directorio = path.resolve(__dirname, 'markdowns');

app.get('/archivos', (request, response) => {
  let archivosJSON;
  fs.readdir(directorio, (error, archivos) => {
    console.log(archivos);
    archivosJSON = {
      archivos: archivos,
    };

    response.json(archivosJSON);
    console.log(typeof archivosJSON);
  });
});

//Este evento recibira el nombre de un archivo y debera devolver el contenido del archivo transformado a html a traves de un json
app.get('/html', (request, response) => {
  let nombreArchivo = request.query.nombre;
  console.log(`pidieron: ${nombreArchivo}`);
  //aqui deberia usar en nombre para buscar el archivo y transformarlo
  //y deberia enviar el html y no solo el nombre :v
  response.json({ estado: `efectivamente pediste: ${nombreArchivo}` });
});
