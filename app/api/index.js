const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
// Set port (default: 3004). For Heroku, we need to use
// the port set by the environment variable $PORT
const port = process.env.PORT || 3004;

server.use(middlewares);
server.use(router);
server.listen(port);