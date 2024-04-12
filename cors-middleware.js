const jsonServer = require('json-server')
    
// Import the library:
const cors = require('cors');

const server = jsonServer.create()       
        
// Then use it before your routes are set up:
server.use(cors());