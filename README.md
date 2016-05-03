co-mongodb
==========

co version [node-mongodb-native](https://github.com/mongodb/node-mongodb-native).

## why we need this:
```
mongodb version is too old in cofy-mongodb
```
## **fix mongodb version problem of cofy-mongodb**

##Installation
```
$ npm install comongodb --save
```
**Old methods not change.New methods invoke convention: `yield obj.$asyncMethod`**

### Example:
```js
var mongodb = require('comongodb');
var MongoClient = mongodb.MongoClient;
var co = require('co');

co(function*(){
  var db = yield MongoClient.$connect('mongodb://localhost:27017/test');
  var collection = db.collection('test_users');
  var tom = {name:"tom",age:10};
  var tom1 = yield collection.$insert(tom);
  var tom2 = yield collection.find({name:"tom"}).sort('name').limit(1).$toArray();
  console.log(tom , tom1, tom2);
  yield collection.$remove({name:"tom"});
  db.close();
  tom1[0]._id.should.be.ok;
  tom2[0]._id.should.be.ok;
  tom2[0].should.eql(tom);
});
```