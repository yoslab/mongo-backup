'use strict';

var backup = require('mongodb-backup');
var moment = require('moment');

// URI: mongodb://<user>:<password>@<dbdomain>.<host:<port>/<database>
var DB_URI = 'mongodb://localhost/tanioka';
// 保存名
var DATE_FORMAT = 'YYYYMMDDHHmmss';
var timestamp = moment().format(DATE_FORMAT);
var DIR = 'mongo' + timestamp;
var FULL_DIR = __dirname + '/../dump/' + DIR;

// バックアップを開始する
backup({
  uri: DB_URI,
  root: FULL_DIR,
  parser: 'json',
  callback: function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log('dump!: ' + DIR);
    }
  }
});
