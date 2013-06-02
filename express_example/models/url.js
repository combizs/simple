var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var urlSchema = new Schema({
    thread: ObjectId,
    url: String,
    urlHash: String,
    date: {type: Date, default: Date.now},
    content: String
});

module.exports = mongoose.model('Url', urlSchema);