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

<!-- A VER SI PRUEBAN ESTE CODIGO---------------------------------XDDD
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const marked = require('marked');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Ruta principal del servidor
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Ruta para obtener la lista de archivos Markdown disponibles
app.get('/files', (req, res) => {
  fs.readdir(__dirname + '/markdown', (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Error al leer los archivos Markdown' });
    } else {
      res.json({ files });
    }
  });
});

// Ruta para obtener el contenido HTML de un archivo Markdown
app.get('/files/:filename/html', (req, res) => {
  const { filename } = req.params;
  const filePath = __dirname + '/markdown/' + filename;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error al leer el archivo Markdown' });
    } else {
      const htmlContent = marked(data);
      res.json({ htmlContent });
    }
  });
});

// Ruta para crear un nuevo archivo Markdown
app.post('/files', (req, res) => {
  const { filename, content } = req.body;
  const filePath = __dirname + '/markdown/' + filename;

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al crear el archivo Markdown' });
    } else {
      res.json({ message: 'Archivo Markdown creado exitosamente' });
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
-->
