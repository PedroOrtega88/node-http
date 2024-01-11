const http = require('node:http');
const webpageData = require('./data');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<!DOCTYPE html>');
  res.write('<html lang="' + webpageData.language + '">');
  res.write(`<title>${webpageData.title}</title>`);
  res.write(`<h1>${webpageData.title}</h1>`);
  res.write(`<h2>${webpageData.subtitle}</h2>`);
  res.write(`<p>${webpageData.description}</p>`);
  res.write(`<p>Autor: ${webpageData.author}</p>`);
  res.write(`<p>Año: ${webpageData.year}</p>`);
  res.write('<p>Slogan: ' + webpageData.slogan + '</p>');
  res.write('<p>Contacto: ' + webpageData.contactEmail + '</p>');
  res.write('</body>');
  res.write('</html>');
  res.end('<h3>hola mundo</h3>');
});

const PORT = 3000;

server.listen(3000, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
