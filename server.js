const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = {app};

