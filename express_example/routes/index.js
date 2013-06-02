var Post = require('../models/post.js');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};