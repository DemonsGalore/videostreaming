const path = require('path');
const express = require('express');
const socket = require('socket.io');
const https = require('https')
const fs = require('fs');

// express initialization
const app = express();
app.disable('x-powered-by');

// express body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use routes
// app.use('/api/chat', chat);
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/client', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client.html'));
});

app.get('/streamer', (req, res) => {
  res.sendFile(path.resolve(__dirname, './streamer.html'));
});

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}
const server = https.createServer(httpsOptions, app).listen(5000, () => {
  console.log('server running at 5000')
})

// start server
//const PORT = process.env.PORT || 5000;
//const server = app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));

// socket initialization
const io = socket(server);

io.on('connection', (socket) => {
  console.log("connected", socket);
});