'use strict';

var backup = require('mongodb-backup');
var moment = require('moment');
var cron = require('node-cron');

// URI: mongodb://<user>:<password>@<dbdomain>.<host:<port>/<database>
var DB_URI = 'mongodb://localhost/tanioka';


// クロンを設定する
cron.schedule('0 0 4 * * *', function() {
  // 保存場所
  var timestamp = moment().format('YYYYMMDDHHmmss');
  var DIR = 'mongo' + timestamp;
  var FULL_DIR = __dirname + '/../dump/' + DIR;
  console.log('dump start!: ' + timestamp);

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
});

console.log('cron start!');
