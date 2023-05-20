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
