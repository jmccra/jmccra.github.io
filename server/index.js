require('dotenv').config();

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

//API routes
const messageRoute = require('./routes/messageRoute');

//creating express server
const app = express();
const PORT = process.env.PORT || 5000;
//Logger that shows all api calls in console
//used for debugging
const logger = require('morgan');

//express middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//express middleware routes
app.use('/message', messageRoute);

//used for simulated production. Express the serves the build

//folder that React creates
if (process.env.NODE_ENV === 'production') {
  const CLIENT_BUILD_PATH = path.join(__dirname, '../client/build');
  app.use(express.static(CLIENT_BUILD_PATH));
  app.get('*', (req, res) =>
    res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'))
  );
}

//simple error handling which should have been made more robust
app.use((err, req, res, next) => {
  res.json(err.stack);
});

//server starts in dev mode
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}...`);
});

module.exports = app;
