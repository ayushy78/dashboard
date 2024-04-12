const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();

// Then use it before your routes are set up:
server.use(cors());

// Add your routes here

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});