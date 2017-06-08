'use strict';

var backup = require('mongodb-backup');
var moment = require('moment');
var http = require('http');

// URI: mongodb://<user>:<password>@<dbdomain>.<host:<port>/<database>
var DB_URI = 'mongodb://localhost/tanioka';
var DATE_FORMAT = 'YYYYMMDDHHmmss';
var timestamp = moment().format(DATE_FORMAT);
var PORT = 3019;

// サーバの作成
http.createServer(function(req, res) {
  // アクセスするとtarをダウンロードするようにする
  res.writeHead(200, {
    'Content-Type': 'application/x-tar'
  });
  // バックアップを準備する
  backup({
    uri: DB_URI,
    // collections: [ 'users' ],
    stream: res,
    parser: 'json',
  });
}).listen(PORT);
console.log('Server running at http://127.0.0.1:' + PORT.toString());
