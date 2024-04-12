const cors = require('cors');

module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Change this to your desired origin(s)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
};