var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var dbManager = require('./databaseManager.js');
var assert = require('assert');
var url = 'mongodb://localhost:27017/movies';

function MovieDatabase() {};

MovieDatabase.prototype.GetAllMovies = function(callback) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    var manager = new dbManager();
    manager.FindItemsByQuery('movies', {}, db, function(doc) {
      db.close();
      callback(doc);
    });
  })
}

module.exports = MovieDatabase;