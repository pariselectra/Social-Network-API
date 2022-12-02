const express = require('express');
// const db = require('./config/connection');
const routes = require('./routes');
const mongoose = require('mongoose')
const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
const connectionString ='mongodb://localhost/usersDB';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
       console.log(`API server running on port ${PORT}!`);
     });

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//   });
// });
