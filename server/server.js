const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));
// app.use(express.static(path.resolve(__dirname, '..')));

app.get('/', (req, res) => {
  res.render('index');
  // res.render('../../index');
});

// app.get('*.scss', (req, res) => {

// })

// app.get('*', (req, res, next) => {
//   res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
// });

app.listen(3000, () => {
  console.log('hellooooooo');
});

module.exports = app;