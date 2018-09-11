const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://apples:bananas22@ds135537.mlab.com:35537/personal-site', { useNewUrlParser: true }, () => {
  console.log('db connected');
});

const articleSchema = new Schema({
  // id: String,
  date: String,
  title: String,
  mainPic: String,
  paragraphs: [String]
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;