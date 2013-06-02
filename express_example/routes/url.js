var Url = require('../models/url.js');

var djb2Code = function(str){
  var hash = 5381;
  for (i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
  }
  return hash;
};

exports.find = function(req, res) {
  var fixUrl = req.url.split("?");
  var sendUrl, findUrl, result;
  if((fixUrl) && (fixUrl.length > 1) && (fixUrl[1].substr(0,4) === "url=")) {
    sendUrl = fixUrl[1].substr(4).split("&")[0];
    result = {url: sendUrl, urlHash: djb2Code(sendUrl)};
    test = Url.find(result, function(err, data) {
      console.log(data);
      if(!data.length) {
        new Url(result).save();
      }
    });

    //findUrl = "https://www.readability.com/api/content/v1/parser?url=" + sendUrl + "&token=be4591d022b60dc6ad175516afb712a7797f3836";
  }
  res.send(result);
};