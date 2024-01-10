// server.js
const http = require('http');
const webpageData = require('./data');

const server = http.createServer((req, res) => {
  // Configurar la respuesta del servidor con un documento HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<!DOCTYPE html>');
  res.write('<html lang="es">');
  res.write('<head>');
  res.write('<meta charset="UTF-8">');
  res.write(`<title>${webpageData.title}</title>`);
  res.write('</head>');
  res.write('<body>');
  res.write(`<h1>${webpageData.title}</h1>`);
  res.write(`<h2>${webpageData.subtitle}</h2>`);
  res.write(`<p>${webpageData.description}</p>`);
  res.write('</body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
