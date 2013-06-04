var User = require('../models/user.js');
// var Post = require('../models/post.js');

exports.create = function(req, res) {
    new User({name: "test"}).save();
    res.send("winning!");
};