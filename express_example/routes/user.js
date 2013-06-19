var Sequelize = require("sequelize");
var sequelize = new Sequelize('bizbase', 'root', '~pass');

var User = sequelize.define('User', { openid: Sequelize.STRING, firstname: Sequelize.STRING, lastname: Sequelize.STRING }, {
  instanceMethods: {
    getFullname: function() {
      return [this.firstname, this.lastname].join(' ')
    }
  }
});

exports.list = function(req, res){

  User.findAll().success(function(users) {
    console.log(users);
    res.render('test', users);
  });
};

exports.test = function(req, res){
  
  res.render('test');

};
