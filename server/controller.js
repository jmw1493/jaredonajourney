const Article = require('./model.js');

const controller = {

  //travel blogs mainpage
  getBlogHeaders(req, res) {
    console.log('doing query')
    // Article.find({$query: {}, $orderby: {date : -1}}, 'title mainPic', {limit: 4}, (err, articles) => {
    //   if (err) return res.sendStatus(400);
    //   return res.send(articles);
    // })
    Article.find({}, (err, articles) => {
      if (err) {
        console.log('articles not found')
        return res.sendStatus(400);
      }
      console.log('articles found')
      return res.send(articles);
    })
  }
  
  // //new photo posted
  // postPhoto(req, res) {
  //   let post = new Post({
  //     id: req.body.id,
  //     date: moment().format("MMM Do YY"),
  //     img: req.body.img,
  //     likes: 0,
  //     details: '',
  //     // comments: [],
  //   });
  //   post.save(function (err, post) {
  //     if (err) return console.error(err);
  //     return res.send(post);
  //   });
  // },

  // //arrow button clicked
  // changePhotos(req, res) {
  //   Post.findOne({id: req.body.id}, (err, post) => {
  //     if (err) return res.sendStatus(400);
  //     return res.send(post);
  //   });
  // },

  // findMultiplePhotos(req, res) {
  //   Post.find({id: { $regex: /[0-4]/ }}, (err, posts) => {
  //     if (err) return res.sendStatus(400);
  //     return res.send(posts);
  //   })
  // },

  // // Post.find({}, (err, posts) => {
  // //   if (err) return res.sendStatus(400);
  // //   return res.send(posts);
  // // })
  
  // //like button clicked
  // addLikes(req, res) {
  //   Post.findOneAndUpdate({id: req.body.id}, {likes: req.body.likes}, {new: true}, (err, post) => {
  //     if (err) return res.sendStatus(400);
  //     res.status(200)
  //     return res.send(post);
  //   });
  // },

  // addDetails(req, res) {
  //   Post.findOneAndUpdate({id: req.body.id}, {details: req.body.details}, {new:true}, (err, post) => {
  //     if (err) return res.sendStatus(400);
  //     res.status(200)
  //     return res.send(post);
  //   });
  // }
}

module.exports = controller;