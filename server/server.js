const express = require('express');
const path = require('path');
const controller = require('./controller');

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));
// app.use(express.static(path.resolve(__dirname, '..')));

app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../index.html'))
  res.render('../../index');
});

app.get('/get-travel-blogs', (req, res, next) => {
  next();
}, controller.getBlogHeaders);

app.get('/travel-blogs', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
});

// app.get('*.scss', (req, res) => {

// })

// app.get('/:file', (req, res, next) => {
//   console.log(`looking for: ${req.params.file}`);
//   console.log('current dirname is ' + __dirname)
//   res.sendFile(path.resolve(__dirname, `/${req.params.file}`));
// });

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
})

// ^ this isn't working for some reason, '/*' doesn't work either ..... it's because of '/:file' i think

app.listen(3000, () => {
  console.log('hellooooooo');
});

module.exports = app;