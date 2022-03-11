const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

app.use(express.static('public'));


app.get('/xssinfos/:infos', (req, res) => {
  console.log(req.params.infos);
  res.status(403).send();
});
server.listen(3000, () => console.info(`Listening on port 3000.`));