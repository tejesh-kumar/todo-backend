const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 4000;

module.exports = { port };
