const express = require('express');
const path = require('path');

const app = express();
// app.use(express.static(path.resolve(__dirname, '../client/build')));
// app.use(express.static(path.resolve(__dirname, '..')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'))
  // res.render('../../index');
});

// app.get('*.scss', (req, res) => {

// })

app.get('/:file', (req, res, next) => {
  console.log(`looking for: ${req.params.file}`);
  console.log('current dirname is ' + __dirname)
  res.sendFile(path.resolve(__dirname, `../client/build/${req.params.file}`));
});

app.listen(3000, () => {
  console.log('hellooooooo');
});

module.exports = app;