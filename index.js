'use strict';
var cofy = require('cofy');
var mongodb = require('mongodb');
cofy.class(mongodb.MongoClient);
mongodb.MongoClient.$connect = cofy.fn(mongodb.MongoClient.connect);
cofy.class(mongodb.Collection);
cofy.class(mongodb.Cursor);
cofy.class(mongodb.Db);
cofy.class(mongodb.Admin);
cofy.class(mongodb.GridStore);
cofy.class(mongodb.Chunk);
cofy.class(mongodb.Mongos);
cofy.class(mongodb.ObjectID);
mongodb.$native = cofy.fn(mongodb.native);
mongodb.$pure = cofy.fn(mongodb.pure);

module.exports = mongodb;