import app from './app';
import http from 'http';

console.log("Loaded DB from .env:", process.env.DB);

// Alloting Port Number
const port = process.env.PORT || 5000;

// Creating the server
const server = http.createServer(app);

// Listening on the required Port.
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
